import React from "react";
import { ClientContext } from "../Context/ClientContext";
import { MenuContext } from "../Context/MenuContext";
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
  const { loading } = React.useContext(ClientContext);
  const { menuOption } = React.useContext(MenuContext);

  return (
    <>
      <h2>{menuOption.name}</h2>
      <ActionTools/>
      {loading && <LoadingTable/>}

      {loading || (
        <RegistersList>
          {components[menuOption.name]()}
        </RegistersList>
      )}
    </>
  )
}

export { DataContent };