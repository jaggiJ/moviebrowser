import Hero from "./Hero";

const MovieCard = ({movie}) => {
  const movieUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return(
    <div className='col-lg-4 col-md-6 my-4'>
      <div className="card">
        <img src={movieUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">{movie.overview}</p>
          <a href="#" className="btn btn-primary">Details</a>
        </div>
      </div>
    </div>
  )
}
const SearchView = ({keyword, searchResult}) => {
  const title = `Searching for ${keyword}`
  const resultsHtml = searchResult.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

  return (
    <>
     <Hero text={title} />
     {resultsHtml &&
      <div className='container'>
        <div className='row'>
          {resultsHtml}
        </div>
      </div>
     }
    </>
  );
};

export default SearchView;
