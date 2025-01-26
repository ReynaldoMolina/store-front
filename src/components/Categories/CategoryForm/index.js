import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { useGetData } from "../../Hooks/useGetData";
import { FormInput } from "../../FormInput";
import { CategoryOptions } from "./CategoryOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "../../styles/RegisterForm.css";

function CategoryForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);
  const data = useGetData(menuOption.url + registerId);

  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
      setName(data.name || '');
    }
  }, [data]);

  function handleRegister(formData) {
    const fetchRegister = {
      name: formData.get('name'),
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
        <FormInput name="name" holder="Name" value={name} setValue={setName}/>
      </div>
      
      {isNew || <CategoryOptions />}

      <FormButtons />
    </form>
  )
}

export { CategoryForm };