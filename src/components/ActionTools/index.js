import React from "react";
import add from "./add.svg";
import filter from "./filter.svg";
import { DataContext } from "../Context/DataContext";
import { ClientContext } from "../Context/ClientContext";
import "./ActionTools.css"

function ActionTools() {
  const {
    searchValue, setSearchValue,
    openModal, setOpenModal
  } = React.useContext(DataContext);

  const {
    setClient
  } = React.useContext(ClientContext);
  
  return (
    <div className="flx flx-center action-buttons">
      <search className="flx flx-center search">
        <input
          type="search"
          id="search-bar"
          className="frm-input frm-input-icon"
          placeholder={openModal ? "Disabled" : "Search"}
          value={searchValue}
          onChange={(event) => {
            if (!openModal) {
              setSearchValue(event.target.value)
            }
          }}
        ></input>
      </search>
      <button
        className={`flx flx-center action-btn ${openModal && "disabled"}`}
        onClick={() => {
          setOpenModal(true);
          setClient('');
        }}
      >
        <img src={add} alt="New"></img>
      </button>
      <button className={`flx flx-center action-btn ${openModal && "disabled"}`}>
        <img src={filter} alt="Filter"></img>
      </button>
    </div>
  )
}

export { ActionTools };