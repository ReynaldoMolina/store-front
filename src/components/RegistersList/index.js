import React from "react";
import "./RegistersList.css";

function RegistersList(props) {
  console.log('Render RegistersList')

  return (
    <div className="main-content">
      {props.children}
    </div>
  )
}

export { RegistersList };