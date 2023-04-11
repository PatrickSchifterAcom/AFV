import React, {useContext} from 'react';
import './style.css'
import { MenuContext } from '../../contexts/menuContext';

const HamburguerMenu = () => {

    const {openMenu, setOpenMenu} = useContext(MenuContext);

    const handleMenuHamburguer = () => {
        if(openMenu){
            setOpenMenu(false)
        }else{
            setOpenMenu(true)
        }
    }

  return (
    <div className="hamburguer-menu" onClick={handleMenuHamburguer}>
      <div className="hamburguer-line"></div>
      <div className="hamburguer-line"></div>
      <div className="hamburguer-line"></div>
    </div>
  );
}

export default HamburguerMenu;