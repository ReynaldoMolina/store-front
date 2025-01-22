import React from "react";
import { MenuContext } from "./MenuContext";
import { DataContext } from "./DataContext";

const ClientContext = React.createContext();

function ClientProvider({ children }) {  
  console.log('useContext ClientContext')
  const { menuOption } = React.useContext(MenuContext);
  const {
    setIsLoading,
    isUpdating, setIsUpdating,
    searchValue
  } = React.useContext(DataContext);

  const [clients, setClients] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [client, setClient] = React.useState('');

  let filteredClients;
  if (menuOption.name === 'Clients') {
    
    filteredClients = clients.filter((client) => {
      const fullData = `${client.id} ${client.name} ${client.lastname}`;
      const name = fullData.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return name.includes(searchText);
    });
  }

  React.useEffect(() => {
    setIsLoading(true);
    console.log('Efecto useGetData');
    if (menuOption.url != null) {
      try {
        fetch(menuOption.url)
          .then(response => response.json())
          .then(apidata => setClients(apidata));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
        setIsUpdating(false);
      }
    }
  }, [menuOption, isUpdating]);

  return (
    <ClientContext.Provider value={{
      clients,
      filteredClients,
      error,
      client, setClient,
    }}>
      {children}
    </ClientContext.Provider>
  )
}

export { ClientContext, ClientProvider };