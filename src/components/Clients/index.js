import React from "react";
import { ClientContext } from "../Context/ClientContext";
import { ClientForm } from "../Clients/ClientForm";
import "./Clients.css";

function Clients() {
  const {
    filteredClients, setClient,
    openModal, setOpenModal, setEditable,
    setId, setName, setLastname, setPhone, setMunicipio, setCity, setCountry, setAddress
  } = React.useContext(ClientContext);
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
                setId(client.id)
                setName(client.name)
                setLastname(client.lastname)
                setPhone(client.phone)
                setMunicipio(client.municipio)
                setCity(client.departamento)
                setCountry(client.country)
                setAddress(client.address)
                setEditable(false);
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