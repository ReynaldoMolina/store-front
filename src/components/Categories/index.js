import React from "react";
import { DataContext } from "../Context/DataContext";
import { CategoryForm } from "../Categories/CategoryForm";
import "./Categories.css";

function Categories() {
  console.log('Render Categories');
  
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
              </div>
            </div>
          ))}
        </div>
      )}
      {openModal && (
        <CategoryForm/>
      )}
    </>
  )
}

export { Categories };