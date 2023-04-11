import React from 'react';
import './style.css'

const ListaDeCliente = ({setOpenPesquisar}) => {
  console.log('lista de client')
  return (
    <div className='container-lclientes'>
        <header>
            <p>Cliente - Endereços</p>
            <div className='buttons'>
                <button>_</button>
                <button onClick={() => setOpenPesquisar(false)}>x</button>
            </div>
        </header>
    </div>
  )
}

export default ListaDeCliente;