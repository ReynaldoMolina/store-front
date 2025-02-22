import React from "react";
import "./FormSpan.css";

function FormSpan({ name, holder, value, type = 'text' }) {
  return (
    <div className="flx flx-col span-container">
      <label
        htmlFor={name}
        className="frm-span-label"
      >
        {holder}
      </label>
      <span
        name={name}
        id={name}
        className={`flx frm-span ${name}`}
      >
        {type === 'text' ? value : value.toFixed(2)}
      </span>
    </div>
  )
}

export { FormSpan };