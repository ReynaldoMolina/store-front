import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { useGetData } from "../../Hooks/useGetData";
import { Loading } from "../../Loading";
import { FormInput } from "../../FormInput";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "../../styles/RegisterForm.css";

function CategoryForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);
  const { data, isLoading } = useGetData(menuOption.url + registerId);

  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
      setName(data.name || '');
    }
  }, [data]);

  function handleRegister() {
    if (name === "") {
      alert("Name is required");
      return;
    }
    const fetchRegister = {
      name
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

          <FormButtons />
        </form>
      )}
    </>
  )
}

export { CategoryForm };