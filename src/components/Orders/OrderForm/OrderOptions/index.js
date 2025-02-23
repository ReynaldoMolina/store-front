import React from "react";
import { MenuContext } from "../../../Context/MenuContext";
import { DataContext } from "../../../Context/DataContext";
import { ReactComponent as SvgReceipts } from "./receipts.svg";
import { ReactComponent as SvgHundred } from "./one-hundred.svg";
import { ReactComponent as SvgFifty } from "./fifty.svg";
import { ReactComponent as SvgOther } from "./other.svg";
import { FormOption } from "../../../FormOption";
import "../../../styles/FormOptions.css";

const svgClass = "register-option";

function OrderOptions({ order, saldo }) {
  const { menuOptions, setMenuOption } = React.useContext(MenuContext);
  const { setSearchValue, setOpenModal, setIsNew, setOrderReceipt } = React.useContext(DataContext);

  const [paymentMenu, setPaymentMenu] = React.useState(false);
  const clientReceipts = menuOptions[3];

  function goToReceipts() {
    setSearchValue(`${order.id} ${order.fullname}`);
    setOpenModal(false);
    setMenuOption(clientReceipts);
  }

  function payReceipt(payment) {
    let abono = 0;
    let concepto = `Abono pedido #${order.id}`;
    switch (payment) {
      case 'half':
        abono = saldo / 2;
        concepto = `Abono 50% pedido #${order.id}`;
        break;
      case 'full':
        abono = saldo;
        concepto = `Cancelación pedido #${order.id}`;
        break;
      default:
        break;
    }
    const receiptOrder = {
      id: order.id,
      clientId: order.clientId,
      fullname: order.fullname,
      abono,
      concepto
    }
    console.log('receiptOrder', receiptOrder);
    
    setOrderReceipt(receiptOrder);
    setMenuOption(clientReceipts);
    setIsNew(true);
  }

  return (
    <div className="flx flx-center register-options">
      <div className="flx">
        <FormOption label="Pay">
          <SvgReceipts
          className={svgClass}
          onClick={() => {
            if (saldo > 0) {
              setPaymentMenu(state => !state)
            } else {
              alert("Pedido pagado")
            }
          }}/>
        </FormOption>

        <div className={`flx flx-center register-options-payment ${paymentMenu || "hidden"}`}>
          <SvgOther
            className={`payment-opt ${svgClass}`}
            onClick={() => payReceipt("zero")}
          />

          <SvgFifty
            className={`payment-opt ${svgClass}`}
            onClick={() => payReceipt("half")}
          />
          <SvgHundred
            className={`payment-opt ${svgClass}`}
            onClick={() => payReceipt("full")}
          />
        </div>
      </div>

      <FormOption label="Receipts">
        <SvgReceipts
          className={svgClass}
          onClick={() => goToReceipts()}
        />
      </FormOption>
    </div>
  )
}

export { OrderOptions };