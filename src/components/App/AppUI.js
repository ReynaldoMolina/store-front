import React from 'react';
import './AppUI.css';
import { Header } from '../Header';
import { SideMenu } from '../SideMenu';
import { MainWindow } from '../MainWindow';
import { Modal } from '../Modal';
import { StoreContext } from '../StoreContext';

function AppUI() {
  const {
    openMenu, setOpenMenu
  } = React.useContext(StoreContext);

  return (
    <div className='flx'>
      {openMenu && (
        <Modal>
          <SideMenu />
          <div
            className='modal'
            onClick={
              () => {
                setOpenMenu(state => !state);
              }
            }
          >
          </div>
        </Modal>
      )}
      <MainWindow>
        <Header />
      </MainWindow>
    </div>
  );
}

export { AppUI };