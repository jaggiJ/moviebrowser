import Hero from "./Hero";
import { useParams } from "react-router-dom";

const MovieView = () => {
  const { id } = useParams();
  return (
    <>
      <Hero text="Movie Details" />
      {console.log(id)}
    </>
  );
};

export default MovieView;
