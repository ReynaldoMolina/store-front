import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { useGetData } from "../../Hooks/useGetData";
import { FormInput } from "../../FormInput";
import { FormSelect } from "../../FormSelect";
import { ProductOptions } from "./ProductOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "../../styles/RegisterForm.css";

function ProductForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);
  const data = useGetData(menuOption.url + registerId);

  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [sheinId, setSheinId] = React.useState('');
  const [provider, setProvider] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [addedDate, setAddedDate] = React.useState('');
  const [costPrice, setCostPrice] = React.useState('');
  const [sellPrice, setSellPrice] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
      setName(data.name || '');
      setSheinId(data.sheinId || '');
      setProvider(data.provider || '');
      setCategory(data.category || '');
      setAddedDate(data.addedDate || '');
      setCostPrice(data.costPrice || '');
      setSellPrice(data.sellPrice || '');
      setDescription(data.description || '');
    }
  }, [data]);

  function handleRegister(formData) {
    const fetchRegister = {
      name: formData.get('name'),
      sheinId: formData.get('sheinId'),
      provider: formData.get('provider'),
      category: formData.get('category'),
      addedDate: formData.get('addedDate'),
      costPrice: formData.get('costPrice'),
      sellPrice: formData.get('sellPrice'),
      description: formData.get('description')
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
      <div className="flx obj-info">
        <FormSelect name="provider" holder="Provider" value={provider} setValue={setProvider} index={4} field={"company"}/>
        <FormInput name="addedDate" holder="Added date" type="date" value={addedDate} setValue={setAddedDate}/>
      </div>
      <div className="flx obj-info">
        <FormSelect name="category" holder="Category" value={category} setValue={setCategory} index={8} field={"name"}/>
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
      
      {isNew || <ProductOptions />}

      <FormButtons />
    </form>
  )
}

export { ProductForm };