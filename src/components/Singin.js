import React, { useState, useRef } from "react";
import { auth } from "../utils/auth";

function Singin() {
  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .singInWithEmailAndPassword(email.current.value, password.current.value)
      .then((user) => {
        console.log(user);
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  };

  return (
    <div className="signin">
      <form>
        <h1>Sign in</h1>
        {error
          ? error.map((e, i) => (
              <p className="error" key={i}>
                {e}
              </p>
            ))
          : ""}
        <p></p>
        <input ref={email} type="email" placeholder="Email" />
        <input ref={password} type="password" placeholder="Password" />
        <button className="signbtn" onClick={signIn} type="submit">
          Sign in
        </button>
        <h4>
          <span className="signin-gray">New to netflix?</span>

          <span onClick={register} className="signup-link">
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Singin;
