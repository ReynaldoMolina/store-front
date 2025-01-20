import React from "react";
import "../DataContent/DataContent.css"
import { StoreContext } from "../StoreContext";

function Orders() {
  const { mobileWidth, data } = React.useContext(StoreContext);
  console.log('Render Orders');
  
  return (
    <>
      {data.map(order => (
        <tr key={order.id}>
          <td className="td-id">{order.id}</td>
          <td>{order.name}</td>
          <td className={mobileWidth ? "hidden" : undefined}>{order.abono}</td>
          <td className={mobileWidth ? "hidden" : undefined}>{order.saldo}</td>
          <td className="td-options">
            <button className="tbl-options-btn"></button>
          </td>
        </tr>
      ))}
    </>
  )
}

export { Orders };