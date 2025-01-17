import React from "react";

const StoreContext = React.createContext();

function StoreProvider({ children }) {
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
      setMenuOption
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider };