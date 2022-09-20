import React, { useState, useRef } from "react";
import { useAuth } from "../src/context/auth";

export const Singin = () => {
  const { login, register } = useAuth();
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState(null);

  const createAccount = (e) => {
    e.preventDefault();
    register();
  };

  const signIn = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);
  };

  return (
    <div className="signin">
      <form>
        <h1>Sign in</h1>
        {/* {error
          ? error.map((e, i) => (
              <p className="error" key={i}>
                {e}
              </p>
            ))
          : ""} */}
        <p></p>
        <input ref={email} type="email" placeholder="Email" />
        <input ref={password} type="password" placeholder="Password" />
        <button className="signbtn" onClick={signIn} type="submit">
          Sign in
        </button>
        <h4>
          <span className="signin-gray">New to netflix?</span>

          <span onClick={createAccount} className="signup-link">
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
};
