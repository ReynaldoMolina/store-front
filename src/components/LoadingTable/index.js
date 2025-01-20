import React from "react";
import "./LoadingTable.css"

function LoadingTable() {
  return (
    <div className="flx flx-col loading-container">
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
    </div>
  )
}

export { LoadingTable };