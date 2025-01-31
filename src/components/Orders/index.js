import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { DataContext } from "../Context/DataContext";
import { OrderProvider } from "../Context/OrderContext";
import { useGetData } from "../Hooks/useGetData";
import { ActionTools } from "../ActionTools";
import { OrderForm } from "../Orders/OrderForm";
import { useFilterData } from "../Hooks/useFilterData";
import "../styles/Registers.css";
import "./Orders.css";

function Orders() {
  console.log('Render Orders');
  const { menuOption } = React.useContext(MenuContext);
  const {
    openModal, setOpenModal, setRegisterId, setIsNew
  } = React.useContext(DataContext);
  const data = useGetData(menuOption.url);
  const filteredData = useFilterData(data, menuOption.name);
  
  return (
    <>
      <h1 className="register-title">Orders</h1>
      {openModal || (
        <>
          <ActionTools/>
          <div className="flx flx-col register-list">
            {filteredData.map(register => (
              <div
                key={register.id}
                className="flx register-card"
                onClick={() => {
                  setRegisterId(register.id);
                  setIsNew(false);
                  setOpenModal(true);
                }}
              >
                <span className="flx flx-center id">{register.id}</span>
                <div className="flx info">
                  <span className="name">{register.clientId}</span>
                    <div className="flx">
                      <span className="total">{register.total}</span>
                      <span className="abono">{register.abono}</span>
                      <span className="saldo">{register.total - register.abono}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {openModal && (
        <OrderProvider>
          <OrderForm/>
        </OrderProvider>
      )}
    </>
  )
}

export { Orders };