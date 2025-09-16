"use client";

import { createContext, useState, useContext,  } from "react";

export const NavDataContext = createContext(null);

const NavContext = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavDataContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavDataContext.Provider>
  );
};

export default NavContext;

// Custom hook for safety
export const useNav = () => {
  const context = useContext(NavDataContext);
  if (!context) {
    throw new Error("useNav must be used inside NavContext");
  }
  return context;
};
