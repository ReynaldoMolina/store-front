import React from "react";
import { DataContext } from "../Context/DataContext";
import { ProductForm } from "../Products/ProductForm";
import "../styles/Registers.css";
import "./Products.css";

function Products() {
  console.log('Render Products');
  
  const {
    openModal, setOpenModal,
    filteredData, setRegister,
    setIsEditing
  } = React.useContext(DataContext);
  
  return (
    <>
      {openModal || (
        <div className="flx flx-col register-list">
          {filteredData.map(register => (
            <div
              key={register.id}
              className="flx register-card"
              onClick={() => {
                setRegister(register);
                setOpenModal(true);
                setIsEditing(true);
              }}
            >
              <span className="flx flx-center id">{register.id}</span>
              <div className="flx info">
                <span className="name">{register.name}</span>
                  <div className="flx">
                    <span className="cost-price">{register.costPrice}</span>
                    <span className="sell-price">{register.sellPrice}</span>
                    <span className="profit">{(register.sellPrice - register.costPrice).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {openModal && (
        <ProductForm/>
      )}
    </>
  )
}

export { Products };