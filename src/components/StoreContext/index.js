import React from "react";

const StoreContext = React.createContext();

function StoreProvider({ children }) {  
  console.log('useContext StoreContext')

  const [mobileWidth, setMobileWidth] = React.useState(
    window.innerWidth > 500 ? false : true
  );
  const [openMenu, setOpenMenu] = React.useState(
    window.innerWidth < 501 ? false : true
  );
  const [menuOption, setMenuOption] = React.useState({ name: "Home" });
  const [data, setData] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [client, setClient] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  let filteredClients;
  if (menuOption.name === 'Clients') {
    console.log('Filtered clients');
    
    filteredClients = data.filter((client) => {
      const fullName = client.name + client.lastname + client.phone;
      const name = fullName.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return name.includes(searchText);
    });
  }

  React.useEffect(() => {
    setLoading(true);
    console.log('Efecto useGetData');
    if (menuOption.url != null) {
      try {
        fetch(menuOption.url)
          .then(response => response.json())
          .then(apidata => setData(apidata));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

  }, [menuOption]);

  return (
    <StoreContext.Provider value={{
      mobileWidth,
      setMobileWidth,
      openMenu,
      setOpenMenu,
      menuOption,
      setMenuOption,
      data,
      filteredClients,
      loading,
      error,
      searchValue,
      setSearchValue,
      openModal,
      setOpenModal,
      client,
      setClient
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider };