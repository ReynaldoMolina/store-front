import React from "react";
import { ReactComponent as SvgPurchases } from "./purchases.svg";
import { ReactComponent as SvgExpenses } from "./expenses.svg";
import { ReactComponent as SvgAddPurchase } from "./addpurchase.svg";
import "../../../styles/FormOptions.css";

const svgClass = "register-option";

function ProviderOptions() {
  return (
    <div className="flx flx-center register-options">
      <SvgPurchases className={svgClass}/>
      <SvgExpenses className={svgClass}/>
      <SvgAddPurchase className={svgClass}/>
    </div>
  )
}

export { ProviderOptions };