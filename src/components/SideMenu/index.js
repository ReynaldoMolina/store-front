import React from "react";
import { MobileContext } from "../Context/MobileContext";
import { MenuContext } from "../Context/MenuContext";
import { ClientContext } from "../Context/ClientContext";
import { SideMenuIcon } from "./SideMenuIcon";
import "./SideMenu.css";

const menuOptionClass = "flx flx-center side-menu-opt";
const menuOptions = [
  {
    id: 0,
    name: "Home",
    divider: true
  },
  {
    id: 1,
    name: "Clients",
    // url: 'http://192.168.1.9:3001/api/v1/clients',
    url: 'https://jahairastore.vercel.app/api/v1/clients',
    divider: false
  },
  {
    id: 2,
    name: "Orders",
    // url: 'http://192.168.1.9:3001/api/v1/orders',
    url: 'https://jahairastore.vercel.app/api/v1/orders',
    divider: false
  },
  {
    id: 3,
    name: "Receipts",
    url: '',
    divider: true
  },
  {
    id: 4,
    name: "Providers",
    url: '',
    divider: false
  },
  {
    id: 5,
    name: "Purchases",
    url: '',
    divider: false
  },
  {
    id: 6,
    name: "Expenses",
    url: '',
    divider: true
  },
  {
    id: 7,
    name: "Products",
    url: '',
    divider: false
  },
  {
    id: 8,
    name: "Categories",
    url: '',
    divider: false
  },
  {
    id: 9,
    name: "Finances",
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

function SideMenu() {
  console.log('Render SideMenu');
  const { isMobile } = React.useContext(MobileContext);
  const { setMenuOption, isMenuOpen, setIsMenuOpen } = React.useContext(MenuContext);
  const { setOpenModal } = React.useContext(ClientContext);

  return (
    <>
      <menu
        className={`flx flx-col side-menu ${isMenuOpen || "hidden"}`}
      >
        <h1 className="flx flx-center sidebar-logo">Menu</h1>
        <nav className="flx flx-col flx-center side-menu-options">
          {menuOptions.map(option => (
            <>
              <button
                key={option.id}
                className={menuOptionClass}
                onClick={() => {
                  if (isMobile) {                    
                    setIsMenuOpen(false);
                  }
                  setMenuOption(option);
                  setOpenModal(false);
                }}
              >
                <SideMenuIcon name={option.name} />
                {option.name}
              </button>
              {option.divider && (
                <div className="side-menu-divider"></div>
              )}
            </>
          ))}
        </nav>
      </menu>
      <div
        className={`
          close-menu
          ${isMobile || "hidden"}
          ${isMenuOpen || "hidden"}
        `}
        onClick={() => setIsMenuOpen(state => !state)}
      ></div>
    </>
  )
}

export { SideMenu };