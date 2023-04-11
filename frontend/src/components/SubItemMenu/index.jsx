import React, {useContext} from 'react';
import { MenuContext } from '../../contexts/menuContext';


import './style.css'

const SubItemMenu = ({titulo, className, idMenu}) => {

  const {menuTabs ,setMenuTabs, activeTab, setActiveTab} = useContext(MenuContext);

  const handleClickSubMenuItem = (idMenu, titulo) =>{

    if(menuTabs.length > 0){

        if(menuTabs.includes(idMenu)){
          setActiveTab(idMenu)
        }else{
          setMenuTabs([...menuTabs, idMenu])
          setActiveTab(idMenu)
        }
      }else{
      setMenuTabs([idMenu])
      setActiveTab(idMenu)
    }
    console.log(menuTabs)
  }

  return (
    <div className={className + ' sub-item-menu'} onClick={() => handleClickSubMenuItem(idMenu, titulo)}>{titulo}</div>
  )
}

export default SubItemMenu;