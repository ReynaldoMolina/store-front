import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { Home } from "../Home";
import { DataContent } from "../DataContent";
import { DataProvider } from "../Context/DataContext";

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
  const { menuOption } = React.useContext(MenuContext);

  return (
    <>
      <DataProvider>
        {components[menuOption.name]()}
      </DataProvider>
    </>
  )
}

export { MainContent };