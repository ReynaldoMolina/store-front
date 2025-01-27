import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { useGetData } from "../../Hooks/useGetData";
import { FormInput } from "../../FormInput";
import { FormCheck } from "../../FormInput/FormCheck";
import { OrderOptions } from "./OrderOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "../../styles/RegisterForm.css";

function OrderForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);
  const data = useGetData(menuOption.url + registerId);
  console.log(data);

  const [id, setId] = React.useState('');
  const [clientId, setClientId] = React.useState('');
  const [orderDate, setOrderDate] = React.useState('');
  const [delivered, setDelivered] = React.useState('');
  const [total, setTotal] = React.useState('');
  const [abono, setAbono] = React.useState('');
  const [saldo, setSaldo] = React.useState('');

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
      setClientId(data.clientId || '');
      setOrderDate(data.orderDate || '');
      setDelivered(data.delivered || false);
      setTotal(data.total || '');
      setAbono(data.abono || '');
      setSaldo(data.saldo || '');
    }
  }, [data]);

  function handleRegister(formData) {
    const fetchRegister = {
      clientId,
      orderDate,
      delivered,
      total: formData.get('total'),
      abono: formData.get('abono'),
      saldo: formData.get('saldo'),
    }
    console.log(fetchRegister);
    
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
        <FormInput name="clientId" holder="Client" type="number" value={clientId} setValue={setClientId}/>
      </div>
      <div className="flx obj-info">
        <FormInput name="orderDate" holder="Order date" type="date" value={orderDate} setValue={setOrderDate}/>
        <FormCheck name="delivered" holder="Delivered" value={delivered} setValue={setDelivered}/>
      </div>
      <div className="flx obj-info">
        <FormInput name="abono" holder="Abono" type="number" value={abono} setValue={setAbono}/>
        <FormInput name="total" holder="Total" type="number" value={total} setValue={setTotal}/>
        <FormInput name="saldo" holder="Saldo" type="number" value={saldo} setValue={setSaldo}/>
      </div>
      
      {isNew || <OrderOptions />}

      <FormButtons />
    </form>
  )
}

export { OrderForm };