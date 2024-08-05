import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/cards/logo.png";
import { login, signup } from "../../firebase";
import { ClipLoader } from "react-spinners";

export default function Login() {
  const [signState, setSignState] = useState("sign in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "sign in") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="spinner-container">
      <ClipLoader className="clipLoader" color="#FF0000" size={150} />
    </div>
  ) : (
    <div className="login">
      <img src={logo} alt="logo" className="logo" />
      <div className="login-form">
        <form>
          <h1>{signState}</h1>
          {signState === "sign up" ? (
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Your name"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className="SignUp" onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
          <div className="form-switch">
            {signState === "sign in" ? (
              <p>
                New to Netflix?{" "}
                <span
                  onClick={() => {
                    setSignState("sign up");
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setSignState("sign in");
                  }}
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
