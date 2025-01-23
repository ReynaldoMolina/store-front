import React from "react";
import "./FormInput.css";

function FormInput({ name, holder, value, setValue }) {
  return (
    <div className="flx flx-col">
      <label
        htmlFor={name}
        className="frm-label"
      >
        {holder}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="frm-input"
        placeholder={holder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
      </input>
    </div>
  )
}

export { FormInput };