import { NavLink, Route } from "react-router-dom";

function Header() {
  return (
    <ul className="header">
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
