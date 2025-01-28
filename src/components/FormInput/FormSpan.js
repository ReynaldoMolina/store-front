import React from "react";
import "./FormSpan.css";

function FormSpan({ name, holder, value }) {
  return (
    <div className="flx span-container">
      <label
        htmlFor={name}
        className="frm-label"
      >
        {holder}
      </label>
      <span
        name={name}
        id={name}
        className="flx frm-span"
      >
        {value}
      </span>
    </div>
  )
}

export { FormSpan };