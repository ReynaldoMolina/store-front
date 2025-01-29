import React from "react";
import { baseUrl } from "../urls/menuOptionsList";
import { DataContext } from "../Context/DataContext";
import { useGetData } from "../Hooks/useGetData";
import { OpenProductSearch } from "../OpenProductSearch";
import { ProductSearch } from "../ProductSearch";
import { ProductCard } from "../ProductCard";
import "./OrdersDetails.css";

function OrdersDetails() {
  console.log('Render OrdersDetails');
  const { registerId } = React.useContext(DataContext);
  
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [productList, setProductList] = React.useState([]);

  const url = baseUrl + 'ordersdetails/' + registerId;
  const data = useGetData(url);
  console.log('productList detail', productList);

  React.useEffect(() => {
    console.log('useEffect detail');
    
    if (data) {
      setProductList(data || []);
    }
  }, [data]);

  return (
    <>
      <OpenProductSearch isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
      <ProductSearch isSearchOpen={isSearchOpen} productList={productList} setProductList={setProductList} orderId={registerId}/>
      <div className="flx flx-col details-list">
        {productList.map(register => (
          <ProductCard
            id={register.id}
            orderId={register.orderId}
            productId={register.productId}
            productQty={register.quantity}
            productSellPrice={register.sellPrice}  
            productList={productList}
            setProductList={setProductList}
          />
        ))}
      </div>
    </>
  )
}

export { OrdersDetails };