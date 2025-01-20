import React from "react";
import "./MainWindow.css";

function MainWindow(props) {
  console.log('Render MainWindow')
  return (
    <main className="flx flx-col main-window">
      {props.children}
    </main>
  )
}

export { MainWindow };