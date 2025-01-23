import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { ProviderContext } from "../../Context/ProviderContext";
import { ProviderOptions } from "./ProviderOptions";
import { FormInput } from "../../FormInput";
import "./ProviderForm.css";

function ProviderForm() {
  const { menuOption } = React.useContext(MenuContext);
  
  const {
    setOpenModal,
    setIsUpdating,
    isEditing, setIsEditing
  } = React.useContext(DataContext);

  const { provider } = React.useContext(ProviderContext);

  const [id] = React.useState(provider.id || '');
  const [company, setCompany] = React.useState(provider.company || '');
  const [contact, setContact] = React.useState(provider.contact || '');
  const [phone, setPhone] = React.useState(provider.phone || '');
  const [city, setCity] = React.useState(provider.city || '');
  const [municipio, setMunicipio] = React.useState(provider.municipio || '');
  const [country, setCountry] = React.useState(provider.country || '');
  const [address, setAddress] = React.useState(provider.address || '');

  function handleProvider(formData) {
    let url = menuOption.url;
    let method = 'POST';

    const provider = {
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
      body: JSON.stringify(provider),
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
      action={handleProvider}
      className="flx flx-col flx-center frm-container">
      {isEditing && (
        <div className="flx obj-info">
          <span className="flx flx-center id">{id}</span>
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

export { ProviderForm };