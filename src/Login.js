import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://germainmaureau.com/app/uploads/2020/05/Amazon-logo.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign in</button>
        </form>

        <p>
          By signin-in, you agree to Amazon-Clone's Conditions of Use & Sale.
          Please see out Privacy Notice, our Cookie Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login_registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
