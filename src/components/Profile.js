import React from "react";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../reduxjs/reduces";
import { auth } from "../utils/auth";

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile-body">
        <h1>Edite Profile</h1>
        <div className="profile-info">
          <img src="http://localhost:3000/avtar.png" alt="profile" />
        </div>
        <div className="profile-det">
          <h2>{user.email}</h2>
          <div className="profile-plans">
            <h3>Plans</h3>
            <button onClick={() => auth.signOut()} className="signout">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
