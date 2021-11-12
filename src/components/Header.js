import { NavLink, Route } from "react-router-dom";

function Header({ loggedIn, logout }) {
  return (
    <ul className="header">
      {console.log(loggedIn)}
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink exact activeClassName="active" to="/fetch-single">
          FetchSingle
        </NavLink>
      </li>
      {!loggedIn ? (
        <li>
          <NavLink exact activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            exact
            activeClassName="active"
            to="/"
            onClick={() => logout()}
          >
            Logout
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default Header;
