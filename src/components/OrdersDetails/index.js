import React from "react";
import { baseUrl } from "../urls/menuOptionsList";
import { DataContext } from "../Context/DataContext";
import { OrderContext } from "../Context/OrderContext";
import { useGetData } from "../Hooks/useGetData";
import { OpenProductSearch } from "../OpenProductSearch";
import { ProductSearch } from "../ProductSearch";
import { ProductCard } from "../ProductCard";
import { ProductCardEmpty } from "../ProductCard/ProductCardEmpty";
import "./OrdersDetails.css";

function OrdersDetails({ setTotal }) {
  console.log('Render OrdersDetails');
  const { registerId } = React.useContext(DataContext);
  const { productList, setProductList } = React.useContext(OrderContext);

  const url = baseUrl + 'ordersdetails/' + registerId;
  const data = useGetData(url);
  console.log('productList', productList);

  React.useEffect(() => {
    console.log('useEffect detail');
    if (data) {
      setProductList(data || []);
    }
  }, [data]);

  return (
    <>
      <OpenProductSearch />
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