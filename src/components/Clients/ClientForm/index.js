import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { ClientContext } from "../../Context/ClientContext";
import { ClientOptions } from "./ClientOptions";
import { ClientInput } from "./ClientInput";
import "./ClientForm.css";

function ClientForm() {
  const { menuOption } = React.useContext(MenuContext);
  
  const {
    setOpenModal,
    setIsUpdating,
    isEditing, setIsEditing
  } = React.useContext(DataContext);

  const { client } = React.useContext(ClientContext);

  const [id] = React.useState(client.id || '');
  const [name, setName] = React.useState(client.name || '');
  const [lastname, setLastname] = React.useState(client.lastname || '');
  const [phone, setPhone] = React.useState(client.phone || '');
  const [municipio, setMunicipio] = React.useState(client.municipio || '');
  const [city, setCity] = React.useState(client.departamento || '');
  const [country, setCountry] = React.useState(client.country || '');
  const [address, setAddress] = React.useState(client.address || '');

  function handleClient(formData) {
    let url = menuOption.url;
    let method = 'POST';

    const client = {
      name: formData.get('name'),
      lastname: formData.get('lastname'),
      phone: formData.get('phone'),
      municipio: formData.get('municipio'),
      departamento: formData.get('city'),
      country: formData.get('country'),
      address: formData.get('address')
    }
    
    if (isEditing) {
      url += '/' + id;
      method = "PATCH";
    }

    fetch(url, {
      method: method,
      body: JSON.stringify(client),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((response) => console.log(response))

    setIsUpdating(true);
    setOpenModal(false);
    setIsEditing(false);
  }

  return (
    <form
      action={handleClient}
      className="flx flx-col flx-center frm-container">
      {isEditing && (
        <div className="flx obj-info">
          <span className="flx flx-center id">{id}</span>
        </div>
      )}
      <div className="flx obj-info">
        <ClientInput name="name" holder="Name" value={name} setValue={setName}/>
        <ClientInput name="lastname" holder="Last name" value={lastname} setValue={setLastname}/>
      </div>
      <div className="flx obj-info">
        <ClientInput name="phone" holder="Phone" value={phone} setValue={setPhone}/>
        <ClientInput name="municipio" holder="Municipio" value={municipio} setValue={setMunicipio}/>
      </div>
      <div className="flx obj-info">
        <ClientInput name="city" holder="City" value={city} setValue={setCity}/>
        <ClientInput name="country" holder="Country" value={country} setValue={setCountry}/>
      </div>
      <div className="flx obj-info">
        <ClientInput name="address" holder="Address" value={address} setValue={setAddress}/>
      </div>
      
      {isEditing && <ClientOptions />}

      <div className="flx flx-center client-frm-btn">
        <button
          className="flx flx-center frm-btn-cancel"
          onClick={() => {
            setOpenModal(false);
            setIsEditing(false);
          }}
        >Cancel</button>
        <button type="submit" value="Save" className="frm-btn-submit">{isEditing ? "Save" : "Create"}</button>
      </div>
    </form>
  )
}

export { ClientForm };