import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { Home } from "../Home";
import { DataContent } from "../DataContent";
import "./MainContent.css";

const components = {
  "Categorías": () => <DataContent />,
  "Clientes": () => <DataContent />,
  "Gastos": () => <Home />,
  "Finanzas": () => <DataContent />,
  "Home": () => <Home />,
  "Cerrar sesión": () => <Home />,
  "Pedidos": () => <DataContent />,
  "Productos": () => <DataContent />,
  "Proveedores": () => <DataContent />,
  "Compras": () => <Home />,
  "Ventas": () => <DataContent />,
  "Configuración": () => <Home />,
};

function MainContent() {
  console.log('Render MainContent')
  const { menuOption } = React.useContext(MenuContext);

  return (
    <>
      <div className="flx flx-col main-content">
        {components[menuOption.name]()}
      </div>
    </>
  )
}

export { MainContent };