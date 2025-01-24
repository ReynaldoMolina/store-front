import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { FormInput } from "../../FormInput";
import { CategoryOptions } from "./CategoryOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import "../../styles/RegisterForm.css";

function CategoryForm() {
  const { menuOption } = React.useContext(MenuContext);
  
  const {
    setOpenModal,
    setIsUpdating,
    isEditing, setIsEditing,
    register
  } = React.useContext(DataContext);

  const [id] = React.useState(register.id || '');
  const [name, setName] = React.useState(register.name || '');

  function handleRegister(formData) {
    let url = menuOption.url;
    let method = 'POST';

    const register = {
      name: formData.get('name')
    }
    
    if (isEditing) {
      url += id;
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
        <FormInput name="name" holder="Name" value={name} setValue={setName}/>
      </div>
      
      {isEditing && <CategoryOptions />}

      <FormButtons />
    </form>
  )
}

export { CategoryForm };