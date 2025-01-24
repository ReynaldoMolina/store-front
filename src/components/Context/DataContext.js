import React from "react";
import { MenuContext } from "./MenuContext";

const DataContext = React.createContext();

function DataProvider({ children }) {
  console.log('useContext DataContext')

  const { menuOption } = React.useContext(MenuContext);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [register, setRegister] = React.useState('');

  const filteredData = data.filter((register) => {
    let fullInfo;

    switch (menuOption.name) {
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
    
      default:
        fullInfo = '';
        break;
    }

    fullInfo = fullInfo.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return fullInfo.includes(searchText);
  });

  React.useEffect(() => {
    setIsLoading(true);
    console.log('Efecto useGetData');
    if (menuOption.url != null) {
      try {
        fetch(menuOption.url)
          .then(response => response.json())
          .then(apidata => setData(apidata));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
        setIsUpdating(false);
      }
    }
  }, [menuOption, isUpdating]);

  return (
    <DataContext.Provider value={{
      isLoading, setIsLoading,
      isEditing, setIsEditing,
      isUpdating, setIsUpdating,
      searchValue, setSearchValue,
      openModal, setOpenModal,
      data, setData, filteredData,
      error, setError,
      register, setRegister,
    }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider}