import React from "react";

const DataContext = React.createContext();

function DataProvider({ children }) {
  console.log('useContext DataContext')

  const [isLoading, setIsLoading] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <DataContext.Provider value={{
      isLoading, setIsLoading,
      isEditing, setIsEditing,
      isUpdating, setIsUpdating,
      searchValue, setSearchValue,
      openModal, setOpenModal
    }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider}