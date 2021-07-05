import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails ] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bc267a3d7338eb52a2fe8359129d2354&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data)
      })
  }, [id])

  return (
    <>
      <Hero text={movieDetails.original_title} />
    </>
  );
};

export default MovieView;
