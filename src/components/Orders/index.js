import React from "react";
import "../DataContent/DataContent.css"
import { MobileContext } from "../Context/MobileContext"
import { ClientContext } from "../Context/ClientContext";

function Orders() {
  const { mobileWidth } = React.useContext(MobileContext);
  const { data } = React.useContext(ClientContext);
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