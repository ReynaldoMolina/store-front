import React from "react";
import { ReactComponent as SvgMenu } from './menu.svg';
import { MenuContext } from "../../Context/MenuContext";
import './ToggleMenuButton.css';

function ToggleMenuButton() {
  const { setIsMenuOpen } = React.useContext(MenuContext);
  return (
    <>
      <SvgMenu
        className="toggle-menu-button"
        onClick={
          () => {
            setIsMenuOpen(state => !state);
          }
        }
      />
    </>
  )
}

export { ToggleMenuButton };