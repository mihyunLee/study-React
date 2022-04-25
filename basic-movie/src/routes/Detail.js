import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const Detail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>loading ...</h1>
      ) : (
        <div>
          <h2>
            {movie.title} ({movie.year})
          </h2>
          <img src={movie.medium_cover_image} alt="movie" />
          <p>
            {movie.genres.map((g) => (
              <span key={g}>{g} | </span>
            ))}
          </p>
          <p>Runnig Time: {movie.runtime}minutes</p>
          <p>Rating: ⭐{movie.rating}</p>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
