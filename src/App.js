import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import MovieView from "./components/MovieView";
import SearchView from "./components/SearchView";
import Error404 from "./components/Error404";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=bc267a3d7338eb52a2fe8359129d2354&query=${searchText}&page=1`)
        .then(response => response.json())
        .then(data => {
          setSearchResult(data.results)
        })
    }
  }, [searchText]
  )

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        {" "}
        {/* similar to 'Case' on other languages */}
        {/* Enables instant switching of content without need to reload page */}
        <Route path="/" exact>
          {" "}
          {/* This is first form of adding component */}
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />{" "}
        {/* This is second form of adding component */}
        <Route path="/search">
          <SearchView keyword={searchText} searchResult={searchResult} />
        </Route>
        <Route path='/movies/:id' component={MovieView} />
        <Redirect from='/moviebrowser' to="/" />
        <Route path='*/:id2' component={Error404} />
      </Switch>
    </div>
  );
}

export default App;