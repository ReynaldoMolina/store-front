import React from "react";
import { DataContext } from "../Context/DataContext";
import "./FormButtons.css";

function FormButtons() {
  const {
    setOpenModal,
    isEditing, setIsEditing
  } = React.useContext(DataContext);

  return (
    <div className="flx flx-center register-frm-btn">
      <button
        className="flx flx-center frm-btn-cancel"
        onClick={() => {
          setOpenModal(false);
          setIsEditing(false);
        }}
      >Cancel</button>
      <button
        type="submit"
        value="Save"
        className="frm-btn-submit"
      >
        {isEditing ? "Save" : "Create"}
      </button>
    </div>
  )
}

export { FormButtons };