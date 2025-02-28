import React from "react";
import "./ErrorTable.css";

function ErrorTable() {
  return (
    <div className="flx flx-col flx-center error">
      <p>Ha ocurrido un error</p>
      <button className="retry-button">Reintentar</button>
    </div>
  )
}

export { ErrorTable };