import React from "react";
import { DataContext } from "../Context/DataContext";

function useFilterData(data, option) {
  const { searchValue } = React.useContext(DataContext);

  const filteredData = data.filter((register) => {
    let fullInfo;

    switch (option) {
      case 'Clients':
        fullInfo = `${register.id} ${register.name} ${register.lastname}`;
        break;
      case 'Providers':
        fullInfo = `${register.id} ${register.company}`;
        break;
      case 'Categories':
        fullInfo = `${register.id} ${register.name}`;
        break;
      case 'Products':
        fullInfo = `${register.id} ${register.name}`;
        break;
      case 'Orders':
        fullInfo = `${register.id} ${register.clientId}`;
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