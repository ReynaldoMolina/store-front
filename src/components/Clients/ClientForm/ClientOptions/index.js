import React from "react";
import { ReactComponent as SvgOrders } from "./orders.svg";
import { ReactComponent as SvgReceipts } from "./receipts.svg";
import { ReactComponent as SvgProfit } from "./profit.svg";
import { ReactComponent as SvgAddOrder } from "./addorder.svg";
import "./ClientOptions.css"

const svgClass = "client-option";

function ClientOptions() {
  return (
    <div className="flx flx-center client-options">
      <SvgOrders className={svgClass}/>
      <SvgReceipts className={svgClass}/>
      <SvgProfit className={svgClass}/>
      <SvgAddOrder className={svgClass}/>
    </div>
  )
}

export { ClientOptions };