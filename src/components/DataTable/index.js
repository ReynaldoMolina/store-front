import React from "react";
import { ActionTools } from "../ActionTools";
import { RegistersList } from "./RegistersList";
import { RegisterCard } from "./RegisterCard";
import { StoreContext } from "../StoreContext";

function DataTable() {
  const { menuOption } = React.useContext(StoreContext);

  return (
    <>
      <h2>{menuOption}</h2>
      <ActionTools/>
      <RegistersList>
        <RegisterCard />
      </RegistersList>
    </>
  )
}

export { DataTable };