import React from "react";
import { ClientContext } from "../../Context/ClientContext";
import { ClientOptions } from "./ClientOptions";
import { ClientInput } from "./ClientInput";
import { MenuContext } from "../../Context/MenuContext";
import "./ClientForm.css";

function ClientForm() {
  const {
    setOpenModal, editable,
    id,
    name, setName,
    lastname, setLastname,
    phone, setPhone,
    municipio, setMunicipio,
    city, setCity,
    country, setCountry,
    address, setAddress
  } = React.useContext(ClientContext);

  const { menuOption } = React.useContext(MenuContext);

  function updateClient(formData) {
    const name = formData.get('name');
    const lastname = formData.get('lastname');
    const phone = formData.get('phone');
    const municipio = formData.get('municipio');
    const city = formData.get('city');
    const country = formData.get('country');
    const address = formData.get('address');

    const updatedClient = {
      "name": name,
      "lastname": lastname,
      "phone": phone,
      "municipio": municipio,
      "city": city,
      "country": country,
      "address": address
    }
    let patchUrl = menuOption.url + '/' + id;

    fetch(patchUrl, {
      method: "PATCH",
      body: updatedClient,
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => console.log(response))
  }

  return (
    <form
      action={updateClient}
      className="flx flx-col flx-center frm-container">
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
      
      <label htmlFor="address" className="frm-label">Address</label>
      <input type="text" name="address" id="address" className="frm-input" placeholder="Address"
        value={address}
        onChange={(event) => {
          if (editable) {
            setAddress(event.target.value);
          }
        }}
        ></input>
      
      <ClientOptions />

      <div className="flx flx-center client-frm-btn">
        <button
          className="flx flx-center frm-btn-cancel"
          onClick={() => {
            setOpenModal(false);
          }}
        >Cancel</button>
        <button type="submit" value="Save" className="frm-btn-submit">Save</button>
      </div>
    </form>
  )
}

export { ClientForm };