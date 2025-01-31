import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { OrderContext } from "../../Context/OrderContext";
import { FormInput } from "../../FormInput";
import { FormSpan } from "../../FormInput/FormSpan";
import { FormCheck } from "../../FormInput/FormCheck";
import { OrdersDetails } from "../../OrdersDetails";
import { OrderOptions } from "./OrderOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import "./OrderForm.css";

function OrderForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);
  const { orderData, orderDate, setOrderDate, paid, setPaid } = React.useContext(OrderContext);

  function handleRegister(formData) {
    const fetchRegister = {
      clientId: orderData.clientId,
      orderDate,
      paid,
      total: Number(formData.get('order-total')),
      abono: Number(formData.get('order-abono')),
    }
    console.log(fetchRegister);
    
    sendData(fetchRegister, menuOption.url, registerId);
    setOpenModal(false);
  }

  return (
    <>
      <form
        action={handleRegister}
        className="flx flx-col order-container"
      >
        <div className="flx flx-col order-info-container">
          <div className="flx order-info">
            <FormSpan name="order-id" holder="Order id" value={orderData.id}/>
            <FormCheck name="paid" holder="Paid" value={paid} setValue={setPaid} />
            <FormInput name="orderDate" holder="Order date" type="date" value={orderDate} setValue={setOrderDate}/>
          </div>
          <div className="flx order-info">
            <FormSpan name="client-id" holder="Client" value={orderData.clientId}/>
          </div>
          <div className="flx order-info">
            <FormSpan name="order-total" holder="Total" value={orderData.total}/>
            <FormSpan name="order-abono" holder="Abono" value={orderData.abono}/>
            <FormSpan name="order-saldo" holder="Saldo" value={orderData.total - orderData.abono}/>
          </div>
        </div>
        
        <OrdersDetails />

        {isNew || <OrderOptions />}

        <FormButtons />
      </form>
    </>
  )
}

export { OrderForm };