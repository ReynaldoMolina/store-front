import React from "react";
import "./ProductCardEmpty.css";

function ProductCardEmpty() {
  return (
    <div className="product-card">
      <h4 className="flx flx-center product-card-empty-title">This order has no products.</h4>
    </div>
  )
}

export { ProductCardEmpty };