import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text='Home' />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-2"></div>
          <p>Type some movie title to start searching. Hit Enter to start another search.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
