import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { Home } from "../Home";
import { DataContent } from "../DataContent";
import "./MainContent.css";

const components = {
  "Categories": () => <DataContent />,
  "Clients": () => <DataContent />,
  "Expenses": () => <Home />,
  "Finances": () => <DataContent />,
  "Home": () => <Home />,
  "Log out": () => <Home />,
  "Orders": () => <DataContent />,
  "Products": () => <DataContent />,
  "Providers": () => <DataContent />,
  "Purchases": () => <Home />,
  "Receipts": () => <DataContent />,
  "Settings": () => <Home />,
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