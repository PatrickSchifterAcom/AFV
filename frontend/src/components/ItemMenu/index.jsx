import React, {useContext} from 'react'
import { MenuContext } from '../../contexts/menuContext';

import './style.css'

const ItemMenu = ({titulo, className, idMenu}) => {

  const {activeMenu, setActiveMenu } = useContext(MenuContext)

  const handleClickMenu = () => {
    if(activeMenu.includes(idMenu)){
      const newActiveMenu = activeMenu.filter((item) => item !== idMenu);
      setActiveMenu(newActiveMenu)
    }else{
      setActiveMenu([...activeMenu, idMenu]);
    }
  }

  return (
    <div onClick={handleClickMenu} className={className + ' item-menu'}>{titulo}</div>
  )
}

export default ItemMenu;