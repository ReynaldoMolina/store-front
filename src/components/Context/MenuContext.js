import React from "react";

const MenuContext = React.createContext();

function MenuProvider({ children }) {  
  console.log('useContext MenuContext')

  const [isMenuOpen, setIsMenuOpen] = React.useState(
    window.innerWidth < 501 ? false : true
  );
  const [menuOption, setMenuOption] = React.useState({ name: "Home" });

  return (
    <MenuContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      menuOption,
      setMenuOption
    }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContext, MenuProvider };