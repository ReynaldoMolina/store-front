import React from "react";
import { MenuContext } from "../Context/MenuContext";
import { DataContext } from "../Context/DataContext";
import { useGetData } from "../Hooks/useGetData";
import { ActionTools } from "../ActionTools";
import { CategoryForm } from "../Categories/CategoryForm";
import { useFilterData } from "../Hooks/useFilterData";
import "../styles/Registers.css";
import "./Categories.css";

function Categories() {
  console.log('Render Categories');
  const { menuOption } = React.useContext(MenuContext);
  const {
    openModal, setOpenModal, setRegisterId, setIsNew
  } = React.useContext(DataContext);
  const data = useGetData(menuOption.url);
  const filteredData = useFilterData(data, menuOption.name);

  return (
    <>
      <h1 className="register-title">Categories</h1>
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
                  <span className="name">{register.name}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {openModal && (
        <CategoryForm/>
      )}
    </>
  )
}

export { Categories };