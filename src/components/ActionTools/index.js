import React from "react";
import add from "./add.svg";
import filter from "./filter.svg";
import { DataContext } from "../Context/DataContext";
import "./ActionTools.css"

function ActionTools() {
  const {
    searchValue, setSearchValue,
    openModal, setOpenModal,
    setRegister
  } = React.useContext(DataContext);
  
  return (
    <>
      {openModal || (
        <div className="flx flx-center action-buttons">
          <search className="flx flx-center search">
            <input
              type="search"
              id="search-bar"
              className="frm-input frm-input-icon"
              placeholder={openModal ? "Disabled" : "Search"}
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            ></input>
          </search>
          <button
            className="flx flx-center action-btn"
            onClick={() => {
              setOpenModal(true);
              setRegister('');
            }}
          >
            <img src={add} alt="New"></img>
          </button>
          <button className="flx flx-center action-btn">
            <img src={filter} alt="Filter"></img>
          </button>
        </div>
      )}
    </>
  )
}

export { ActionTools };