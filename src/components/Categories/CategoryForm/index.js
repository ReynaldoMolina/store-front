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
  const { setOpenModal, registerId, isNew, setIsUpdating } = React.useContext(DataContext);
  const { data, isLoading } = useGetData(menuOption.url + registerId);

  const [category, setCategory] = React.useState({name: ''})

  React.useEffect(() => {
    if (!isNew) {
      if (data) {
        setCategory(data);
      }
    }
  }, [data]);

  function handleRegister() {
    if (category.name === "") {
      alert("Name is required");
      return;
    }
    sendData(category, menuOption.url, registerId);
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
            <FormInput name="name" holder="Nombre" value={category} setValue={setCategory}/>
          </div>

          <FormButtons />
        </form>
      )}
    </>
  )
}

export { CategoryForm };