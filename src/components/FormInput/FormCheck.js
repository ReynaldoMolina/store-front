import React from "react";
import "./FormCheck.css";

function FormCheck({ name, holder, value, setValue }) {
  return (
    <div className="flx flx-col">
      <label
        htmlFor={name}
        className="frm-label"
      >
        {holder}
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        className="frm-input-check"
        checked={value}
        onChange={(event) => {
          setValue(event.target.checked);
          console.log('check',event.target.checked);
          console.log('value',value);
        }}
      >
      </input>
    </div>
  )
}

export { FormCheck };