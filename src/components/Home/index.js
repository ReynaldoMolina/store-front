import React from "react";
import logo from "./logo-sm.png";
import "./Home.css";

function Home() {
  return (
    <div className="flx flx-col flx-center home">
      <img src={logo} alt="Logo"></img>
      <h1>Elegancia y tendencias de Shein</h1>
      <h1>a tu alcance</h1>
      <h3>Página en construcción</h3>
    </div>
  )
}

export { Home };