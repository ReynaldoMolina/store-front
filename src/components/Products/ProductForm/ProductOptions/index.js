import React from "react";
import { ReactComponent as SvgProfit } from "./profit.svg";
import "../../../styles/FormOptions.css";

const svgClass = "register-option";

function ProductOptions() {
  return (
    <div className="flx flx-center register-options">
      <SvgProfit className={svgClass}/>
    </div>
  )
}

export { ProductOptions };