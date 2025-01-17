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
  },
  {
    id: 2,
    name: "Orders",
  },
  {
    id: 3,
    name: "Receipts",
  },
  {
    id: 4,
    name: "Providers",
  },
  {
    id: 5,
    name: "Purchases",
  },
  {
    id: 6,
    name: "Expenses",
  },
  {
    id: 7,
    name: "Products",
  },
  {
    id: 8,
    name: "Categories",
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
                setMenuOption(option.name);
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