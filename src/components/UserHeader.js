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

function UserHeader(props) {
  const { loggedIn } = props;
  return (
    <div>
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fetch-single">fetchSingle</Route>
      </Switch>
    </div>
  );
}

export default UserHeader;
