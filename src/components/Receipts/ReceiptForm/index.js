import React from "react";
import { MenuContext } from "../../Context/MenuContext";
import { DataContext } from "../../Context/DataContext";
// import { OrderContext } from "../../Context/OrderContext";
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
  const { setOpenModal, registerId, isNew, setIsUpdating } = React.useContext(DataContext);

  const currenDate = new Date().toISOString().split("T")[0];
  const url = `${menuOption.url}${registerId}`;
  const { data, isLoading } = useGetData(url);
  
  const [isSearchClientOpen, setIsSearchClientOpen] = React.useState(false);
  const [receipt, setReceipt] = React.useState({
    orderId: '',
    clientId: '',
    receiptDate: currenDate,
    abono: 0,
    concepto: ''
  });

  React.useEffect(() => {
    if (!isNew) {
      if (data) {
        const { id, ...newData } = data
        setReceipt(newData);
      }
    }
  }, [data]);
  
  function handleRegister() {
    const { fullname, ...newData } = receipt;
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
            <FormInput name="receiptDate" holder="Receipt date" type="date" value={receipt} setValue={setReceipt}/>
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
          </div>
          <div className="flx obj-info">
            <FormInput name="concepto" holder="Concepto" value={receipt} setValue={setReceipt}/>
          </div>

          {isNew || <ReceiptOptions />}

          <FormButtons />
        </form>
      )}
    </>
  )
}

export { ReceiptForm };