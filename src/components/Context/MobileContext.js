import React from "react";

const MobileContext = React.createContext();

function MobileProvider({ children }) {  
  console.log('useContext MobileContext')

  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth > 500 ? false : true
  );

  return (
    <MobileContext.Provider value={{
      isMobile,
      setIsMobile
    }}>
      {children}
    </MobileContext.Provider>
  )
}

export { MobileContext, MobileProvider };