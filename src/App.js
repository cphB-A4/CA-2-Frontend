import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import facade from "./apiFacade";
import "bootstrap/dist/css/bootstrap.min.css";

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
import Home from "./components/Home";
import Login from "./components/Login";
import FetchSingle from "./components/FetchSingle";
import NoUserHeader from "./components/NoUserHeader";
import UserHeader from "./components/UserHeader";
import NoMatch from "./components/NoMatch";

/*function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  const [errorMsg, setErrorMsg] = useState("All is good");

  useEffect(() => {
    facade
      .fetchData()
      .then((data) => setDataFromServer(data.msg))
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => setErrorMsg(e.code + ": " + e.message));
        } else {
          console.log("Network error");
        }
      });
  }, []);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
      <p>{errorMsg}</p>
    </div>
  );
}*/

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [homePage, setHomePage] = useState(false);
  const [x, setX] = useState(false);
  //const [msg, setMsg] = useState("");

  const history = useHistory();

  useEffect(() => {
    let path = "";
    console.log(errorMsg);

    if (loggedIn) {
      setHomePage(true);
      //console.log("homePage is: ", homePage);
      path = `/`;
      history.push(path);
      //setMsg("");
    } else if (!loggedIn && !x) {
      setHomePage(false);
      path = `/`;
      history.push(path);
    } else {
      setHomePage(false);
      path = `/noUserHeader`;
      history.push(path);
    }
  }, [loggedIn]);

  // useEffect(() => {
  //   let path = "";
  //   console.log(errorMsg);

  //   //console.log("homePage is: ", homePage);

  //   if (homePage) {
  //     //console.log("homePage is: ", homePage);
  //     path = `/`;
  //     history.push(path);
  //     //setMsg("");
  //   } else {
  //     //console.log("homePage is: ", homePage);
  //     path = `/noUserHeader`;
  //     history.push(path);
  //     //setMsg("No Access...");
  //   }
  // }, [loginProcess]);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade
      .login(user, pass)
      .then((res) => {
        setLoggedIn(true);
        setX(true);
      })
      .catch((err) => {
        if (err.status) {
          err.fullError.then((e) => {
            console.log(err.status + ": " + e.message);
            setErrorMsg(err.status + ": " + e.message);
          });
        } else {
          console.log("Network error");
        }
      });
  };

  //logedInState propdrilling ned til Header component. Lifting state up
  return (
    <div className="App">
      {/* <Header loggedIn={loggedIn} /> */}
      <Header loggedIn={loggedIn} />

      {/* <UserHeader
        validateAccess={facade.validateAccess()}
        logout={logout}
        loggedIn={loggedIn}
      /> */}
      {/* {!loggedIn ? (
        <NoUserHeader
          errorMsg={errorMsg}
          loggedIn={loggedIn}
          login={login}
          homePage={homePage}
          history={history}
        />
      ) : (
        <div>
          <UserHeader
            validateAccess={facade.validateAccess()}
            logout={logout}
            loggedIn={loggedIn}
          />
          {}
        </div>
      )} */}
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/fetch-single">
          <FetchSingle />
        </Route>
      </Switch> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login homePage={homePage} history={history} />

          {/* <div>
            <h2>Login</h2>
            <form onChange={onChange}>
              <input placeholder="User Name" id="username" />
              <input placeholder="Password" id="password" />
              <button onClick={handleSubmit}>Login</button>
            </form>
            {msg === "" ? "" : <p>{msg}</p>}
          </div> */}
        </Route>
        <Route path="/fetch-single">
          <FetchSingle />
        </Route>
        <Route path="/noUserHeader">
          <NoUserHeader
            errorMsg={errorMsg}
            loggedIn={loggedIn}
            login={login}
            homePage={homePage}
            history={history}
          />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
