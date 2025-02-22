import React from "react";
import "./InputLoading.css";

function InputLoading({ holder }) {
  return (
    <div className="flx flx-col">
      <label
        className="frm-input-label"
      >
        {holder}
      </label>
      <input
        className="frm-input-loading"
      >
      </input>
    </div>
  )
}

export { InputLoading };