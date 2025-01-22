import React from "react";
import { ClientContext } from "../../../Context/ClientContext";

function ClientInput({ name, holder, value, setValue }) {
  const { editable  } = React.useContext(ClientContext);
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
        onChange={(event) => {
          if (editable) {
            setValue(event.target.value);
          }
        }}
      >
      </input>
    </div>
  )
}

export { ClientInput };