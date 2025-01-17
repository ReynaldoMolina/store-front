import React from 'react';
import './AppUI.css';
import { Header } from '../Header';
import { SideMenu } from '../SideMenu';
import { MainWindow } from '../MainWindow';
import { Modal } from '../Modal';
import { MainContent } from '../MainContent/MainContent';

function AppUI() {
  return (
    <div className='flx'>
      <SideMenu />
      <MainWindow>
        <Header />
        <MainContent/>
      </MainWindow>
      <Modal>
      </Modal>
    </div>
  );
}

export { AppUI };