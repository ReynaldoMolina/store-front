import React from 'react';
import './AppUI.css';
import { Header } from '../Header';
import { SideMenu } from '../SideMenu';
import { MainWindow } from '../MainWindow';
import { MainContent } from '../MainContent/MainContent';
import { DataProvider } from '../Context/DataContext';

function AppUI() {
  console.log('Render AppUI')
  return (
    <div className='flx app-container'>
      <DataProvider>
        <SideMenu />
        <MainWindow>
          <Header />
          <MainContent/>
        </MainWindow>
      </DataProvider>
    </div>
  );
}

export { AppUI };