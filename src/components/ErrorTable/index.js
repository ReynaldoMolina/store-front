import React from "react";
import "./ErrorTable.css";

function ErrorTable() {
  return (
    <div className="flx flx-col flx-center error">
      <p>Hubo un error</p>
      <button className="retry-button">Reintentar</button>
    </div>
  )
}

export { ErrorTable };