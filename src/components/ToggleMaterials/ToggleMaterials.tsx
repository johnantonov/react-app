
import { createContext, useContext, useState } from 'react';
import css from './ToggleMaterials.module.css'
import { MaterialsContext, MaterialsContextProvider } from '@/contexts/MaterialContext';


const MaterialsButtons = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      { children }
    </div>
  )
};

MaterialsButtons.Tab = function Tab({ title }: { title: string }) {
  const { activeButton, setActiveButton } = useContext(MaterialsContext);

  return (
    <button 
      className={css.btn + ' ' + (activeButton === title ? css.btn_active : '')}
      onClick={() => activeButton !== title && setActiveButton(title)}
    >
      { title }
    </button>
  )
}


export const ToggleMaterials = () => {
  
 return (
  <MaterialsButtons>
    <MaterialsButtons.Tab title='Материалы'></MaterialsButtons.Tab>
    <MaterialsButtons.Tab title='Фурнитура'></MaterialsButtons.Tab>
  </MaterialsButtons>
 )
};