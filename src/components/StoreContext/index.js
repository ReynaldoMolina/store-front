import React from "react";
import { useGetData } from "./getData";

const StoreContext = React.createContext();
const url = 'https://jahairastore.vercel.app/api/v1/clients';

function StoreProvider({ children }) {
  const {data, loading, error} = useGetData(url);

  const [mobileWidth, setMobileWidth] = React.useState(
    window.innerWidth > 500 ? false : true
  );
  const [openMenu, setOpenMenu] = React.useState(
    window.innerWidth < 501 ? false : true
  );
  const [menuOption, setMenuOption] = React.useState('Home');

  return (
    <StoreContext.Provider value={{
      mobileWidth,
      setMobileWidth,
      openMenu,
      setOpenMenu,
      menuOption,
      setMenuOption,
      data,
      loading,
      error
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider };