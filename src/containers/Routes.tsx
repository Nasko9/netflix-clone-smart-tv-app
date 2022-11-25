import React from "react";
import { Route, Switch } from "react-router-dom";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

//Pages
import Home from "./Home";
import Movies from "./Movies";
import Shows from "./Shows";
import Favorites from "./Favorites";
import Search from "./Search";
import NotFound from "./NotFound";

// Create focusable pages
const FocusableSearch = withFocusable()(Search);

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/shows">
        <Shows />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/search">
        <FocusableSearch />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
