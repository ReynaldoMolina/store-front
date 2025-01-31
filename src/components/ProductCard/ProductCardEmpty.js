import React from "react";
import "./ProductCardEmpty.css";

function ProductCardEmpty() {
  return (
    <div className="flx flx-center product-card">
      <h4 className="product-card-empty-title">This order has no products.</h4>
    </div>
  )
}

export { ProductCardEmpty };