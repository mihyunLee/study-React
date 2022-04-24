import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const Detail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const API_KEY = "dd2ce150186e2db84976f01c898f68df";

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(
        `	http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${API_KEY}&movieCd=${id}`
      )
    ).json();
    setMovie(json.movieInfoResult.movieInfo);
    console.log(json.movieInfoResult.movieInfo);
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
            {movie.movieNm} ({movie.prdtYear})
          </h2>
          {movie.genres.map((g) => (
            <span key={g.genreNm}>{g.genreNm} | </span>
          ))}
          <p>Runnig Time: {movie.showTm}minutes</p>
          <p>
            Nation :{" "}
            {movie.nations.map((n) => (
              <span>{n.nationNm}</span>
            ))}
          </p>
          <p>
            Actros:{" "}
            {movie.actors.map((a) => (
              <span>{a.peopleNm} | </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default Detail;
