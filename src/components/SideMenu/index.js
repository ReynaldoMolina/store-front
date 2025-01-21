import React from "react";
import "./SideMenu.css";
import { SideMenuIcon } from "../SideMenuIcon";
import { StoreContext } from "../StoreContext";

const menuOptionClass = "flx flx-center side-menu-opt";
const menuOptions = [
  {
    id: 0,
    name: "Home",
  },
  {
    id: 1,
    name: "Clients",
    // url: 'http://192.168.1.9:3001/api/v1/clients',
    url: 'http://jahairastore.vercel.app/api/v1/clients'
  },
  {
    id: 2,
    name: "Orders",
    // url: 'http://192.168.1.9:3001/api/v1/orders',
    url: 'http://jahairastore.vercel.app/api/v1/orders'
  },
  {
    id: 3,
    name: "Receipts",
    url: ''
  },
  {
    id: 4,
    name: "Providers",
    url: ''
  },
  {
    id: 5,
    name: "Purchases",
    url: ''
  },
  {
    id: 6,
    name: "Expenses",
    url: ''
  },
  {
    id: 7,
    name: "Products",
    url: ''
  },
  {
    id: 8,
    name: "Categories",
    url: ''
  },
  {
    id: 9,
    name: "Finances",
  },
  {
    id: 10,
    name: "Settings",
  },
  {
    id: 11,
    name: "Log out",
  }
];

function SideMenu() {
  console.log('Render SideMenu');
  const {
    mobileWidth,
    openMenu,
    setOpenMenu,
    setMenuOption
  } = React.useContext(StoreContext);;

  return (
    <>
      <menu
        className={`flx flx-col side-menu ${openMenu || "hidden"}`}
      >
        <h1 className="flx flx-center sidebar-logo">Menu</h1>
        <nav className="flx flx-col flx-center side-menu-options">
          {menuOptions.map(option => (
            <button
              key={option.id}
              className={menuOptionClass}
              onClick={() => {
                if (mobileWidth) {
                  setOpenMenu(false);
                }
                setMenuOption(option);
              }}
            >
              <SideMenuIcon name={option.name} />
              {option.name}
            </button>
          ))}
        </nav>
      </menu>
      <div
        className={`
          close-menu
          ${mobileWidth || "hidden"}
          ${openMenu || "hidden"}
        `}
        onClick={() => setOpenMenu(state => !state)}
      ></div>
    </>
  )
}

export { SideMenu };