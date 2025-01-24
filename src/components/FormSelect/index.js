import React from "react";
// import "./FormSelect.css";

function FormSelect({ name, holder, value, setValue, data}) {
  return (
    <div className="flx flx-col">
      <label
        htmlFor={name}
        className="frm-label"
      >
        {holder}
      </label>
      <select
        id={name}
        name={name}
        className="frm-input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        {data.map((option) => {
          return (
            <option key={option.id} value={option.id}>{option.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export { FormSelect };