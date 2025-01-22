import React from "react";
import { DataContext } from "../Context/DataContext";
import { ClientContext } from "../Context/ClientContext";
import { ClientForm } from "../Clients/ClientForm";
import "./Clients.css";

function Clients() {
  console.log('Render Clients');
  
  const {
    filteredClients, setClient
  } = React.useContext(ClientContext);

  const {
    openModal, setOpenModal,
    setIsEditing
  } = React.useContext(DataContext);
  
  return (
    <>
      {openModal || (
        <div className="flx flx-col register-list">
          {filteredClients.map(client => (
            <div
              key={client.id}
              className="flx register-card"
              onClick={() => {
                setClient(client);
                setOpenModal(true);
                setIsEditing(true);
              }}
            >
              <span className="flx flx-center id">{client.id}</span>
              <div className="flx info">
                <span className="name">{`${client.name} ${client.lastname}`}</span>
                <span className="phone">{client.phone}</span>
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