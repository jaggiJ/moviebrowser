import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import noImage from "../images/noImage.jpg";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bc267a3d7338eb52a2fe8359129d2354&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const minImagePath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
      const backDropImg = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
      const genre = movieDetails.genres.map((obj, i) => {
        return <li key={i}>{obj.name}</li>
      });
      const production_companies = movieDetails.production_companies.map((obj, i) => {
        return <li key={i}>{obj.name}</li>
      });
    

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backDropImg} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={minImagePath}
                  onError={(e) => {
                    e.target.src = noImage;
                    e.target.onError = null;
                  }}
                  className="img-fluid rounded shadow" alt='...'
                />
              </div>
              <div className="col-md-9">
                <code>
                  Status: {movieDetails.status}<br />
                  Release: {movieDetails.release_date}<br />
                  Original_language: {movieDetails.original_language}<br/>
                  Vote_average: {movieDetails.vote_average}<br />
                  Vote_count: {movieDetails.vote_count}<br />
                  Budget: {movieDetails.budget}<br />
                  Revenue: {movieDetails.revenue}<br /><hr />
                  Genres: {genre}<br />
                  Production_companies: {production_companies}<br />
                </code>
                <p>{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return <>{renderMovieDetails()}</>;
};

export default MovieView;
