import React, { useState, useContext, useRef } from "react";
import { HiUsers, HiUserGroup } from 'react-icons/hi';
import { FaUserTie, FaSyncAlt, FaKey, FaSignOutAlt } from 'react-icons/fa';
import { MdPlaylistAddCheck } from 'react-icons/md';
import { MenuContext } from '../../contexts/menuContext';

import Modal from 'react-modal';

import './style.css'

const PopUpMenuUser = () => {

    Modal.setAppElement('#root');

    const { userMenuOpen, setUserMenuOpen } = useContext(MenuContext);


    const [anim, setAnim] = useState(0);

    const modal = useRef();

    const handleClickMenuItem = (idMenu) => {
        setAnim(idMenu)

        setTimeout(() => setAnim(0), 75)
    }

    function closeModal(event) {
        event.stopPropagation();
        setUserMenuOpen(false);
        console.log(modal.current)
    }

    return (
        <>
            <Modal 
                isOpen={userMenuOpen}
                onRequestClose={closeModal}
                className='pop-up-user-menu-open'
                overlayClassName={'modal-transparent-overlay'}
                ref={modal}
            >
                <div className={anim === 1 ? "click-anim" : "citem-user-menu"} onClick={() => handleClickMenuItem(1)}><HiUsers className="citem-icon" /> <p>Usuários</p></div>
                <div className={anim === 2 ? "click-anim" : "citem-user-menu"} onClick={() => handleClickMenuItem(2)}><HiUserGroup className="citem-icon" /> <p>Grupo de Usuários</p></div>
                <div className="citem-unlike">
                    <div className={anim === 3 ? "click-anim" : "citem-user-menu"} onClick={() => handleClickMenuItem(3)}><FaUserTie className="citem-icon" /> <p>Modo Gerente</p></div>
                </div>
                <div className="citem-unlike">
                    <div className={anim === 4 ? "click-anim" : "citem-user-menu"} onClick={() => handleClickMenuItem(4)}><FaSyncAlt className="citem-icon" /> <p>Recarregar Sistema</p></div>
                    <div className={anim === 5 ? "click-anim" : "citem-user-menu"} onClick={() => handleClickMenuItem(5)}><MdPlaylistAddCheck className="citem-icon" /> <p>Sistema Check</p></div>
                </div>
                <div className={anim === 6 ? "click-anim" : "citem-user-menu"} onClick={() => handleClickMenuItem(6)}><FaKey className="citem-icon" /> <p>Alterar Senha</p></div>
                <div className={anim === 7 ? "click-anim" : "citem-user-menu"} onClick={() => handleClickMenuItem(7)}><FaSignOutAlt className="citem-icon" /> <p>Sair</p></div>
            </Modal>
        </>

    )
}

export default PopUpMenuUser;