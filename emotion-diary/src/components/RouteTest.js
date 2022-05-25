import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <div>
      <Link to="/">Home</Link> <br />
      <Link to="/new">New</Link> <br />
      <Link to="/edit">Edit</Link> <br />
      <Link to="/diary/1">Diary</Link>
    </div>
  );
};

export default RouteTest;
