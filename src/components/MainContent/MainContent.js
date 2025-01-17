import React from "react";
import { StoreContext } from "../StoreContext";
import { Home } from "../Home";
import { Clients } from "../Clients";

const components = {
  "Categories": () => console.log('hi'),
  "Clients": () => <Clients/>,
  "Expenses": () => console.log('hi'),
  "Finances": () => console.log('hi'),
  "Home": () => <Home />,
  "Log out": () => console.log('hi'),
  "Orders": () => console.log('hi'),
  "Products": () => console.log('hi'),
  "Providers": () => console.log('hi'),
  "Purchases": () => console.log('hi'),
  "Receipts": () => console.log('hi'),
  "Settings": () => console.log('hi'),
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