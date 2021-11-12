import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink,
} from "react-router-dom";

import React, { useState, useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import FetchSingle from "./FetchSingle";

function NoUserHeader(props) {
  const { login, loggedIn } = props;
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };
  return (
    <div>
      NoUserHeader
      <Header loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <div>
            <h2>Login</h2>
            <form onChange={onChange}>
              <input placeholder="User Name" id="username" />
              <input placeholder="Password" id="password" />
              <button onClick={handleSubmit}>Login</button>
            </form>
          </div>
        </Route>
        <Route path="/fetch-single">
          <FetchSingle />
        </Route>
      </Switch>
    </div>
  );
}

export default NoUserHeader;
