import React from 'react';
import { StoreProvider } from '../StoreContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <StoreProvider>
      <AppUI/>
    </StoreProvider>
  );
}

export default App;
