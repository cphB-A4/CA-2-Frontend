import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import FetchSingle from "./components/FetchSingle";
import FetchSequentially from "./components/FetchSequentially";
import FetchParallelly from "./components/FetchParallelly";
import NoMatch from "./components/NoMatch";
import Logout from "./components/Logout.component";
import jwt_decode from "jwt-decode";

function App(props) {
  const { facade } = props;

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token_encoded = facade.getToken();
    console.log("Token encoded: ", token_encoded);

    if (token_encoded !== null) {
      const token = jwt_decode(token_encoded);
      console.log("Token decoded: ", token);
      if (token.roles === "admin") {
        setIsAdmin(true);
      }
    }
  }, [loggedIn]);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setIsAdmin(false);
    const path = `/`;
    history.push(path);
  };

  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then((res) => {
        setLoggedIn(true);
        const path = `/`;
        history.push(path);
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => {
            console.log(err.status + ": " + e.message);
            setErrorMsg("Error: " + e.message);
          });
        } else {
          console.log("Network error");
        }
      });
  };

  return (
    <div className="App">
      <Header loggedIn={loggedIn} isAdmin={isAdmin} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login
            errorMsg={errorMsg}
            loggedIn={loggedIn}
            login={login}
            history={history}
          />
        </Route>
        <Route path="/fetch-single">
          <FetchSingle />
        </Route>
        <Route path="/fetchSequentially">
          <FetchSequentially />
        </Route>
        <Route path="/fetchParallelly">
          <FetchParallelly />
        </Route>
        <Route path="/logout">
          <Logout logout={logout} />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
