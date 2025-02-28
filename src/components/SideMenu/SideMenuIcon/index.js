import React from "react";
import "./SideMenuIcon.css";
import { ReactComponent as SvgCategories } from "./categories.svg";
import { ReactComponent as SvgClients } from "./clients.svg";
import { ReactComponent as SvgExpenses } from "./expenses.svg";
import { ReactComponent as SvgFinances } from "./finances.svg";
import { ReactComponent as SvgHome } from "./home.svg";
import { ReactComponent as SvgLogout } from "./logout.svg";
import { ReactComponent as SvgOrders } from "./orders.svg";
import { ReactComponent as SvgProducts } from "./products.svg";
import { ReactComponent as SvgProviders } from "./providers.svg";
import { ReactComponent as SvgPurchases } from "./purchases.svg";
import { ReactComponent as SvgReceipts } from "./receipts.svg";
import { ReactComponent as SvgSettings } from "./settings.svg";

const className = "side-menu-opt-icon";

const icons = {
  "Categorías": () => <SvgCategories className={className}/>,
  "Clientes": () => <SvgClients className={className}/>,
  "Gastos": () => <SvgExpenses className={className}/>,
  "Finanzas": () => <SvgFinances className={className}/>,
  "Home": () => <SvgHome className={className}/>,
  "Cerrar sesión": () => <SvgLogout className={className}/>,
  "Pedidos": () => <SvgOrders className={className}/>,
  "Productos": () => <SvgProducts className={className}/>,
  "Proveedores": () => <SvgProviders className={className}/>,
  "Compras": () => <SvgPurchases className={className}/>,
  "Ventas": () => <SvgReceipts className={className}/>,
  "Configuración": () => <SvgSettings className={className}/>,
};

function SideMenuIcon({ name }) {
  return (
    <>
      {icons[name]()}
    </>
  )
}

export { SideMenuIcon };