import React from 'react';
import { AppUI } from './AppUI';
import { MenuProvider } from '../Context/MenuContext';
import { MobileProvider } from '../Context/MobileContext';

function App() {
  return (
    <MobileProvider>
      <MenuProvider>
        <AppUI/>
      </MenuProvider>
    </MobileProvider>
  );
}

export default App;
