import React from "react";
import { ReactComponent as SvgLoading } from "./loading.svg";
import "./Loading.css";

function Loading() {
  return (
    <div className="flx flx-center loading-container">
      <SvgLoading className="svg-loading"/>
    </div>
  )
}

export { Loading };