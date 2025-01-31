import React from "react";
import { MenuContext } from "./MenuContext";
import { DataContext } from "./DataContext";
import { useGetData } from "../Hooks/useGetData";

const OrderContext = React.createContext();

function OrderProvider({ children }) {
  const { menuOption } = React.useContext(MenuContext);
  const { registerId } = React.useContext(DataContext);

  const data = useGetData(menuOption.url + registerId);
  console.log('Order', data);

  const [orderData, setOrderData] = React.useState([]);
  const [orderDate, setOrderDate] = React.useState('');
  const [paid, setPaid] = React.useState(false);
  const [orderTotal, setOrderTotal] = React.useState(0);
  const [productList, setProductList] = React.useState([]);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  React.useEffect(() => {
    if (data) {
      setOrderData(data)
      setOrderDate(data.orderDate || '');
      setPaid(data.paid || false);
      setOrderTotal(data.orderTotal || 0);
    }
  }, [data]);


  return (
    <OrderContext.Provider value={{
      orderData,
      orderDate, setOrderDate,
      paid, setPaid,
      orderTotal, setOrderTotal,
      productList, setProductList,
      isSearchOpen, setIsSearchOpen
    }}>
      {children}
    </OrderContext.Provider>
  )
}

export { OrderContext, OrderProvider };