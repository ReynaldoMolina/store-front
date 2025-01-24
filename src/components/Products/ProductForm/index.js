import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { FormInput } from "../../FormInput";
import { ProductOptions } from "./ProductOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import "../../styles/RegisterForm.css";
import { FormSelect } from "../../FormSelect";

function ProductForm() {
  const { menuOption } = React.useContext(MenuContext);
  
  const {
    setOpenModal,
    setIsUpdating,
    isEditing, setIsEditing,
    register, data
  } = React.useContext(DataContext);

  const [id] = React.useState(register.id || '');
  const [name, setName] = React.useState(register.name || '');
  const [sheinId, setSheinId] = React.useState(register.sheinId || '');
  const [provider, setProvider] = React.useState(register.provider || '');
  const [category, setCategory] = React.useState(register.category || '');
  const [addedDate, setAddedDate] = React.useState(register.addedDate || '');
  const [costPrice, setCostPrice] = React.useState(register.costPrice || '');
  const [sellPrice, setSellPrice] = React.useState(register.sellPrice || '');
  const [description, setDescription] = React.useState(register.description || '');

  function handleRegister(formData) {
    let url = menuOption.url;
    let method = 'POST';

    const register = {
      name: formData.get('name'),
      sheinId: formData.get('sheinId'),
      provider: formData.get('provider'),
      category: formData.get('category'),
      addedDate: formData.get('addedDate'),
      costPrice: formData.get('costPrice'),
      sellPrice: formData.get('sellPrice'),
      description: formData.get('description')
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
      <div className="flx obj-info">
        <FormSelect name="provider" holder="Provider" value={provider} setValue={setProvider} data={data}/>
        <FormInput name="addedDate" holder="Added date" type="date" value={addedDate} setValue={setAddedDate}/>
      </div>
      <div className="flx obj-info">
        <FormSelect name="category" holder="Category" value={category} setValue={setCategory} data={{data}}/>
        <FormInput name="sheinId" holder="Shein Id" value={sheinId} setValue={setSheinId}/>
      </div>
      <div className="flx obj-info">
        <FormInput name="costPrice" holder="Cost price" type="number" value={costPrice} setValue={setCostPrice}/>
        <FormInput name="sellPrice" holder="Sell Price" type="number" value={sellPrice} setValue={setSellPrice}/>
        <div className="flx flx-col">
          <label htmlFor={name} className="frm-label">Profit</label>
          <input
            type="number"
            name="profit"
            className="frm-input"
            placeholder="0.00"
            value={sellPrice - costPrice}
            readOnly></input>
        </div>
      </div>
      <div className="flx obj-info">
        <FormInput name="description" holder="Description" value={description} setValue={setDescription}/>
      </div>
      
      {isEditing && <ProductOptions />}

      <FormButtons />
    </form>
  )
}

export { ProductForm };