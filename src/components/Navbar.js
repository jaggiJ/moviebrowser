import { Link, useHistory } from "react-router-dom";

const Navbar = ({setSearchText}) => {
  const history = useHistory();
  const updateSearchText = (e) => {
    history.push("/search");
    setSearchText(e.target.value);
  };
  const navigateToHome = (e) => {
    history.push("/");
  }
  const onSubmit = (e) => {
    e.preventDefault();
  }
    // custom form handling here
  
    
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>{" "}
        {/* 'Link to='React router replacement for 'a href='; no need to reload whole page */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form onSubmit={onSubmit} value='' className="d-flex">
            <input
              autoFocus //only one element per page, causes focus 'in here' on page load
              className="form-control me-2 btn"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onChange={updateSearchText}
            />
            <button onClick={navigateToHome} className="btn btn-outline-success" type="reset" value="">Reset</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
