import React, { useState } from "react";
import { Singin } from "../components/Singin";
// import { ProtectAfterAuth } from "../src/utils/protected";

export default function Login() {
  const [singIn, setsingIn] = useState(false);

  return (
    <div
      className="login"
      style={{
        background: `url("/assets/bg.png") center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="login-bg">
        <img src="/assets/logo192.png" alt="logo" className="nav-logo" />
      </div>
      <button className="login-button" onClick={() => setsingIn(true)}>
        Sign in
      </button>
      <div className="login-grident" />
      <div className="login-body">
        {singIn ? (
          <Singin />
        ) : (
          <>
            <h2>Unlimited films, TV programmes and more.</h2>
            <h3>Watch anywhere , cancel at any time</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              menbreship
            </h4>
            <div className="login-input">
              <form>
                <input type="email" placeholder="Email" />
                <button
                  className="login-getstarted"
                  onClick={() => setsingIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// export const getServerSideProps = async (ctx) => ProtectAfterAuth(ctx);
