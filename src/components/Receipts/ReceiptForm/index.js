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
  const { setOpenModal, registerId, isNew} = React.useContext(DataContext);

  const url = `${menuOption.url}${registerId}`;
  const { data, isLoading } = useGetData(url);
  console.log('Receipt', data);

  const [clientId, setClientId] = React.useState('');
  const [receiptDate, setReceiptDate] = React.useState('');
  const [abono, setAbono] = React.useState(0);
  const [concepto, setConcepto] = React.useState('');
  const [isSearchClientOpen, setIsSearchClientOpen] = React.useState('');
  
  React.useEffect(() => {
    if (data) {
      setReceiptDate(data.receiptDate || '');
      setClientId(data.clientId || '');
      setAbono(data.abono || 0);
      setConcepto(data.concepto || '');
    }
  }, [data]);

  // const {
  //   orderTotal
  // } = React.useContext(OrderContext);

  function handleRegister() {
    const fetchRegister = {
      orderId: data.orderId,
      clientId,
      receiptDate,
      abono: Number(abono),
      concepto
    }
    console.log(fetchRegister);
    console.log(fetchRegister, url, registerId);    
    
    sendData(fetchRegister, menuOption.url, registerId);    
    setOpenModal(false);
  }

  return (
    <>
      {isLoading && <Loading/>}
      {isLoading || (
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
            <FormSpan name="order-id" holder="Order" value={data.orderId}/>
            <FormInput name="orderDate" holder="Order date" type="date" value={receiptDate} setValue={setReceiptDate}/>
          </div>
          <div className="flx obj-info">
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
          <div className="flx obj-info">
            <FormInput name="receipt-abono" holder="Abono" type="number" value={abono} setValue={setAbono}/>
          </div>
          <div className="flx obj-info">
            <FormInput name="receipt-concepto" holder="Concepto" value={concepto} setValue={setConcepto}/>
          </div>

          {isNew || <ReceiptOptions />}

          <FormButtons />
        </form>
      )}
    </>
  )
}

export { ReceiptForm };