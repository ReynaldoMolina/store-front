import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { useGetData } from "../../Hooks/useGetData";
import { Loading } from "../../Loading";
import { FormInput } from "../../FormInput";
import { ClientOptions } from "./ClientOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "../../styles/RegisterForm.css";

function ClientForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);
  const { data, isLoading } = useGetData(menuOption.url + registerId);

  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [phone, setPhone] = React.useState('+505 ');
  const [municipio, setMunicipio] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [address, setAddress] = React.useState('');

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
      setName(data.name || '');
      setLastname(data.lastname || '');
      setPhone(data.phone || '');
      setMunicipio(data.municipio || '');
      setCity(data.departamento || '');
      setCountry(data.country || '');
      setAddress(data.address || '');
    }
  }, [data]);

  function handleRegister() {
    if (name === "" || lastname === "") {
      alert("Name and lastname are needed.")
      return;
    }
    const fetchRegister = {
      name,
      lastname,
      phone,
      municipio,
      departamento: city,
      country,
      address
    }
    sendData(fetchRegister, menuOption.url, registerId);
    setOpenModal(false);
  }

  return (
    <>
      {isLoading && <Loading/>}
      {isLoading || (
        <form
          action={handleRegister}
          className="flx flx-col frm-container">
          {isNew || (
            <div className="flx obj-info">
              <span className="flx flx-center form-id">{id}</span>
            </div>
          )}
          <div className="flx obj-info">
            <FormInput name="name" holder="Name" value={name} setValue={setName}/>
          </div>
          <div className="flx obj-info">
            <FormInput name="lastname" holder="Last name" value={lastname} setValue={setLastname}/>
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
          
          {isNew || <ClientOptions name={name} lastname={lastname} />}

          <FormButtons/>
        </form>
      )}
    </>
  )
}

export { ClientForm };