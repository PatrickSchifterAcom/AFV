import React, { useContext, useEffect, useState } from 'react';
import { MenuContext } from '../../contexts/menuContext';

import Tab from '../Tab';

import './style.css';

function Tabs() {

    const { menuTabs } = useContext(MenuContext);
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        async function getListMenus() {
            const itens = await JSON.parse(localStorage.getItem('menus'));
            setMenus(itens)
        }
        getListMenus()
    }, [])


    /*let fullInfoTabs = menus.filter((menu) =>{
        return menu.IdMenu.includes(menuTabs)
    })*/


    return (
        <div className='tabs'>
            {menuTabs.map((item) => {
                const menu = menus.find((menu) => menu.IDMenu === item);
                return (
                    <Tab key={menu.IDMenu} titulo={menu.DescMenu} idMenu = {menu.IDMenu} />
                )})}
        </div>
    )}

export default Tabs