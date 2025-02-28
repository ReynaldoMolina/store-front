import React from "react";
import { MenuContext } from "../Context/MenuContext";

import { Categories } from "../Categories";
import { Clients } from "../Clients";
import { Orders } from "../Orders";
import { Receipts } from "../Receipts";
import { Providers } from "../Providers";
import { Products } from "../Products";
import { ReceiptPdf } from "../ReceiptPdf";

const components = {
  "Categorías": () => <Categories />,
  "Clientes": () => <Clients />,
  // "Expenses": () => <DataContent />,
  "Pedidos": () => <Orders />,
  "Productos": () => <Products />,
  "Proveedores": () => <Providers />,
  // "Purchases": () => <DataContent />,
  "Ventas": () => <Receipts />,
  "Finanzas": () => <ReceiptPdf/>
};

function DataContent() {
  console.log('Render DataContent')
  const { menuOption } = React.useContext(MenuContext);

  return (
    <>
      {components[menuOption.name]()}
    </>
  )
}

export { DataContent };