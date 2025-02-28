import React from "react";
import { DataContext } from "../Context/DataContext";

function useFilterData(data, option) {
  const { searchValue } = React.useContext(DataContext);

  const filteredData = data.filter((register) => {
    let fullInfo;

    switch (option) {
      case 'Clientes':
        fullInfo = `${register.id} ${register.fullname}`;
        break;
      case 'Proveedores':
        fullInfo = `${register.id} ${register.company}`;
        break;
      case 'Categorías':
        fullInfo = `${register.id} ${register.name}`;
        break;
      case 'Productos':
        fullInfo = `${register.id} ${register.name}`;
        break;
      case 'Pedidos':
        fullInfo = `${register.id} ${register.fullname}`;
        break;
      case 'Ventas':
        fullInfo = `${register.id} ${register.orderId} ${register.fullname}`;
        break;

      default:
        fullInfo = '';
        break;
    }
  
    fullInfo = fullInfo.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return fullInfo.includes(searchText);
  });

  return filteredData;
}

export { useFilterData };