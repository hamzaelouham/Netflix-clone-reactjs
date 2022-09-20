import { useRouter } from "next/router";
import React from "react";

export const Nav = () => {
  const [show, handlShow] = React.useState(false);
  const history = useRouter();

  React.useEffect(() => {
    const navAnimation = () => {
      if (window.scrollY > 100) {
        handlShow(true);
      } else {
        handlShow(false);
      }
    };
    window.addEventListener("scroll", navAnimation);
    return () => {
      window.removeEventListener("scroll", navAnimation);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"} `}>
      <div className="nav-contents">
        <img
          src="/assets/logo192.png"
          alt="logo"
          className="nav-logo"
          onClick={() => history.push("/")}
        />
        <img
          src="/assets/avtar.png"
          alt="avtar"
          className="nav-avtar"
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  );
};
