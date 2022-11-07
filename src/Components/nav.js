import React from "react";
import { useUserContext } from "../context/userContext"
import "../App.css"

const Header = () => {
  const {user} = useUserContext();
  console.log(user)

  return (
    <nav className="nav-container">
      <div className="nav-bar">
        <h2>User Authenticator</h2>
        <div className="profile">
          <h3>Welcome, <span>{ user.name }!</span></h3>
          
        </div>
      </div>
    </nav>
  );
};
export default Header;
