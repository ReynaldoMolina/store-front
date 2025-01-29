import React from "react";
import { ReactComponent as SvgDelete } from "./delete.svg";
import { useGetData } from "../Hooks/useGetData";
import { baseUrl } from "../urls/menuOptionsList";
import "./ProductCard.css";

function ProductCard({
  id, orderId, productId, productQty, productSellPrice,
  productList, setProductList
}) {
  const data = useGetData(baseUrl + 'products/' + productId);
  console.log(data);

  const [quantity, setQuantity] = React.useState(productQty);

  return (
    <div
      key={id}
      className="flx flx-center product-card"
    >
      <span className="flx flx-center product-id">{productId}</span>

      <div className="flx product-info-container">
        <span className="flx product-name">{data.name}</span>
        <div className="flx product-info">
          <span className="product-price">$ {productSellPrice}</span>
          <div className="flx flx-center quantity-container">
            <button
              className="quantity-button"
              type="button"
              onClick={() => { 
                if (quantity > 1) {
                  setQuantity(quantity - 1)
                }
              }}
              >-</button>
            <input
              className="flx flx-center quantity"
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(event.target.valueAsNumber)}
            ></input>
            <button
              className="quantity-button"
              type="button"
              onClick={() => setQuantity(quantity + 1)}
            >+</button>
          </div>
        </div>
      </div>
      <span className="flx subtotal">$ {productSellPrice * quantity}</span>
      <SvgDelete
        className="product-delete"
        onClick={() => {
          setProductList(productList.filter(register => register.productId !== productId));
        }}
      />
    </div>
  )
}

export { ProductCard };