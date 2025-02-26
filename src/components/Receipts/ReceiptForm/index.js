import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
import { Loading } from "../../Loading";
import { ClientSearch } from "../../ClientSearch";
import { FormInput } from "../../FormInput";
import { FormSpan } from "../../FormInput/FormSpan";
import { ReceiptOptions } from "./ReceiptOptions";
import { FormButtons } from "../../FormInput/FormButtons";
import { useGetData } from "../../Hooks/useGetData";
import { sendData } from "../../Hooks/sendData";
import addIcon from "./add.svg";
import "../../styles/RegisterForm.css";

function ReceiptForm() {
  const { menuOption } = React.useContext(MenuContext);
  const { setOpenModal, registerId, orderReceipt, isNew, setIsUpdating } = React.useContext(DataContext);
  
  const url = `${menuOption.url}${registerId}`;
  const { data, isLoading } = useGetData(url);
  const currenDate = new Date().toISOString().split("T")[0];
  
  const [isSearchClientOpen, setIsSearchClientOpen] = React.useState(false);
  const [receipt, setReceipt] = React.useState({
    clientId: orderReceipt.clientId || '',
    orderId: orderReceipt.id || '',
    saleDate: currenDate,
    abono: orderReceipt.abono || 0,
    saldo: orderReceipt.saldoInicial || 0,
    concepto: orderReceipt.concepto || "",
    fullname: orderReceipt.fullname || '',
  });
  
  React.useEffect(() => {
    if (!isNew) {
      if (data) {
        const { id, ...newData } = data
        setReceipt(newData);
      }
    }
  }, [data, isNew]);
  
  console.log(receipt);

  function handleRegister() {
    if (receipt.saldo < 0) {
      alert('El saldo no puede ser menor a cero');
      return;
    }
    const { fullname, ...newData } = receipt;
    console.log(newData, menuOption.url, registerId);
    sendData(newData, menuOption.url, registerId);
    setOpenModal(false);
    setIsUpdating(true);
  }

  return (
    <>
      {isLoading ? <Loading/> :
      (
        <form
          action={handleRegister}
          className="flx flx-col frm-container"
        >
          {isNew || (
            <div className="flx obj-info">
              <span className="flx flx-center form-id">{data.id}</span>
            </div>
          )}
          <div className="flx obj-info">
            <FormInput name="orderId" holder="Order" type="number" value={receipt} setValue={setReceipt}/>
            <FormInput name="saleDate" holder="Receipt date" type="date" value={receipt} setValue={setReceipt}/>
          </div>
          <div className="flx obj-info">
            <FormSpan name="client-id" holder="Client" value={receipt.fullname}/>
            <button
              type="button"
              className="flx flx-center client-btn client-add"
              onClick={() => setIsSearchClientOpen(state => !state)}
            >
              <img src={addIcon} alt="Add"></img>
            </button>
          </div>

          <ClientSearch register={receipt} setRegister={setReceipt} isSearchClientOpen={isSearchClientOpen} setIsSearchClientOpen={setIsSearchClientOpen}/>

          <div className="flx obj-info">
            <FormInput name="abono" holder="Abono" type="number" value={receipt} setValue={setReceipt}/>
            <FormSpan name="saldo" holder="Saldo" value={receipt.saldo ? (receipt.saldo - receipt.abono) : 0} type="number"/>
          </div>
          <div className="flx obj-info">
            <FormInput name="concepto" holder="Concepto" value={receipt} setValue={setReceipt}/>
          </div>

          {isNew || <ReceiptOptions/>}

          <FormButtons />
        </form>
      )}
    </>
  )
}

export { ReceiptForm };