import React from "react";

function FormOption({ label, children }) {
  return (
    <div className="flx flx-col flx-center">
      {children}
      <label className="option-button-label">
        {label}
      </label>
    </div>
  )
}

export { FormOption };