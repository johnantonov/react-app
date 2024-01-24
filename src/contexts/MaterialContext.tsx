'use client'
import React, { Dispatch, SetStateAction, useState } from "react";


interface Materials {
  activeButton: string;
  setActiveButton: Dispatch<SetStateAction<string>>;
}

export const MaterialsContext = React.createContext<Materials>({
  activeButton: 'Материалы',
  setActiveButton: () => {},
});

export const MaterialsContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [activeButton, setActiveButton] = useState('Материалы');

  return (
    <MaterialsContext.Provider value={{
      activeButton: activeButton,
      setActiveButton: setActiveButton
    }}>
      { children }
    </MaterialsContext.Provider>
  )
};