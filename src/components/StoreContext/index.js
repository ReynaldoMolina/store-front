import React from "react";

const StoreContext = React.createContext();

function StoreProvider({ children }) {
  const [openMenu, setOpenMenu] = React.useState(true);

  return (
    <StoreContext.Provider value={{
      openMenu,
      setOpenMenu
    }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider };