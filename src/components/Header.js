import { NavLink } from "react-router-dom";

function Header({ loggedIn, isAdmin }) {
  return (
    <ul className="header">
      {console.log(loggedIn)}
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      {!loggedIn ? (
        <div>
          <li>
            <NavLink exact activeClassName="active" to="/login">
              Login
            </NavLink>
          </li>
        </div>
      ) : (
        <div>
          {isAdmin ? (
            <div>
              <li>
                <NavLink exact activeClassName="active" to="/fetchSequentially">
                  FetchSequentially
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/fetchParallelly">
                  FetchParallelly
                </NavLink>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <NavLink exact activeClassName="active" to="/fetch-single">
                  FetchSingle
                </NavLink>
              </li>
            </div>
          )}

          <li>
            <NavLink exact activeClassName="active" to="/logout">
              Logout
            </NavLink>
          </li>
        </div>
      )}
    </ul>
  );
}

export default Header;
