import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import chef from "../images/chef.png";
import "../stylesheets/Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userErrMessage, setUserErrMessage] = useState("");
  const [passErrMessage, setPassErrMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (userName === "admin") {
      setUserErrMessage("");
      if (password === "admin") {
        setPassErrMessage("");
        navigate("/home/recipes");
      } else {
        setPassErrMessage("Incorrect password");
      }
    } else {
      setUserErrMessage("Invalid username.");
    }
  };

  return (
    <div className="grid-container">
      <div className="hero">
        <div className="hero-content">
          <h1>RecipeEZ</h1>
          <p>
            The <strong>RecipeEZ (Recipe made Easy)</strong> app is a digital
            cookbook that offers a wide range of recipes from various cuisines.
          </p>
        </div>
      </div>
      <div className="main-container">
        <img src={chef} alt="chef avatar"></img>
        <h2>Sign in to RecipeEZ</h2>
        <div className="login-container">
          <div className="form-container">
            <p>Username:</p>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <small style={{ color: "red", marginBottom: "0.5em" }}>
              {userErrMessage}
            </small>
            <p>Password:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small style={{ color: "red", marginBottom: "0.5em" }}>
              {passErrMessage}
            </small>
            <button type="button" class="btn btn-danger" onClick={handleSignIn}>
              Sign in
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => navigate("/home/recipes")}
            >
              Sign in as Guest
            </button>
          </div>
        </div>
        <div className="create-container">
          <span>New to RecipeEZ?</span>
          <a href="#">Create an account.</a>
        </div>
      </div>
      <div className="footer">
        <small>Uplift Code Camp</small>
      </div>
    </div>
  );
}

export default Login;
