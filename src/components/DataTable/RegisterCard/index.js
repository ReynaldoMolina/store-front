import React from "react";
import "./RegisterCard.css";
import { StoreContext } from "../../StoreContext";

function RegisterCard() {
  const { data } = React.useContext(StoreContext);
  
  return (
    <>
      {data.map(register => (
        <tr>
          <td className="td-id">{data.id}</td>
          <td>{data.name}</td>
          <td className="td-options">
            <button className="tbl-options-btn"></button>
          </td>
        </tr>
      ))}
    </>
  )
}

export { RegisterCard };