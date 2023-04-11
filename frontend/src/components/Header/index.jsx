import React, {useContext, useEffect} from 'react';
import HamburguerMenu from '../MenuHamburguer';
import UserMenuIcon from '../UserMenuIcon';
import { FaChevronDown } from 'react-icons/fa';

import './style.css'

const Header = () => {

  const connectionID = localStorage.getItem('connetion_id')

  return (
    <header>
      <div className="header-cleft">
        <HamburguerMenu />
        <p id="header-session">Sessão: {connectionID}</p>
      </div>
      <div className='header-cright'>
        <UserMenuIcon />
        <FaChevronDown id='header-arrow'/>
      </div>
      
    </header>
  )
}

export default Header;