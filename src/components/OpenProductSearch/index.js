import React from "react";
import { ReactComponent as SvgDropdown } from "./dropdown.svg";
import "./OpenProductSearch.css"

function OpenProductSearch({ isSearchProductOpen, setIsSearchProductOpen }) {
  
  return (
    <button
      type="button"
      className="flx flx-center product-btn"
      onClick={() => setIsSearchProductOpen(state => !state)}
    >
      <SvgDropdown className={`product-list-toggle-dropdown ${isSearchProductOpen && "dropdown-rotate"}`} />
    </button>
  )
}

export { OpenProductSearch };