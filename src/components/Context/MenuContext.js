import React from "react";
import { MobileContext } from "./MobileContext";

const MenuContext = React.createContext();

function MenuProvider({ children }) {  
  console.log('useContext MenuContext')

  const menuOptionsObj = [
    {
      id: 0,
      name: "Home",
      divider: true
    },
    {
      id: 1,
      name: "Clients",
      // url: 'http://192.168.1.9:3001/api/v1/clients/',
      url: 'https://jahairastore.vercel.app/api/v1/clients/',
      divider: false
    },
    {
      id: 2,
      name: "Orders",
      // url: 'http://192.168.1.9:3001/api/v1/orders/',
      url: 'https://jahairastore.vercel.app/api/v1/orders/',
      divider: false
    },
    {
      id: 3,
      name: "Receipts",
      url: 'http://192.168.1.9:3001/api/v1/receipts/',
      // url: 'https://jahairastore.vercel.app/api/v1/receipts/',
      divider: true
    },
    {
      id: 4,
      name: "Providers",
      // url: 'http://192.168.1.9:3001/api/v1/providers/',
      url: 'https://jahairastore.vercel.app/api/v1/providers/',
      divider: false
    },
    {
      id: 5,
      name: "Purchases",
      url: 'http://192.168.1.9:3001/api/v1/purchases/',
      // url: 'https://jahairastore.vercel.app/api/v1/purchases/',
      divider: false
    },
    {
      id: 6,
      name: "Expenses",
      url: 'http://192.168.1.9:3001/api/v1/expenses/',
      // url: 'https://jahairastore.vercel.app/api/v1/expenses/',
      divider: true
    },
    {
      id: 7,
      name: "Products",
      // url: 'http://192.168.1.9:3001/api/v1/products/',
      url: 'https://jahairastore.vercel.app/api/v1/products/',
      divider: false
    },
    {
      id: 8,
      name: "Categories",
      // url: 'http://192.168.1.9:3001/api/v1/categories/',
      url: 'https://jahairastore.vercel.app/api/v1/categories/',
      divider: false
    },
    {
      id: 9,
      name: "Finances",
      url: 'http://192.168.1.9:3001/api/v1/finances/',
      // url: 'https://jahairastore.vercel.app/api/v1/finances/',
      divider: true
    },
    {
      id: 10,
      name: "Settings",
      divider: false
    },
    {
      id: 11,
      name: "Log out",
      divider: false
    }
  ];

  const { isMobile } = React.useContext(MobileContext);

  const [isMenuOpen, setIsMenuOpen] = React.useState(
    isMobile ? false : true
  );
  const [menuOptions] = React.useState(menuOptionsObj)
  const [menuOption, setMenuOption] = React.useState({ name: "Home" });

  return (
    <MenuContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      menuOption,
      setMenuOption,
      menuOptions
    }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContext, MenuProvider };