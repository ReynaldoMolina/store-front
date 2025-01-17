import React from "react";
import "./SideMenu.css";
import { SideMenuIcon } from "../SideMenuIcon";

const menuOptionClass = "flx flx-center side-menu-opt";

const menuOptions = [
  {
    name: "Home",
    route: '/'
  },
  {
    name: "Clients",
    route: '#'
  },
  {
    name: "Orders",
    route: '#'
  },
  {
    name: "Receipts",
    route: '#'
  },
  {
    name: "Providers",
    route: '#'
  },
  {
    name: "Purchases",
    route: '#'
  },
  {
    name: "Expenses",
    route: '#'
  },
  {
    name: "Products",
    route: '#'
  },
  {
    name: "Categories",
    route: '#'
  },
  {
    name: "Finances",
    route: '#'
  },
  {
    name: "Settings",
    route: '#'
  },
  {
    name: "Log out",
    route: '#'
  }
];

function SideMenu() {
  return (
    <menu className="flx flx-col side-menu">
      <h1 className="flx flx-center sidebar-logo">Menu</h1>

      <nav className="flx flx-col flx-center side-menu-options">
        {menuOptions.map(option => (
          <a href={option.route} className={menuOptionClass}>
            <SideMenuIcon name={option.name} />
            {option.name}
          </a>
        ))}
      </nav>
    </menu>
  )
}

export { SideMenu };