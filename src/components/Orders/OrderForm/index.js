import React from "react";
import { baseUrl } from "../../urls/menuOptionsList";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { OrderContext } from "../../Context/OrderContext";
import { Loading } from "../../Loading";
import { ClientSearch } from "../../ClientSearch";
import { FormInput } from "../../FormInput";
import { FormSpan } from "../../FormInput/FormSpan";
import { FormCheck } from "../../FormInput/FormCheck";
import { OrdersDetails } from "../../OrdersDetails";
import { OrderOptions } from "./OrderOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import { sendDetails } from "../../Hooks/sendDetails";
import addIcon from "./add.svg";
import "./OrderForm.css";

function OrderForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew } = React.useContext(DataContext);
  const {
    orderData,
    orderDate, setOrderDate,
    paid, setPaid,
    productList, originalProductList,
    clientId, setClientId,
    setIsSearchClientOpen, isSearchClientOpen,
    isLoading
  } = React.useContext(OrderContext);
  const { orderTotal, orderQuantity, orderItems } = React.useContext(OrderContext);

  function handleRegister() {
    if (clientId === "") {
      alert("Please select a client");
      return;
    }
    if (productList.length === 0) {
      alert("Please add products");
      return;
    }
    const fetchRegister = {
      clientId,
      orderDate,
      paid,
      total: orderTotal,
      abono: orderData.abono,
    }
    console.log(fetchRegister);
    
    const url = `${baseUrl}ordersdetails/`;
    
    const sendOrder = async () => {
      try {
        const newOrder = await sendData(fetchRegister, menuOption.url, registerId);
        
        if (!isNew) {
          sendDetails(originalProductList, productList, url);
        } else {
          const updatedDetails = productList.map((detail) => ({
            ...detail,
            orderId: newOrder.id
          }));
          sendDetails(originalProductList, updatedDetails, url);
        }
      } catch (error) {
        console.error("Error sending order:", error);
      }
    }

    console.log('originalProductList', originalProductList);
    console.log('productList', productList);
    console.log('url', url);
    sendOrder();
    
    setOpenModal(false);
  }

  return (
    <>
      {isLoading && <Loading/>}
      {isLoading || (
        <form
          action={handleRegister}
          className="flx flx-col order-container"
        >
          <div className="flx flx-col order-info-container">
            <div className="flx order-info">
              <FormSpan name="order-id" holder="Order" value={orderData.id}/>
              <FormCheck name="paid" holder="Paid" value={paid} setValue={setPaid} />
              <FormInput name="orderDate" holder="Order date" type="date" value={orderDate} setValue={setOrderDate}/>
            </div>
            <div className="flx order-info">
              <FormSpan name="client-id" holder="Client" value={clientId}/>
              <button
                type="button"
                className="flx flx-center client-btn client-add"
                onClick={() => setIsSearchClientOpen(state => !state)}
              >
                <img src={addIcon} alt="Add"></img>
              </button>
            </div>
            <ClientSearch setClientId={setClientId} isSearchClientOpen={isSearchClientOpen} setIsSearchClientOpen={setIsSearchClientOpen}/>
            <div className="flx order-info">
              <FormSpan name="order-total" holder="Total" value={orderTotal}/>
              <FormSpan name="order-abono" holder="Abono" value={orderData.abono ? orderData.abono : 0}/>
              <FormSpan name="order-saldo" holder="Saldo" value={orderTotal - (orderData.abono ? orderData.abono : 0)}/>
            </div>
          </div>

          <OrdersDetails />
          <div className="flx order-totals">
            <span className="flx flx-col flx-center order-totals-item">
              <label className="order-totals-label">Items</label>
              {orderItems}
            </span>
            <span className="flx flx-col flx-center order-totals-item">
              <label className="order-totals-label">Quantity</label>
              {orderQuantity}
            </span>
            <span className="flx flx-col flx-center order-totals-item">
              <label className="order-totals-label">Total</label>
              $ {orderTotal}</span>
          </div>

          {isNew || <OrderOptions />}

          <FormButtons />
        </form>
      )}
    </>
  )
}

export { OrderForm };