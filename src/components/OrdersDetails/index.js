import React from "react";
import { DataContext } from "../Context/DataContext";
import { useGetData } from "../Hooks/useGetData";
import { ProductCard } from "../ProductCard";
import { baseUrl } from "../urls/menuOptionsList";
import "./OrdersDetails.css";

function OrdersDetails() {
  console.log('Render OrdersDetails');
  const { registerId, setIsNew } = React.useContext(DataContext);
  
  const url = baseUrl + 'ordersdetails/';
  const data = useGetData(url);
  console.log('orderdetails', data)

  const filteredData = data.filter((register) => {
    return register.orderId == registerId;
  });
  
  return (
    <>
      <div className="flx flx-col details-list">
        {filteredData.map(register => (
          <ProductCard
            key={register.id}
            orderId={register.orderId}
            productId={register.productId}
            productQty={register.quantity}/>
        ))}
      </div>
    </>
  )
}

export { OrdersDetails };