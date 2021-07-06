import Hero from "./Hero";
import { Link } from "react-router-dom";
import noImage from "../images/noImage.jpg";
import noResults from "../images/noResults.png";

const MovieCard = ({ movie }) => {
  const movieUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="col-lg-4 col-md-6 my-4">
      <div className="card">
        <img
          src={movieUrl}
          className="card-img-top"
          onError={(e) => {
            e.target.src = noImage;
            e.target.onError = null;
          }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          {/* <p className="card-text">{movie.overview}</p> */}
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};
const SearchView = ({ keyword, searchResult }) => {
  const title = `Searching for ${keyword}`;
  const resultsHtml = searchResult.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });
  if (resultsHtml.length === 0) {
    const text = `No results for ${keyword}`;
    return (
      <>
        <Hero text={text} />
        <img
          src={noResults}
          className="card-img-top"
          onError={(e) => {
            e.target.src = noImage;
            e.target.onError = null;
          }}
          alt="..."
        />
      </>
    );
  }

  return (
    <>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
