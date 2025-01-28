import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { useGetData } from "../../Hooks/useGetData";
import { FormInput } from "../../FormInput";
import { FormSpan } from "../../FormInput/FormSpan";
import { OrdersDetails } from "../../OrdersDetails";
import { OrderOptions } from "./OrderOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "./OrderForm.css";

function OrderForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);
  const data = useGetData(menuOption.url + registerId);
  console.log(data);

  const [orderDate, setOrderDate] = React.useState('');

  React.useEffect(() => {
    if (data) {
      setOrderDate(data.orderDate || '');
    }
  }, [data]);

  function handleRegister(formData) {
    const fetchRegister = {
      clientId: data.clientId,
      orderDate,
      abono: formData.get('abono'),
      saldo: formData.get('saldo'),
    }
    console.log(fetchRegister);
    
    sendData(fetchRegister, registerId, menuOption.url, data.id);
    setOpenModal(false);
  }

  return (
    <form
      action={handleRegister}
      className="flx flx-col order-container"
    >
      <div className="flx order-info">
        <FormSpan name="order-id" holder="Order id" value={data.id}/>
        <FormInput name="orderDate" holder="Order date" type="date" value={orderDate} setValue={setOrderDate}/>
      </div>
      <div className="flx order-info">
        <FormSpan name="client-id" holder="Client" value={data.clientId}/>
      </div>
      <div className="flx order-info">
        <FormSpan name="order-total" holder="Total" value={data.total}/>
        <FormSpan name="order-abono" holder="Abono" value={data.abono}/>
        <FormSpan name="order-saldo" holder="Saldo" value={data.saldo}/>
      </div>
      
      <OrdersDetails/>

      {isNew || <OrderOptions />}

      <FormButtons />
    </form>
  )
}

export { OrderForm };