import React from 'react';
import { AppUI } from './AppUI';
import { MenuProvider } from '../Context/MenuContext';
import { MobileProvider } from '../Context/MobileContext';
import { ClientProvider } from '../Context/ClientContext';

function App() {
  return (
    <MobileProvider>
      <MenuProvider>
        <ClientProvider>
          <AppUI/>
        </ClientProvider>
      </MenuProvider>
    </MobileProvider>
  );
}

export default App;
