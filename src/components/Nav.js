import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

export default function Nav() {
  const [show, handlShow] = useState(false);
  const history = useHistory();

  const navAnimation = () => {
    if (window.scrollY > 100) {
      handlShow(true);
    } else {
      handlShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navAnimation);
    return () => {
      window.removeEventListener("scroll", navAnimation);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"} `}>
      <div className="nav-contents">
        <img
          src="http://localhost:3000/logo192.png"
          alt="logo"
          className="nav-logo"
          onClick={() => history.push("/")}
        />
        <img
          src="http://localhost:3000/avtar.png"
          alt="avtar"
          className="nav-avtar"
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  );
}
