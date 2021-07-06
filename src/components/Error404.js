import Hero from "./Hero";
import { useParams } from "react-router-dom";


const Error404 = () => {
    const { id2 } = useParams();
    const text = `404 Error. Page "${id2}" does not exist`

    return <Hero text={text} />
  };
  
  export default Error404;
  