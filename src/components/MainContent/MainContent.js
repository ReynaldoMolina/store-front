import React from "react";
import { StoreContext } from "../StoreContext";
import { Home } from "../Home";
import { DataTable } from "../DataTable";

const components = {
  "Categories": () => <DataTable />,
  "Clients": () => <DataTable />,
  "Expenses": () => <DataTable />,
  "Finances": () => <DataTable />,
  "Home": () => <Home />,
  "Log out": () => <DataTable />,
  "Orders": () => <DataTable />,
  "Products": () => <DataTable />,
  "Providers": () => <DataTable />,
  "Purchases": () => <DataTable />,
  "Receipts": () => <DataTable />,
  "Settings": () => <DataTable />,
};

function MainContent() {
  const { menuOption } = React.useContext(StoreContext);

  return (
    <>
      {components[menuOption]()}
    </>
  )
}

export { MainContent };