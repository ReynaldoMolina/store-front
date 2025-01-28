import React from "react";
import "./OpenProductSearch.css"

function OpenProductSearch({ isSearchOpen, setIsSearchOpen }) {
  return (
    <button
      type="button"
      className="flx flx-center open-product-search"
      onClick={() => setIsSearchOpen(state => !state)}
    >
      {isSearchOpen ? "Close products" : "Add products +"}
    </button>
  )
}

export { OpenProductSearch };