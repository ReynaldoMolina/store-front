import React from "react";
import { baseUrl } from "../../urls/menuOptionsList";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { OrderContext } from "../../Context/OrderContext";
import { Loading } from "../../Loading";
import { ClientSearch } from "../../ClientSearch";
import { FormInput } from "../../FormInput";
import { FormSpan } from "../../FormInput/FormSpan";
import { OrdersDetails } from "../../OrdersDetails";
import { OrderOptions } from "./OrderOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { sendData } from "../../Hooks/sendData";
import { sendDetails } from "../../Hooks/sendDetails";
import addIcon from "./add.svg";
import "./OrderForm.css";

function OrderForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, isNew, setIsUpdating } = React.useContext(DataContext);
  const {
    isLoading,
    order, setOrder,
    orderTotals,
    productList, originalProductList,
  } = React.useContext(OrderContext);

  const [isSearchClientOpen, setIsSearchClientOpen] = React.useState(false);

  function handleRegister() {
    if (order.clientId === "") {
      alert("Please select a client");
      return;
    }
    if (productList.length === 0) {
      alert("Please add products");
      return;
    }
    const fetchRegister = {
      clientId: order.clientId,
      orderDate: order.orderDate,
      state: order.state
    }
    
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

    sendOrder();    
    setOpenModal(false);
    setIsUpdating(true);
  }

  return (
    <>
      {isLoading ? <Loading/> :
      (

        <form
          action={handleRegister}
          className="flx flx-col order-container"
        >
          <div className="flx flx-col order-info-container">
            <div className="flx order-info">
              <FormSpan name="order-id" holder="Order" value={order.id}/>

              <div className="flx flx-col">
                <label
                  htmlFor="state"
                  className="frm-select-label"
                >
                  Estado
                </label>
                <select
                  id="state"
                  name="state"
                  className="frm-select"
                  value={order.state}
                  onChange={(event) => setOrder(event.target.value)}
                >
                  <option key="1" value="Pendiente">Pendiente</option>
                  <option key="2" value="Cancelado">Cancelado</option>
                  <option key="3" value="Entregado">Entregado</option>
                </select>
              </div>
              <FormInput name="orderDate" holder="Date" type="date" value={order} setValue={setOrder}/>
            </div>

            <div className="flx order-info">
              <FormSpan name="client-id" holder="Client" value={order.fullname}/>
              <button
                type="button"
                className="flx flx-center client-btn client-add"
                onClick={() => setIsSearchClientOpen(state => !state)}
              >
                <img src={addIcon} alt="Add"></img>
              </button>
            </div>

            <ClientSearch register={order} setRegister={setOrder} isSearchClientOpen={isSearchClientOpen} setIsSearchClientOpen={setIsSearchClientOpen}/>

            <div className="flx order-info">
              <FormSpan name="order-total" holder="Total" value={orderTotals.totalSell ? orderTotals.totalSell : 0} type="number"/>
              <FormSpan name="order-abono" holder="Abono" value={order.abonos ? order.abonos : 0} type="number"/>
              <FormSpan name="order-saldo" holder="Saldo" value={(orderTotals.totalSell ? orderTotals.totalSell : 0) - (order.abonos ? order.abonos : 0)} type="number"/>
              <FormSpan name="order-profit" holder="Profit" value={orderTotals.profit ? orderTotals.profit : 0} type="number"/>
            </div>
          </div>

          <OrdersDetails />

          <div className="flx order-totals">
            <span className="flx flx-col flx-center order-totals-item">
              <label className="order-totals-label">Items</label>
              {orderTotals.items}
            </span>
            <span className="flx flx-col flx-center order-totals-item">
              <label className="order-totals-label">Quantity</label>
              {orderTotals.quantity}
            </span>
            <span className="flx flx-col flx-center order-totals-item">
              <label className="order-totals-label">Total sell</label>
              $ {orderTotals.totalSell.toFixed(2)}
            </span>
            <span className="flx flx-col flx-center order-totals-item">
              <label className="order-totals-label">Total cost</label>
              $ {orderTotals.totalCost.toFixed(2)}
            </span>
          </div>

          {isNew ||
          <OrderOptions
            order={order}
            orderTotals={orderTotals}
          />}

          <FormButtons />
        </form>
      )}
    </>
  )
}

export { OrderForm };