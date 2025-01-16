import React from "react";
import "./MainWindow.css";

function MainWindow(props) {
  return (
    <div className="flx flx-col main-window">
      {props.children}
    </div>
  )
}

export { MainWindow };