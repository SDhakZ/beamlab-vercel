"use client";
import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export function useGlobalState() {
  return useContext(GlobalStateContext);
}

export const GlobalStateProvider = ({ children }) => {
  const [menuBackgroundBlack, setMenuBackgroundBlack] = useState(false);

  return (
    <GlobalStateContext.Provider
      value={{ menuBackgroundBlack, setMenuBackgroundBlack }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
