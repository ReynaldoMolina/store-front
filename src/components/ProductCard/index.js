import React from "react";
import { baseUrl } from "../urls/menuOptionsList";
import { OrderContext } from "../Context/OrderContext";
import { useGetData } from "../Hooks/useGetData";
import { Loading } from "../Loading";
import { ReactComponent as SvgDelete } from "./delete.svg";
import { getOrderTotals } from "../Hooks/getOrderTotals";
import "./ProductCard.css";

function ProductCard({ register }) {
  const {
    productList, setProductList,
    setOrderTotal, setOrderQuantity, setOrderItems
  } = React.useContext(OrderContext);

  const { data, isLoading } = useGetData(baseUrl + 'products/' + register.productId);

  const [quantity, setQuantity] = React.useState(register.quantity);

  function findId() {
    const index = productList.findIndex((e) => e.productId === register.productId);
    return index;
  }

  function orderTotals(list) {
    const totals = getOrderTotals(list);
    setOrderTotal(totals.total);
    setOrderQuantity(totals.quantity);
    setOrderItems(totals.items);
  }

  function reduceQuantity() {
    if (quantity > 1) {
      setProductList((prevList) =>
        prevList.map((item, idx) =>
          idx === findId() ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
      setQuantity((prev) => prev - 1);
      orderTotals(productList);
    }
  }

  function addQuantity() {
    setProductList((prevList) =>
      prevList.map((item, idx) =>
        idx === findId() ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setQuantity((prev) => prev + 1);
    orderTotals(productList);
  }

  return (
    <>
      {isLoading && <Loading/>}
      {isLoading || (
        <div
          key={register.productId}
          className="flx flx-center product-card"
        >
          <span className="flx flx-center product-id">{register.productId}</span>

          <div className="flx product-info-container">
            <span className="flx product-name">{data.name}</span>
            <div className="flx product-info">
              <span className="product-price">$ {register.sellPrice}</span>
              <div className="flx flx-center quantity-container">
                <button
                  className="quantity-button"
                  type="button"
                  onClick={() => reduceQuantity()}
                  >-</button>
                <span className="flx flx-center quantity">{quantity}</span>
                <button
                  className="quantity-button"
                  type="button"
                  onClick={() => addQuantity()}
                >+</button>
              </div>
            </div>
          </div>
          <span className="flx subtotal">$ {register.sellPrice * quantity}</span>
          <SvgDelete
            className="product-delete"
            onClick={() => {
              const newList = productList.filter(e => e.productId !== register.productId);
              setProductList(newList);
              orderTotals(newList);
            }}
          />
        </div>
      )}
    </>
  )
}

export { ProductCard };