import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text='Home' />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-2"></div>
          <p>Type movie title in the "Search" bar</p>
        </div>
      </div>
    </>
  );
};

export default Home;
