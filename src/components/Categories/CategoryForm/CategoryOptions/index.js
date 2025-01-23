import React from "react";
import { ReactComponent as SvgProducts } from "./products.svg";
import "../../../styles/FormOptions.css";

const svgClass = "register-option";

function CategoryOptions() {
  return (
    <div className="flx flx-center register-options">
      <SvgProducts className={svgClass}/>
    </div>
  )
}

export { CategoryOptions };