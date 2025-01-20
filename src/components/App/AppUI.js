import React from 'react';
import './AppUI.css';
import { Header } from '../Header';
import { SideMenu } from '../SideMenu';
import { MainWindow } from '../MainWindow';
import { MainContent } from '../MainContent/MainContent';

function AppUI() {
  console.log('Render AppUI')
  return (
    <div className='flx app-container'>
      <SideMenu />
      <MainWindow>
        <Header />
        <MainContent/>
      </MainWindow>
    </div>
  );
}

export { AppUI };