import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink,
  useHistory,
} from "react-router-dom";

import React, { useState, useEffect } from "react";
import Home from "./Home";
import Header from "./Header";
import FetchSingle from "./FetchSingle";
import NoMatch from "./NoMatch";

function NoUserHeader(props) {
  const { login, loggedIn, errorMsg, homePage, history } = props;
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const [msg, setMsg] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
    // let path = "";
    // console.log(errorMsg);

    // //console.log("homePage is: ", homePage);

    // if (homePage) {
    //   //console.log("homePage is: ", homePage);
    //   path = `/`;
    //   history.push(path);
    //   //setMsg("");
    // } else {
    //   //console.log("homePage is: ", homePage);
    //   path = `/login`;
    //   history.push(path);
    //   //setMsg("No Access...");
    // }

    // if (errorMsg === "" || errorMsg === undefined) {
    //   path = `/`;
    //   history.push(path);
    // } else {
    //   console.log(history);
    // }
    // console.log(errorMsg);
    //redirects user to home page
  };

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };
  return (
    <div>
      {console.log("homePage is: ", homePage)}
      NoUserHeader
      {/* <Header loggedIn={loggedIn} /> */}
      <div>
        <h2>Login</h2>
        <form onChange={onChange}>
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={handleSubmit}>Login</button>
        </form>
        {msg === "" ? "" : <p>{msg}</p>}
      </div>
      {/* <Switch>
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
            {msg === "" ? "" : <p>{msg}</p>}
          </div>
        </Route>
        <Route path="/fetch-single">
          <FetchSingle />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch> */}
    </div>
  );
}

export default NoUserHeader;
