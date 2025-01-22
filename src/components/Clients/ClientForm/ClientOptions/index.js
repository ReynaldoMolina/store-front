import React from "react";
import { ClientContext } from "../../../Context/ClientContext";
import { ReactComponent as SvgEdit } from "./edit.svg";
import { ReactComponent as SvgOrders } from "./orders.svg";
import { ReactComponent as SvgReceipts } from "./receipts.svg";
import { ReactComponent as SvgProfit } from "./profit.svg";
import { ReactComponent as SvgAddOrder } from "./addorder.svg";
import "./ClientOptions.css"

const svgClass = "client-option";

function ClientOptions() {
  const { editable, setEditable } = React.useContext(ClientContext);

  return (
    <div className="flx flx-center client-options">
      <SvgEdit
        className={`${svgClass} ${editable && "active"}`}
        onClick={() => setEditable(state => !state)}
      />
      <SvgOrders className={svgClass}/>
      <SvgReceipts className={svgClass}/>
      <SvgProfit className={svgClass}/>
      <SvgAddOrder className={svgClass}/>
    </div>
  )
}

export { ClientOptions };