import React from "react";
import { MenuContext } from "./MenuContext";

const ClientContext = React.createContext();

function ClientProvider({ children }) {  
  console.log('useContext ClientContext')
  const { menuOption } = React.useContext(MenuContext);

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const [client, setClient] = React.useState('');
  const [editable, setEditable] = React.useState(false);

  const [id, setId] = React.useState(client.id || '');
  const [name, setName] = React.useState(client.name || '');
  const [lastname, setLastname] = React.useState(client.lastname || '');
  const [phone, setPhone] = React.useState(client.phone || '');
  const [municipio, setMunicipio] = React.useState(client.municipio || '');
  const [city, setCity] = React.useState(client.departamento || '');
  const [country, setCountry] = React.useState(client.country || '');
  const [address, setAddress] = React.useState(client.address || '');

  let filteredClients;
  if (menuOption.name === 'Clients') {
    console.log('Filtered clients');
    
    filteredClients = data.filter((client) => {
      const fullData = client.name + client.lastname + client.phone;
      const name = fullData.toLowerCase();
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
    <ClientContext.Provider value={{
      data,filteredClients,
      loading, error,
      searchValue, setSearchValue,
      openModal, setOpenModal,
      client, setClient,
      id, setId,
      name, setName,
      lastname, setLastname,
      phone, setPhone,
      municipio, setMunicipio,
      city, setCity,
      country, setCountry,
      address, setAddress,
      editable, setEditable
    }}>
      {children}
    </ClientContext.Provider>
  )
}

export { ClientContext, ClientProvider };