import React from "react";
import { ReactComponent as SvgPurchases } from "./purchases.svg";
import { ReactComponent as SvgExpenses } from "./expenses.svg";
import { FormOption } from "../../../FormOption";
import "../../../styles/FormOptions.css";

const svgClass = "register-option";

function ProviderOptions() {
  return (
    <div className="flx flx-center register-options">
      <FormOption label="Purchases">
        <SvgPurchases className={svgClass}/>
      </FormOption>
      <FormOption label="Expenses">
        <SvgExpenses className={svgClass}/>
      </FormOption>
    </div>
  )
}

export { ProviderOptions };