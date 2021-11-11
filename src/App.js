import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
