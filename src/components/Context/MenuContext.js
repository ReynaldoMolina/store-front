import React from "react";
import { menuOptionsList } from "../urls/menuOptionsList";
import { MobileContext } from "./MobileContext";

const MenuContext = React.createContext();

function MenuProvider({ children }) {  
  console.log('useContext MenuContext')
  const { isMobile } = React.useContext(MobileContext);

  const [isMenuOpen, setIsMenuOpen] = React.useState(isMobile ? false : true);
  const [menuOptions] = React.useState(menuOptionsList);
  const [menuOption, setMenuOption] = React.useState({ name: "Home" });

  return (
    <MenuContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      menuOptions,
      menuOption,
      setMenuOption,
    }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContext, MenuProvider };