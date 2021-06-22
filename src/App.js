import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log(searchText, 'is current searchText')
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=SECRETAPIKEY&query=${searchText}&page=1`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
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
      </Switch>
    </div>
  );
}

export default App;
