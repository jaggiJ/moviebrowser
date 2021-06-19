import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
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
          <SearchView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
