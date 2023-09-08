import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function SiteHeadingAndNav() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header>
      <nav>
        <ul className="hList">
          <li>
            <a href="#click" className="menu">
              <h2 className="menu-title">
                <NavLink to="/">Home</NavLink>
              </h2>
              <ul className="menu-dropdown"></ul>
            </a>
          </li>
          <li>
            <a href="#click" className="menu">
              <h2 className="menu-title menu-title_2nd">
                <NavLink to="/quiz">Quiz</NavLink>
              </h2>
              <ul className="menu-dropdown"></ul>
            </a>
          </li>
          {currentUser ? (
            <>
              <li>
                <a href="#click" className="menu">
                  <h2 className="menu-title menu-title_3rd">
                    <NavLink to={`/users/${currentUser.id}`}>
                      {currentUser.username}
                    </NavLink>
                  </h2>
                  <ul className="menu-dropdown"></ul>
                </a>
              </li>
              <li>
                <a href="#click" className="menu">
                  <h2 className="menu-title menu-title_4th">
                    <NavLink to="/logout">Log Out</NavLink>
                  </h2>
                  <ul className="menu-dropdown"></ul>
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="#click" className="menu">
                  <h2 className="menu-title menu-title_3rd">
                    <NavLink to="/login">Log In</NavLink>
                  </h2>
                  <ul className="menu-dropdown"></ul>
                </a>
              </li>
              <li>
                <a href="#click" className="menu">
                  <h2 className="menu-title menu-title_4th">
                    <NavLink to="/sign-up">Sign Up</NavLink>
                  </h2>
                  <ul className="menu-dropdown"></ul>
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
