import React from "react";
import { ReactComponent as SvgDelete } from "./delete.svg";
import { useGetData } from "../Hooks/useGetData";
import { baseUrl } from "../urls/menuOptionsList";
import "./ProductCard.css";

function ProductCard({ orderId = 1, productId = 1, productQty = 1 }) {
  const data = useGetData(baseUrl + 'products/' + productId);
  console.log(data);

  const [quantity, setQuantity] = React.useState(productQty);

  // function handleRegister(formData) {
  //   const fetchRegister = {
  //     orderId,
  //     productId,
  //     productName,
  //     sellPrice: formData.get('sellPrice'),
  //     quantity: formData.get('quantity'),
  //   }
  //   console.log(fetchRegister);
    
  //   sendData(fetchRegister, registerId, url, id);
  // }

  return (
    <div
      className="flx flx-center product-card"
    >
      <span className="flx flx-center product-id">{productId}</span>

      <div className="flx product-info-container">
        <div className="flx flx-col product-info">
          <span className="flx product-name">{data.name}</span>
          <span className="product-price">$ {data.sellPrice}</span>
        </div>
        <div className="flx product-info">
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
      <span className="flx subtotal">{data.sellPrice * quantity}</span>
      <SvgDelete className="product-delete" />
    </div>
  )
}

export { ProductCard };