import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { useGetData } from "../Hooks/useGetData";
// import "./FormSelect.css";

function FormSelect({ name, holder, value, setValue, index, field}) {
  const { menuOptions } = React.useContext(MenuContext);
  const data = useGetData(menuOptions[index].url);

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
            <option
              key={option.id}
              value={option[field]}
            >{option[field]}</option>
          )
        })}
      </select>
    </div>
  )
}

export { FormSelect };