import React from "react";
// import { MenuContext } from "./MenuContext";

const DataContext = React.createContext();

function DataProvider({ children }) {
  console.log('useContext DataContext')

  // const { menuOption } = React.useContext(MenuContext);

  const [openModal, setOpenModal] = React.useState(false);
  const [registerId, setRegisterId] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [isNew, setIsNew] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  // const filteredData = data.filter((register) => {
  //   let fullInfo;

  //   switch (menuOption.name) {
  //     case 'Clients':
  //       fullInfo = `${register.id} ${register.name} ${register.lastname}`;
  //       break;
  //     case 'Providers':
  //       fullInfo = `${register.id} ${register.company}`;
  //       break;
  //     case 'Categories':
  //       fullInfo = `${register.id} ${register.name}`;
  //       break;
  //     case 'Products':
  //       fullInfo = `${register.id} ${register.name}`;
  //       break;
    
  //     default:
  //       fullInfo = '';
  //       break;
  //   }

  //   fullInfo = fullInfo.toLowerCase();
  //   const searchText = searchValue.toLowerCase();
  //   return fullInfo.includes(searchText);
  // });

  return (
    <DataContext.Provider value={{
      openModal, setOpenModal,
      registerId, setRegisterId,
      searchValue, setSearchValue,
      isNew, setIsNew,
      isLoading, setIsLoading,
      error, setError,
      // isUpdating, setIsUpdating,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider};