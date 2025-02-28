import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { useGetData } from "../../Hooks/useGetData";
import { Loading } from "../../Loading";
import { FormInput } from "../../FormInput";
import { ProviderOptions } from "./ProviderOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "../../styles/RegisterForm.css";

function ProviderForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew, setIsUpdating } = React.useContext(DataContext);
  const { data, isLoading } = useGetData(menuOption.url + registerId);

  const [provider, setProvider] = React.useState({
    company: '',
    contact: '',
    phone: '',
    city: '',
    municipio: '',
    country: '',
    address: ''
  });

  React.useEffect(() => {
    if (!isNew) {
      if (data) {
        setProvider(data);
      }
    }
  }, [data]);

  function handleRegister() {
    if (provider.company === "" || provider.contact === "") {
      alert("Company and Contact required");
      return;
    }
    sendData(provider, menuOption.url, registerId);
    setOpenModal(false);
    setIsUpdating(true);
  }

  return (
    <>
      {isLoading ? <Loading/> :
      (
        <form
          action={handleRegister}
          className="flx flx-col frm-container">
          {isNew || (
            <div className="flx obj-info">
              <span className="flx flx-center form-id">{data.id}</span>
            </div>
          )}
          <div className="flx obj-info">
            <FormInput name="company" holder="Compañía" value={provider} setValue={setProvider}/>
          </div>
          <div className="flx obj-info">
            <FormInput name="contact" holder="Contacto" value={provider} setValue={setProvider}/>
          </div>
          <div className="flx obj-info">
            <FormInput name="phone" holder="Teléfono" value={provider} setValue={setProvider}/>
            <FormInput name="municipio" holder="Municipio" value={provider} setValue={setProvider}/>
          </div>
          <div className="flx obj-info">
            <FormInput name="city" holder="Ciudad" value={provider} setValue={setProvider}/>
            <FormInput name="country" holder="País" value={provider} setValue={setProvider}/>
          </div>
          <div className="flx obj-info">
            <FormInput name="address" holder="Dirección" value={provider} setValue={setProvider}/>
          </div>
          
          {isNew || <ProviderOptions />}
          <FormButtons/>
        </form>
      )}
    </>
  )
}

export { ProviderForm };