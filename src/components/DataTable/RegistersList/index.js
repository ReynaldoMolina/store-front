import React from "react";
import "./RegistersList.css";

function RegistersList(props) {
  return (
    <table className="table">
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}

export { RegistersList };