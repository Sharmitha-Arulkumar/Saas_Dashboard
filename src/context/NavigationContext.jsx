import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext(undefined);

export function NavigationProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [productDrawerOpen, setProductDrawerOpen] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        productDrawerOpen,
        setProductDrawerOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context)
    throw new Error("useNavigation must be used within NavigationProvider");
  return context;
}
