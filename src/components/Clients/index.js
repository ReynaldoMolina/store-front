import React from "react";
import "./Clients.css";
import { StoreContext } from "../StoreContext";
import { ClientForm } from "../ClientForm";

function Clients() {
  const { filteredClients, setClient, openModal, setOpenModal } = React.useContext(StoreContext);
  console.log('Render Clients');
  
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