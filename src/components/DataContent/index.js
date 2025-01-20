import React from "react";
import { StoreContext } from "../StoreContext";
import { ActionTools } from "../ActionTools";
import { RegistersList } from "../RegistersList";
import { LoadingTable } from "../LoadingTable";

import { Orders } from "../Orders";
import { Clients } from "../Clients";

const components = {
  // "Categories": () => <DataContent />,
  "Clients": () => <Clients />,
  // "Expenses": () => <DataContent />,
  "Orders": () => <Orders />,
  // "Products": () => <DataContent />,
  // "Providers": () => <DataContent />,
  // "Purchases": () => <DataContent />,
  // "Receipts": () => <DataContent />,
};

function DataContent() {
  console.log('Render DataContent')
  const { menuOption, loading } = React.useContext(StoreContext);

  return (
    <>
      <h2>{menuOption.name}</h2>
      <ActionTools/>
      {loading && <LoadingTable/>}

      <RegistersList>
        {components[menuOption.name]()}
      </RegistersList>
    </>
  )
}

export { DataContent };