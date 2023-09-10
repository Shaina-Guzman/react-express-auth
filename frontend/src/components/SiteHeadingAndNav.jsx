import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { logUserOut } from "../adapters/auth-adapter";
import Home from '../audio/Home.mp3';
import LogIn from '../audio/Log In.mp3';
import SignUp from '../audio/Sign Up.mp3';
import LogOut from '../audio/Log Out.mp3';
import Profile from '../audio/Profile.mp3';
import Parents from '../audio/Parents.mp3';


export default function SiteHeadingAndNav() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const audioMap = {
    home: new Audio(Home),
    logIn: new Audio(LogIn),
    signUp: new Audio(SignUp),
    logOut: new Audio(LogOut),
    profile: new Audio(Profile),
    parents: new Audio(Parents)
}
  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <header>
      <nav>
        <ul className="hList">
          <li onMouseEnter={() => audioMap.home.play()} onMouseLeave={() => {
            audioMap.home.pause()
            audioMap.home.currentTime = 0
            }}>
            <a className="menu" >
              <h2 className="menu-title">
                <NavLink to="/">Home</NavLink>
              </h2>
              <ul className="menu-dropdown"></ul>
            </a>
          </li>
          <li onMouseEnter={() => audioMap.parents.play()} onMouseLeave={() => {
            audioMap.parents.pause()
            audioMap.parents.currentTime = 0
            }}>
            <a className="menu">
              <h2 className="menu-title menu-title_2nd">
                <NavLink to="/parents">Parents</NavLink>
              </h2>
              <ul className="menu-dropdown"></ul>
            </a>
          </li>
          {currentUser ? (
            <>
              <li onMouseEnter={() => audioMap.profile.play()} onMouseLeave={() => {
            audioMap.profile.pause()
            audioMap.profile.currentTime = 0
            }}>
                <a className="menu">
                  <h2 className="menu-title menu-title_3rd">
                    <NavLink to={`/users/${currentUser.id}`}>
                      {currentUser.username}
                    </NavLink>
                  </h2>
                  <ul className="menu-dropdown"></ul>
                </a>
              </li>
              <li onMouseEnter={() => audioMap.logOut.play()} onMouseLeave={() => {
            audioMap.logOut.pause()
            audioMap.logOut.currentTime = 0
            }}>
                <a className="menu" onClick={handleLogout}>
                  <h2 className="menu-title menu-title_4th">
                    <NavLink to="/">Log Out</NavLink>
                  </h2>
                  <ul className="menu-dropdown"></ul>
                </a>
              </li>
            </>
          ) : (
            <>
              <li onMouseEnter={() => audioMap.logIn.play()} onMouseLeave={() => {
            audioMap.logIn.pause()
            audioMap.logIn.currentTime = 0
            }}>
                <a className="menu">
                  <h2 className="menu-title menu-title_3rd">
                    <NavLink to="/login">Log In</NavLink>
                  </h2>
                  <ul className="menu-dropdown"></ul>
                </a>
              </li>
              <li onMouseEnter={() => audioMap.signUp.play()} onMouseLeave={() => {
            audioMap.signUp.pause()
            audioMap.signUp.currentTime = 0
            }}>
                <a className="menu">
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
