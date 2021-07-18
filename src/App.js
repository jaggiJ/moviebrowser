import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/HomeView";
import AboutView from "./components/AboutView";
import MovieView from "./components/MovieView";
import SearchView from "./components/SearchView";
import Error404 from "./components/Error404";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText.length >= 2) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bc267a3d7338eb52a2fe8359129d2354&query=${searchText}&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView searchText={searchText} searchResult={searchResult} />
          {/* 
          TODO searchText suspected redundant
          */}
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Redirect from="/moviebrowser" to="/" />
        <Route path="/:id2" component={Error404} />
      </Switch>
    </div>
  );
  /*  
  React router does partial matching, so /users partially matches /users/create, 
  so it would incorrectly return the Users route again!
  The exact param disables the partial matching for a route and makes sure that it only 
  returns the route if the path is an EXACT match to the current url.
  */
}

export default App;
