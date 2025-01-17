import React from "react";
import "./Header.css";
import { ToggleMenuButton } from '../ToggleMenuButton';
import profilePic from "./store-logo-icon-sm.png";

function Header() {
  return (
    <header className="flx flx-center header">
      <ToggleMenuButton />
      <h1>Jahaira Store</h1>
      <img src={profilePic} alt="User"></img>
    </header>
  )
}

export { Header };