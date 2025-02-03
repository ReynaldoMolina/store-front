import React from "react";
import { baseUrl } from "../urls/menuOptionsList";
import { DataContext } from "../Context/DataContext";
import { OrderContext } from "../Context/OrderContext";
import { useGetData } from "../Hooks/useGetData";
import { ProductSearch } from "../ProductSearch";
import { ProductCard } from "../ProductCard";
import { ProductCardEmpty } from "../ProductCard/ProductCardEmpty";
import { getOrderTotals } from "../Hooks/getOrderTotals";
import "./OrdersDetails.css";

function OrdersDetails() {
  console.log('Render OrdersDetails');
  const { registerId, isNew } = React.useContext(DataContext);
  const {
    productList, setProductList,
    setOriginalProductList,
    setOrderTotal, setOrderQuantity, setOrderItems
  } = React.useContext(OrderContext);

  const url = `${baseUrl}ordersdetails/${registerId}`;
  const { data } = useGetData(url);
  console.log('productList', productList);

  React.useEffect(() => {
    console.log('useEffect detail');
    if (!isNew) {
      if (data) {
        setProductList(data || []);
        setOriginalProductList(data || []);
      }
    }
    orderTotals(productList);
  }, [data]);

  function orderTotals(list) {
    const totals = getOrderTotals(list);
    setOrderTotal(totals.total);
    setOrderQuantity(totals.quantity);
    setOrderItems(totals.items);
  }

  return (
    <>
      <ProductSearch />
      <div className="flx flx-col details-list">
        {productList.length === 0 ? <ProductCardEmpty/> :
          productList.map(register => (
            <ProductCard register={register} />
          ))
        }
      </div>
    </>
  )
}

export { OrdersDetails };