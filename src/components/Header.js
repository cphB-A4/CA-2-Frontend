import { NavLink, Route } from "react-router-dom";

function Header({ loggedIn }) {
  return (
    <ul className="header">
      {console.log(loggedIn)}
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="active" to="/login">
          login
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
