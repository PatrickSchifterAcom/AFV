import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState([]);
    const [openMenu, setOpenMenu] = useState(true);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [menuTabs, setMenuTabs] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [userMenuRef, setUserMenuRef] = useState('');

  return (
    <MenuContext.Provider value={
      { 
        activeMenu, 
        setActiveMenu, 
        openMenu, 
        setOpenMenu,
        userMenuOpen,
        setUserMenuOpen,
        menuTabs,
        setMenuTabs,
        activeTab,
        setActiveTab,
        userMenuRef,
        setUserMenuRef
      }
    }>
      {children}
    </MenuContext.Provider>
  );
};