import React from "react";
import { baseUrl } from "../urls/menuOptionsList";
import { DataContext } from "../Context/DataContext";
import { OrderContext } from "../Context/OrderContext";
import { OpenProductSearch } from "../OpenProductSearch";
import { EmptyList } from "../EmptyList";
import { useGetData } from "../Hooks/useGetData";
import { ReactComponent as SvgAdd } from "./add.svg";
import { getOrderTotals } from "../Hooks/getOrderTotals";
import filter from "./filter.svg";
import "./ProductSearch.css"

function ProductSearch() {
  const { registerId, isNew } = React.useContext(DataContext);
  const {
    productList, setProductList,
    isSearchOpen, setIsSearchOpen,
    setOrderTotal, setOrderQuantity, setOrderItems
  } = React.useContext(OrderContext);
  const [searchProduct, setSearchProduct] = React.useState('');

  const url = baseUrl + 'products/';
  const { data } = useGetData(url);
  
  const filteredData = data.filter((register) => {
    let fullInfo;
    fullInfo = `${register.id} ${register.name}`;
    fullInfo = fullInfo.toLowerCase();
    const searchText = searchProduct.toLowerCase();
    return fullInfo.includes(searchText);
  });

  function orderTotals(list) {
    const totals = getOrderTotals(list);    
    setOrderTotal(totals.total);
    setOrderQuantity(totals.quantity);
    setOrderItems(totals.items);
  }

  function addProduct(register) {
    let newDetail;
    if (isNew) {
      newDetail = {
        productId: register.id,
        sellPrice: register.sellPrice,
        quantity: 1
      };  
    } else {
      newDetail = {
        orderId: registerId,
        productId: register.id,
        sellPrice: register.sellPrice,
        quantity: 1
      };
    }
    setProductList([...productList, { ...newDetail }]);
    orderTotals([...productList, newDetail]);
  }

  return (
    <div className="flx flx-col product-search-container">
      <div className="flx flx-center product-search">
        <search className="flx flx-center search">
          <input
            type="search"
            id="search-products"
            className="frm-input frm-input-search"
            placeholder="Add products"
            value={searchProduct}
            onChange={(event) => {
              if (!isSearchOpen) {
                setIsSearchOpen(true);
              }
              setSearchProduct(event.target.value)
            }}
          ></input>
        </search>

        <button type="button" className="flx flx-center product-btn">
          <img src={filter} alt="Filter"></img>
        </button>
        <OpenProductSearch />
      </div>

      <div className={`flx flx-col products-list ${isSearchOpen || "hidden"}`}>
        {filteredData.length === 0 && <EmptyList/>}
        {filteredData.map(register => (
            <div
              key={register.id}
              className="flx products"
            >
              <span className="flx flx-center product-search-id">{register.id}</span>
              <div className="flx product-search-info">
                <span className="flx product-search-name">{register.name}</span>
              </div>
              <span className="product-sell-price">$ {register.sellPrice}</span>
              <SvgAdd
                className="flx product-search-add"
                onClick={() => addProduct(register)}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export { ProductSearch };