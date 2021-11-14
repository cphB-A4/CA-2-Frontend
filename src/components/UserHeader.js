import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink,
} from "react-router-dom";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import FetchSingle from "./FetchSingle";
import FetchSequentially from "./FetchSequentially";
import FetchParallel from "./FetchParallelly";
import FetchParallelly from "./FetchParallelly";

function UserHeader(props) {
  const { loggedIn, logout } = props;
  return (
    <div>
      <Header logout={logout} loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fetch-single">
          <FetchSingle />
        </Route>
        <Route path="/fetch-sequentially">
          <FetchSequentially />
        </Route>
        <Route path="/fetch-parallelly">
          <FetchParallelly />
        </Route>
      </Switch>
    </div>
  );
}

export default UserHeader;
