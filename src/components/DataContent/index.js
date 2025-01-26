import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { DataProvider } from "../Context/DataContext";

import { Categories } from "../Categories";
import { Clients } from "../Clients";
import { Orders } from "../Orders";
import { Providers } from "../Providers";
import { Products } from "../Products";

const components = {
  "Categories": () => <Categories />,
  "Clients": () => <Clients />,
  // "Expenses": () => <DataContent />,
  "Orders": () => <Orders />,
  "Products": () => <Products />,
  "Providers": () => <Providers />,
  // "Purchases": () => <DataContent />,
  // "Receipts": () => <DataContent />,
};

function DataContent() {
  console.log('Render DataContent')
  const { menuOption } = React.useContext(MenuContext);

  return (
    <>
      <DataProvider>
        {components[menuOption.name]()}
      </DataProvider>
    </>
  )
}

export { DataContent };