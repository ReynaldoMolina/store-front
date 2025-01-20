import React from "react";
import { StoreContext } from "../StoreContext";
import { Home } from "../Home";
import { DataContent } from "../DataContent";

const components = {
  "Categories": () => <DataContent />,
  "Clients": () => <DataContent />,
  "Expenses": () => <DataContent />,
  "Finances": () => <DataContent />,
  "Home": () => <Home />,
  "Log out": () => <DataContent />,
  "Orders": () => <DataContent />,
  "Products": () => <DataContent />,
  "Providers": () => <DataContent />,
  "Purchases": () => <DataContent />,
  "Receipts": () => <DataContent />,
  "Settings": () => <DataContent />,
};

function MainContent() {
  console.log('Render MainContent')
  const { menuOption } = React.useContext(StoreContext);

  return (
    <>
      {components[menuOption.name]()}
    </>
  )
}

export { MainContent };