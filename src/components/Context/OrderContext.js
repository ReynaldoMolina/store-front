import React from "react";
import { MenuContext } from "./MenuContext";
import { DataContext } from "./DataContext";
import { useGetData } from "../Hooks/useGetData";

const OrderContext = React.createContext();

function OrderProvider({ children }) {
  const { menuOption } = React.useContext(MenuContext);
  const { registerId } = React.useContext(DataContext);

  const { data, isLoading} = useGetData(menuOption.url + registerId);
  console.log('Order', data);

  const currenDate = new Date();
  const isoDate = currenDate.toISOString();
  const formattedDate = isoDate.split("T")[0];

  const [orderData, setOrderData] = React.useState([]);
  const [orderDate, setOrderDate] = React.useState('');
  const [paid, setPaid] = React.useState(false);
  const [orderTotal, setOrderTotal] = React.useState(0);
  const [orderQuantity, setOrderQuantity] = React.useState(0);
  const [orderItems, setOrderItems] = React.useState(0);
  const [originalProductList, setOriginalProductList] = React.useState([]);
  const [productList, setProductList] = React.useState([]);
  const [clientId, setClientId] = React.useState('');
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isSearchClientOpen, setIsSearchClientOpen] = React.useState(false);

  React.useEffect(() => {
    if (data) {
      setClientId(data.clientId || '');
      setOrderData(data);
      setOrderDate(data.orderDate || formattedDate);
      setPaid(data.paid || false);
      setOrderTotal(data.orderTotal || 0);
    }
  }, [data]);

  return (
    <OrderContext.Provider value={{
      orderData,
      isLoading,
      orderDate, setOrderDate,
      paid, setPaid,
      orderTotal, setOrderTotal,
      orderQuantity, setOrderQuantity,
      orderItems, setOrderItems,
      productList, setProductList,
      originalProductList, setOriginalProductList,
      clientId, setClientId,
      isSearchOpen, setIsSearchOpen,
      isSearchClientOpen, setIsSearchClientOpen,
    }}>
      {children}
    </OrderContext.Provider>
  )
}

export { OrderContext, OrderProvider };