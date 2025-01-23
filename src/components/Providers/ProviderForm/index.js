import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { FormInput } from "../../FormInput";
import { ProviderOptions } from "./ProviderOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import "../../styles/RegisterForm.css";

function ProviderForm() {
  const { menuOption } = React.useContext(MenuContext);
  
  const {
    setOpenModal,
    setIsUpdating,
    isEditing, setIsEditing,
    register
  } = React.useContext(DataContext);

  const [id] = React.useState(register.id || '');
  const [company, setCompany] = React.useState(register.company || '');
  const [contact, setContact] = React.useState(register.contact || '');
  const [phone, setPhone] = React.useState(register.phone || '');
  const [city, setCity] = React.useState(register.city || '');
  const [municipio, setMunicipio] = React.useState(register.municipio || '');
  const [country, setCountry] = React.useState(register.country || '');
  const [address, setAddress] = React.useState(register.address || '');

  function handleRegister(formData) {
    let url = menuOption.url;
    let method = 'POST';

    const register = {
      company: formData.get('company'),
      contact: formData.get('contact'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      municipio: formData.get('municipio'),
      country: formData.get('country'),
      address: formData.get('address')
    }
    
    if (isEditing) {
      url += '/' + id;
      method = "PATCH";
    }

    fetch(url, {
      method: method,
      body: JSON.stringify(register),
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
      action={handleRegister}
      className="flx flx-col flx-center frm-container">
      {isEditing && (
        <div className="flx obj-info">
          <span className="flx flx-center form-id">{id}</span>
        </div>
      )}
      <div className="flx obj-info">
        <FormInput name="company" holder="Company" value={company} setValue={setCompany}/>
      </div>
      <div className="flx obj-info">
        <FormInput name="contact" holder="Contact" value={contact} setValue={setContact}/>
      </div>
      <div className="flx obj-info">
        <FormInput name="phone" holder="Phone" value={phone} setValue={setPhone}/>
        <FormInput name="municipio" holder="Municipio" value={municipio} setValue={setMunicipio}/>
      </div>
      <div className="flx obj-info">
        <FormInput name="city" holder="City" value={city} setValue={setCity}/>
        <FormInput name="country" holder="Country" value={country} setValue={setCountry}/>
      </div>
      <div className="flx obj-info">
        <FormInput name="address" holder="Address" value={address} setValue={setAddress}/>
      </div>
      
      {isEditing && <ProviderOptions />}
      <FormButtons/>
    </form>
  )
}

export { ProviderForm };