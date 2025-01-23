import React from "react";
import { DataContext } from "../Context/DataContext";
import { ProviderForm } from "../Providers/ProviderForm";
import "./Providers.css";

function Providers() {
  console.log('Render Providers');
  
  const {
    openModal, setOpenModal,
    filteredData, setRegister,
    setIsEditing
  } = React.useContext(DataContext);
  
  return (
    <>
      {openModal || (
        <div className="flx flx-col register-list">
          {filteredData.map(register => (
            <div
              key={register.id}
              className="flx register-card"
              onClick={() => {
                setRegister(register);
                setOpenModal(true);
                setIsEditing(true);
              }}
            >
              <span className="flx flx-center id">{register.id}</span>
              <div className="flx info">
                <span className="name">{register.company}</span>
                <span className="phone">{register.phone}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {openModal && (
        <ProviderForm/>
      )}
    </>
  )
}

export { Providers };