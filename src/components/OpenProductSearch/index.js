import React from "react";
import { OrderContext } from "../Context/OrderContext";
import { ReactComponent as SvgDropdown } from "./dropdown.svg";
import "./OpenProductSearch.css"

function OpenProductSearch() {
  const { isSearchOpen, setIsSearchOpen } = React.useContext(OrderContext);
  
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