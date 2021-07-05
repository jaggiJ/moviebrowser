import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [ movieDetails, setMovieDetails ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bc267a3d7338eb52a2fe8359129d2354&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data)
        setIsLoading(false)
      })
  }, [id])

  function renderMovieDetails() {
    if(isLoading) {
      return <Hero text='Loading...' />
    }
    if(movieDetails) {
      return <Hero text={movieDetails.original_title} />
    }
  }

  return (
    <>
      {renderMovieDetails()}
    </>
  );
};

export default MovieView;
