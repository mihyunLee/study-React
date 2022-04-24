import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, title, year, state, genres }) => {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>
          {title}({year})
        </Link>
      </h2>
      <button>{state}</button>
      <p>{genres}</p>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};

export default Movie;
