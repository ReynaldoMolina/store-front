import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { DataProvider, DataContext } from "../Context/DataContext";
import { ClientProvider } from "../Context/ClientContext";
import { ActionTools } from "../ActionTools";
import { RegistersList } from "../RegistersList";
import { LoadingTable } from "../LoadingTable";

// import { Orders } from "../Orders";
import { Clients } from "../Clients";
import { Providers } from "../Providers";
import { ProviderProvider } from "../Context/ProviderContext";

const components = {
  // "Categories": () => <DataContent />,
  "Clients": () => <Clients />,
  // "Expenses": () => <DataContent />,
  // "Orders": () => <Orders />,
  // "Products": () => <DataContent />,
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
      <DataProvider>
        <ClientProvider>
          <ProviderProvider>
            <h2>{menuOption.name}</h2>
            <ActionTools/>
            {isLoading && <LoadingTable/>}

            {isLoading || (
              <RegistersList>
                {components[menuOption.name]()}
              </RegistersList>
            )}
          </ProviderProvider>
        </ClientProvider>
      </DataProvider>
    </>
  )
}

export { DataContent };