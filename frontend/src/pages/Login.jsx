import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logUserIn } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import "../styles/login.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData.entries()));
    if (error) return setErrorText(error.statusText);
    setCurrentUser(user);
    navigate(`/users/${user.id}`);
  };

  if (currentUser) return <Navigate to="/" />;

  return <>
    <form onSubmit={handleSubmit} className="login-form">
    <h1>Login</h1>
    <h5>Login to continue your adventure!</h5>
      {/* <label htmlFor="username">Username</label> */}
      <input type="text" autoComplete="username" id="username" name="username" placeholder="Username" />

      {/* <label htmlFor="password">Password</label> */}
      <input type="password" autoComplete="current-password" id="password" name="password" placeholder="Password" />

      <button className="login-button">Log in!</button>
      <p>Don't have an account with us? <Link to="/sign-up" className="link">Sign up!</Link></p>
    </form>

    { !!errorText && <p>{errorText}</p> }
  </>;
}
