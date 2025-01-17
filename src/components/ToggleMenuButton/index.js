import React from "react";
import { ReactComponent as SvgMenu } from './menu.svg';
import { StoreContext } from "../StoreContext";
import './ToggleMenuButton.css';

function ToggleMenuButton() {
  const { setOpenMenu } = React.useContext(StoreContext);
  return (
    <>
      <SvgMenu
        className="toggle-menu-button"
        onClick={
          () => {
            setOpenMenu(state => !state);
          }
        }
      />
    </>
  )
}

export { ToggleMenuButton };