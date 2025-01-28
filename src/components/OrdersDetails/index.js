import React from "react";
// import { MenuContext } from "../Context/MenuContext";
import { DataContext } from "../Context/DataContext";
import { useGetData } from "../Hooks/useGetData";
import { ProductCard } from "../ProductCard";
import "./OrdersDetails.css";

function OrdersDetails() {
  console.log('Render OrdersDetails');
  // const { menuOption } = React.useContext(MenuContext);
  const { registerId, setIsNew } = React.useContext(DataContext);
  const url = 'http://192.168.1.9:3001/api/v1/ordersdetails/';
  const data = useGetData(url);
  console.log('orderdetails', data)

  const filteredData = data.filter((register) => {
    return register.orderId == registerId;
  });
  
  return (
    <>
      {/* <h1 className="register-title">Details</h1> */}
      <div className="flx flx-col details-list">
        {filteredData.map(register => (
          <ProductCard key={register.id} orderId={register.orderId} productId={register.productId}/>
        ))}
      </div>
    </>
  )
}

export { OrdersDetails };