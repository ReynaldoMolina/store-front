import React from "react";
import { StoreContext } from "../StoreContext";
import "./ClientForm.css"

function ClientForm() {
  const { client, setOpenModal } = React.useContext(StoreContext);
  const [clientId, setClientId] = React.useState(client.id || '');
  const [clientName, setClientName] = React.useState(client.name || '');
  const [clientLastname, setClientLastname] = React.useState(client.lastname || '');
  const [clientPhone, setClientPhone] = React.useState(client.phone || '');
  const [clientMunicipio, setClientMunicipio] = React.useState(client.municipio || '');
  const [clientDepartamento, setClientDepartamento] = React.useState(client.departamento || '');
  const [clientCountry, setClientCountry] = React.useState(client.country || '');
  const [clientAddress, setClientAddress] = React.useState(client.address || '');

  return (
    <form className="flx flx-col flx-center frm-container">
      <label htmlFor="id-cliente" className="frm-label">Id</label>
      <input type="text" name="id-cliente" id="id-cliente" className="frm-input" placeholder="Id" value={clientId}></input>

      <label htmlFor="nombre" className="frm-label">Nombre</label>
      <input type="text" name="nombre" id="nombre" className="frm-input" placeholder="Nombre" value={clientName} required></input>

      <label htmlFor="apellido" className="frm-label">Apellido</label>
      <input type="text" name="apellido" id="apellido" className="frm-input" placeholder="Apellido" value={clientLastname} required></input>

      <div className="flx obj-info">
        <div className="flx flx-col">
            <label htmlFor="telefono" className="frm-label">Teléfono</label>
            <input type="text" name="telefono" id="telefono" className="frm-input" placeholder="Teléfono" value={clientPhone}></input>
            <label htmlFor="municipio" className="frm-label">Municipio</label>
            <input type="text" name="municipio" id="municipio" className="frm-input" placeholder="Municipio" value={clientMunicipio}></input>
        </div>
        <div className="flx"></div>
        <div className="flx flx-col">
          <label htmlFor="departamento" className="frm-label">Departamento</label>
          <input type="text" name="departamento" id="departamento" className="frm-input" placeholder="Departamento" value={clientDepartamento}></input>
          <label htmlFor="pais" className="frm-label">País</label>
          <input type="text" name="pais" id="pais" className="frm-input" placeholder="País" value={clientCountry}></input>
        </div>
      </div>
      
      <label htmlFor="direccion" className="frm-label">Dirección</label>
      <input type="text" name="direccion" id="direccion" className="frm-input" placeholder="Dirección" value={clientAddress}></input>
      
      <div className="flx flx-center client-frm-btn">
        <button className="flx flx-center frm-btn-cancel" onClick={() => setOpenModal(false)}>Cancel</button>
        <div className="flx"></div>
        <button type="submit" value="Guardar" className="frm-btn-submit">Save</button>
      </div>
    </form>
  )
}

export { ClientForm };