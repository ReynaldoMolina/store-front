import React from "react";
import { DataContext } from "../Context/DataContext";
import { ClientForm } from "../Clients/ClientForm";
import "../styles/Registers.css";
import "./Clients.css";

function Clients() {
  console.log('Render Clients');
  
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
                <span className="name">{`${register.name} ${register.lastname}`}</span>
                <span className="phone">{register.phone}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {openModal && (
        <ClientForm/>
      )}
    </>
  )
}

export { Clients };