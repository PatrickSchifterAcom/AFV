import React, {useState, useEffect} from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../auth';
import { MenuContext } from '../../contexts/menuContext';

import ItemMenu from '../ItemMenu';
import SubItemMenu from '../SubItemMenu';

import './style.css'

const Sidebar = () => {

    const [menuItems, setMenuItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredMenu, setFilteredMenu] = useState([]);

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const { activeMenu, openMenu }                = useContext(MenuContext);

    const handleSearch = (event) => {
      const value = event.target.value;
      setSearchValue(value);
      const filteredItens = menuItems.filter((item)=>
        item.DescMenu.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredMenu(filteredItens);
    };

    const menuToRender = searchValue ? filteredMenu : menuItems;

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const token     = localStorage.getItem('token');
        const idUsuario = localStorage.getItem('idusuario');        
        
        const response = await fetch('http://localhost:3030/menu', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`
            },
          body: JSON.stringify({
             idusuario: idUsuario,
            })
          });
        const data = await response.json();

        setMenuItems(data.data[0]);

        setIsAuthenticated(true);

        await localStorage.setItem('menus', JSON.stringify(data.data[0]))
      } catch (error) {
        console.error(error);
      }
    }
    fetchMenuItems();
  }, []);
 
  return (
      <div className={openMenu ? 'sidebar-open' + ' container-sidebar' : 'sidebar-closed' + ' container-sidebar'}>
        <div className="sidebar-img">
          <img src="../assets/logo-afv-sidebar.png" alt="logo-afv" />
        </div>
        <input  
          type="search" 
          name="menu-search" 
          placeholder='Buscar no menu'
          onChange={handleSearch}
        />
        <div>
          {searchValue ? filteredMenu.map((item) => {
            if(item.IDMenuPai > 0){
                return <SubItemMenu 
                          key={item.IDMenu} 
                          idMenu = {item.IDMenu}
                          className={'item-menu-open'} 
                          titulo={item.DescMenu} 
                        />;}})
          
          :menuItems.map((item) => {
            if(item.IDMenuPai > 0){
                return <SubItemMenu 
                          key={item.IDMenu} 
                          idMenu = {item.IDMenu}
                          className={Array.isArray(activeMenu) && activeMenu.includes(item.IDMenuPai) ? 'item-menu-open' : 'item-menu-closed'} 
                          titulo={item.DescMenu} 
                        />; // 
            }
            return <ItemMenu 
                      key={item.IDMenu} 
                      titulo={item.DescMenu} 
                      idMenu = {item.IDMenu} 
                    />
          })}

        </div>
      </div>
    
  )
}

export default Sidebar