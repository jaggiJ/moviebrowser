import Hero from "./Hero";
import { Link } from "react-router-dom";
import noImage from "../images/noImage.jpg";
import noResults from "../images/noResults.png";

const MovieCard = ({ movie }) => {
  const movieUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  const releaseDate = () => {
    if (movie.release_date) {
      return movie.release_date.substring(0,4)
    } else {
      return '- '
    }
  }
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
          <p className="card-text">{releaseDate()}, average: {movie.vote_average}</p>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};
const SearchView = ({ searchText, searchResult }) => {
  const title = `Searching for ${searchText}`;
  const resultsHtml = searchResult.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  if (resultsHtml.length === 0 && searchText.length >= 2) {
    // Shows placeholder image when no database image is present.
    // Also when no search results, displays 'Oops no results'
    const text = `No results for " ${searchText} "`;
    // console.log(' IF HAPPENED !')
    return (
      <>
        <Hero text={text} />
        <img
          src={noResults} //Oops image
          className="card-img-top"
          onError=
            {(e) => {
                e.target.src = noImage; //no image available image
                e.target.onError = null;
              }
            }
          alt="..." 
        />
      </>
    );
  } else {
    // console.log('ELSE HAPPENS!')
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
  }
}
export default SearchView;
