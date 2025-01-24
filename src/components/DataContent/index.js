import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { DataContext } from "../Context/DataContext";
import { ActionTools } from "../ActionTools";
import { RegistersList } from "../RegistersList";
import { LoadingTable } from "../LoadingTable";

// import { Orders } from "../Orders";
import { Categories } from "../Categories";
import { Clients } from "../Clients";
import { Providers } from "../Providers";
import { Products } from "../Products";

const components = {
  "Categories": () => <Categories />,
  "Clients": () => <Clients />,
  // "Expenses": () => <DataContent />,
  // "Orders": () => <Orders />,
  "Products": () => <Products />,
  "Providers": () => <Providers />,
  // "Purchases": () => <DataContent />,
  // "Receipts": () => <DataContent />,
};

function DataContent() {
  console.log('Render DataContent')
  const { menuOption } = React.useContext(MenuContext);
  const { isLoading } = React.useContext(DataContext);

  return (
    <>
      <h1>{menuOption.name}</h1>
      <ActionTools/>
      {isLoading && <LoadingTable/>}

      {isLoading || (
        <RegistersList>
          {components[menuOption.name]()}
        </RegistersList>
      )}
    </>
  )
}

export { DataContent };