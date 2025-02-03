import React from "react";
import { OrderContext } from "../Context/OrderContext";
import { ReactComponent as SvgDropdown } from "./dropdown.svg";
import "./OpenProductSearch.css"

function OpenProductSearch() {
  const { isSearchOpen, setIsSearchOpen } = React.useContext(OrderContext);
  
  return (
    <button
      type="button"
      className="flx flx-center product-btn"
      onClick={() => setIsSearchOpen(state => !state)}
    >
      <SvgDropdown className={`product-list-toggle-dropdown ${isSearchOpen && "dropdown-rotate"}`} />
    </button>
  )
}

export { OpenProductSearch };