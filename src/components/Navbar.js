import { Link, useHistory } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory();
  const updateSearchText = (e) => {
    history.push("/search");
    setSearchText(e.target.value);
  };

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
          <form className="d-flex">
            <input
              className="form-control me-2 btn"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={updateSearchText}
            />
            <button  className="btn btn-outline-success" type="reset" value="">Reset</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
