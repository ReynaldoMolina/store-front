import React from "react";
import { ReactComponent as SvgOrders } from "./orders.svg";
import { ReactComponent as SvgReceipts } from "./receipts.svg";
import { MenuContext } from "../../../Context/MenuContext";
import { DataContext } from "../../../Context/DataContext";
import { FormOption } from "../../../FormOption";
import "../../../styles/FormOptions.css";

const svgClass = "register-option";

function ClientOptions({ fullname }) {
  const { menuOptions, setMenuOption } = React.useContext(MenuContext);
  const { setSearchValue, setOpenModal } = React.useContext(DataContext);
  const clientOrders = menuOptions[2];
  const clientReceipts = menuOptions[3];
  const clientProfits = menuOptions[9];

  function goToOrders() {
    setSearchValue(fullname);
    setOpenModal(false);
    setMenuOption(clientOrders);
  }

  function goToReceipts() {
    setSearchValue(fullname);
    setOpenModal(false);
    setMenuOption(clientReceipts);
  }

  function goToProfits() {
    setSearchValue(fullname);
    setOpenModal(false);
    setMenuOption(clientProfits);
  }

  return (
    <div className="flx flx-center register-options">
      <FormOption label="Pedidos">
        <SvgOrders
          className={svgClass}
          onClick={goToOrders}
        />
      </FormOption>
      <FormOption label="Ventas">
        <SvgReceipts
          className={svgClass}
          onClick={goToReceipts}
        />
      </FormOption>
    </div>
  )
}

export { ClientOptions };