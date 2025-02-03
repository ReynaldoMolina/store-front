import React from "react";
import { ReactComponent as SvgProfit } from "./profit.svg";
import { ReactComponent as SvgReceipts } from "./receipts.svg";
import { ReactComponent as SvgHundred } from "./one-hundred.svg";
import { ReactComponent as SvgFifty } from "./fifty.svg";
import { ReactComponent as SvgOther } from "./other.svg";
import { FormOption } from "../../../FormOption";
import "../../../styles/FormOptions.css";

const svgClass = "register-option";

function OrderOptions() {
  const [paymentMenu, setPaymentMenu] = React.useState(false);

  return (
    <div className="flx flx-center register-options">
      <div className="flx">
        <FormOption label="Pay">
          <SvgReceipts
          className={svgClass}
          onClick={() => setPaymentMenu(state => !state)}/>
        </FormOption>
        <div className={`flx flx-center register-options-payment ${paymentMenu || "hidden"}`}>
          <SvgOther className={`payment-opt ${svgClass}`}/>
          <SvgFifty className={`payment-opt ${svgClass}`}/>
          <SvgHundred className={`payment-opt ${svgClass}`}/>
        </div>
      </div>

      <FormOption label="Profit">
        <SvgProfit className={svgClass}/>
      </FormOption>
    </div>
  )
}

export { OrderOptions };