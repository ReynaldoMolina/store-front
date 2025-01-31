import React from "react";
import { baseUrl } from "../urls/menuOptionsList";
import { OrderContext } from "../Context/OrderContext";
import { useGetData } from "../Hooks/useGetData";
import { ReactComponent as SvgDelete } from "./delete.svg";
import { getSum } from "../Hooks/getSum";
import "./ProductCard.css";

function ProductCard({ register }) {
  const {
    productList, setProductList, setOrderTotal
  } = React.useContext(OrderContext);

  const data = useGetData(baseUrl + 'products/' + register.productId);

  const [quantity, setQuantity] = React.useState(register.quantity);

  function findId() {
    const index = productList.findIndex((e) => e.productId === data.id);
    return index;
  }

  function addQuantity() {
    const index = findId();
    
    const newList = [...productList];
    newList[index].quantity += 1;
    setQuantity(quantity + 1);
    console.log('sum button', getSum(newList));
  }

  return (
    <div
      key={data.id}
      className="flx flx-center product-card"
    >
      <span className="flx flx-center product-id">{data.id}</span>

      <div className="flx product-info-container">
        <span className="flx product-name">{data.name}</span>
        <div className="flx product-info">
          <span className="product-price">$ {data.sellPrice}</span>
          <div className="flx flx-center quantity-container">
            <button
              className="quantity-button"
              type="button"
              onClick={() => { 
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
              >-</button>
            <input
              className="flx flx-center quantity"
              type="number"
              value={quantity}
              onChange={(event) => {
                setQuantity(event.target.valueAsNumber);
                console.log('quantity input changed');
              }}
            ></input>
            <button
              className="quantity-button"
              type="button"
              onClick={() => addQuantity()}
            >+</button>
          </div>
        </div>
      </div>
      <span className="flx subtotal">$ {data.sellPrice * quantity}</span>
      <SvgDelete
        className="product-delete"
        onClick={() => {
          setProductList(productList.filter(e => e.productId !== register.productId));
          // setTotal(getSum(productList));
        }}
      />
    </div>
  )
}

export { ProductCard };