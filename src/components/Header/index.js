import React from "react";
import "./Header.css";
import menuIcon from "./menu.svg";
import profilePic from "./store-logo-icon-sm.png";

function Header() {
  return (
    <header className="flx flx-center header">
      <img src={menuIcon} alt="Menu" id="menu-button"></img>
      <h1>Jahaira Store</h1>
      <img src={profilePic} alt="User"></img>
    </header>
  )
}

export { Header };