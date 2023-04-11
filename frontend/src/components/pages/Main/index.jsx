import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../../auth';
import { MenuProvider } from '../../../contexts/menuContext'

import Sidebar from '../../Sidebar';
import Header from '../../Header';
import Content from '../../Content'

import './style.css';


const Main = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <>
      {isAuthenticated ? (
        <MenuProvider>
          <div className='main-container'>
              <Sidebar />
            <div className='main-container-right'>
              <Header />
              <Content />
            </div>
          </div>
        </MenuProvider>
      ) : (
        <div>Sua sessão expirou.</div>
      )}
    </>
  )
}

export default Main