import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { useGetData } from "../../Hooks/useGetData";
import { FormInput } from "../../FormInput";
import { ProviderOptions } from "./ProviderOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "../../styles/RegisterForm.css";

function ProviderForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);
  const data = useGetData(menuOption.url + registerId);

  const [id, setId] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [city, setCity] = React.useState('');
  const [municipio, setMunicipio] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [address, setAddress] = React.useState('');

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
      setCompany(data.company || '');
      setContact(data.contact || '');
      setPhone(data.phone || '');
      setCity(data.city || '');
      setMunicipio(data.municipio || '');
      setCountry(data.country || '');
      setAddress(data.address || '');
    }
  }, [data]);

  function handleRegister(formData) {
    const fetchRegister = {
      company: formData.get('company'),
      contact: formData.get('contact'),
      phone: formData.get('phone'),
      city: formData.get('city'),
      municipio: formData.get('municipio'),
      country: formData.get('country'),
      address: formData.get('address')
    }
    
    sendData(fetchRegister, registerId, menuOption.url, id);
    setOpenModal(false);
  }

  return (
    <form
      action={handleRegister}
      className="flx flx-col flx-center frm-container">
      {isNew || (
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
      
      {isNew || <ProviderOptions />}
      <FormButtons/>
    </form>
  )
}

export { ProviderForm };