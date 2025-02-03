import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { useGetData } from "../../Hooks/useGetData";
import { FormInput } from "../../FormInput";
import { FormSpan } from "../../FormInput/FormSpan";
import { FormSelect } from "../../FormInput/FormSelect";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "../../styles/RegisterForm.css";
import { Loading } from "../../Loading";

function ProductForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);
  const { data, isLoading } = useGetData(menuOption.url + registerId);

  const currenDate = new Date();
  const isoDate = currenDate.toISOString();
  const formattedDate = isoDate.split("T")[0];

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
      setAddedDate(data.addedDate || formattedDate);
      setCostPrice(data.costPrice || 0);
      setSellPrice(data.sellPrice || 0);
      setDescription(data.description || '');
    }
  }, [data]);

  function handleRegister() {
    if (name === "") {
      alert("Name required");
      return;
    } else if (provider === "" || category === "") {
      alert("Provider and Category required");
      return;
    }
    
    const fetchRegister = {
      name,
      sheinId,
      provider,
      category,
      addedDate,
      costPrice: Number(costPrice),
      sellPrice: Number(sellPrice),
      description,
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
            <FormSpan name="form-profit" holder="Profit" value={sellPrice - costPrice}/>
          </div>
          <div className="flx obj-info">
            <FormInput name="description" holder="Description" value={description} setValue={setDescription}/>
          </div>

          <FormButtons />
        </form>
      )}
    </>
  )
}

export { ProductForm };