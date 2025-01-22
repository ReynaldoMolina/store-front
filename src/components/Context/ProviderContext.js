import React from "react";
import { MenuContext } from "./MenuContext";
import { DataContext } from "./DataContext";

const ProviderContext = React.createContext();

function ProviderProvider({ children }) {  
  console.log('useContext ProviderContext')
  const { menuOption } = React.useContext(MenuContext);
  const {
    setIsLoading,
    isUpdating, setIsUpdating,
    searchValue
  } = React.useContext(DataContext);

  const [providers, setProviders] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [provider, setProvider] = React.useState('');

  let filteredProviders;
  if (menuOption.name === 'Providers') {
    
    filteredProviders = providers.filter((provider) => {
      const fullData = `${provider.id} ${provider.company} ${provider.contact}`;
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
          .then(apidata => setProviders(apidata));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
        setIsUpdating(false);
      }
    }
  }, [menuOption, isUpdating]);

  return (
    <ProviderContext.Provider value={{
      providers,
      filteredProviders,
      error,
      provider, setProvider,
    }}>
      {children}
    </ProviderContext.Provider>
  )
}

export { ProviderContext, ProviderProvider };