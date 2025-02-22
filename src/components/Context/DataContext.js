import React from "react";

const DataContext = React.createContext();

function DataProvider({ children }) {
  console.log('useContext DataContext')

  const [openModal, setOpenModal] = React.useState(false);
  const [registerId, setRegisterId] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [isNew, setIsNew] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <DataContext.Provider value={{
      openModal, setOpenModal,
      registerId, setRegisterId,
      searchValue, setSearchValue,
      isNew, setIsNew,
      isLoading, setIsLoading,
      isUpdating, setIsUpdating,
      error, setError,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider};