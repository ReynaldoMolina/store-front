import React from "react";
import { MobileContext } from "./MobileContext";

const MenuContext = React.createContext();

function MenuProvider({ children }) {  
  console.log('useContext MenuContext')
  const { isMobile } = React.useContext(MobileContext);

  const [isMenuOpen, setIsMenuOpen] = React.useState(
    isMobile ? false : true
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