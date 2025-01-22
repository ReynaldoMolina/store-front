import React from "react";
import add from "./add.svg";
import filter from "./filter.svg";
import "./ActionTools.css"
import { ClientContext } from "../Context/ClientContext";

function ActionTools() {
  const { searchValue, setSearchValue } = React.useContext(ClientContext);
  
  return (
    <div className="flx flx-center action-buttons">
      <search className="flx flx-center search">
        <input
          type="search"
          id="search-bar"
          className="frm-input frm-input-icon"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        ></input>
      </search>
      <button id="new-register" className="flx flx-center action-btn">
        <img src={add} alt="New"></img>
      </button>
      <button className="flx flx-center action-btn">
        <img src={filter} alt="Filter"></img>
      </button>
    </div>
  )
}

export { ActionTools };