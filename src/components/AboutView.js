import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-2"></div>
          <p>
            This is browser for movies using API. It is done as exercise-project part of Udemy course in full stack webapp development.
            <br />
            <a href='https://www.udemy.com/share/1046682@FEdKbF5fTlIHcUJEEkhnfj0=/' target="_blank" rel="noreferrer">Udemy Bootcamp</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutView;
