import React from "react";
import { DataContext } from "../Context/DataContext";
import { ProviderContext } from "../Context/ProviderContext";
import { ProviderForm } from "../Providers/ProviderForm";
import "./Providers.css";

function Providers() {
  console.log('Render Providers');
  
  const {
    filteredProviders, setProvider
  } = React.useContext(ProviderContext);

  const {
    openModal, setOpenModal,
    setIsEditing
  } = React.useContext(DataContext);
  
  return (
    <>
      {openModal || (
        <div className="flx flx-col register-list">
          {filteredProviders.map(provider => (
            <div
              key={provider.id}
              className="flx register-card"
              onClick={() => {
                setProvider(provider);
                setOpenModal(true);
                setIsEditing(true);
              }}
            >
              <span className="flx flx-center id">{provider.id}</span>
              <div className="flx info">
                <span className="name">{provider.company}</span>
                <span className="phone">{provider.phone}</span>
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