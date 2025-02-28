import React from "react";
import { DataContext } from "../Context/DataContext";
import "./FormButtons.css";

function FormButtons() {
  const { setOpenModal, isNew } = React.useContext(DataContext);

  return (
    <div className="flx register-frm-btn">
      <button
        className="flx flx-center frm-btn-cancel"
        onClick={() => {
          setOpenModal(false);
        }}
      >Cancelar</button>
      <button
        type="submit"
        value="Save"
        className="frm-btn-submit"
      >
        {isNew ? "Crear" : "Guardar"}
      </button>
    </div>
  )
}

export { FormButtons };