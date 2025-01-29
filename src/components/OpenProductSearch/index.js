import React from "react";
import { ReactComponent as SvgDropdown } from "./dropdown.svg";
import "./OpenProductSearch.css"

function OpenProductSearch({ isSearchOpen, setIsSearchOpen }) {
  return (
    <button
      type="button"
      className={`flx open-product-search ${isSearchOpen && "open-product-search-close"}`}
      onClick={() => setIsSearchOpen(state => !state)}
    >
      {isSearchOpen ? "Close product list" : "Product list"}
      <SvgDropdown className={`open-product-search-dropdown ${isSearchOpen && "dropdown-rotate"}`} />
    </button>
  )
}

export { OpenProductSearch };