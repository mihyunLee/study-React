import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const API_KEY = "dd2ce150186e2db84976f01c898f68df";

  const getMovies = async () => {
    const json = await (
      await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${API_KEY}&itemPerPage=50`
      )
    ).json();

    setMovies(json.movieListResult.movieList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading ...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.movieCd}
              id={movie.movieCd}
              title={movie.movieNm}
              year={movie.prdtYear}
              state={movie.prdtStatNm}
              genres={movie.genreAlt}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
