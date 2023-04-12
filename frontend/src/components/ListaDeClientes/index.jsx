import React, {useEffect, useState} from 'react';

import GradeListaCliente from '../GradeListaCliente';

import './style.css';

const ListaDeCliente = ({setOpenPesquisar, vPesquisa}) => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {

    async function obtemPesquisaCliente() {
      try {
        const token = localStorage.getItem('token');

        await fetch('http://localhost:3030/pesquisar_cliente', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            pesquisa: await vPesquisa
          })
        })
          .then(async response => await response.json())
          .then((data) => {
            if(data.data.length > 0) {
              const dataR = data.data
              setClientes(dataR)
            }
          })
      }
      catch (error) {
        console.log(error)
      }
    }
    if(vPesquisa !== null){
      obtemPesquisaCliente();
    }

  }, [vPesquisa])

  
  return (
    <div className='container-lclientes'>
        <header>
            <p>Cliente - Endereços</p>
            <div className='buttons'>
                <button>_</button>
                <button onClick={() => setOpenPesquisar(false)}>x</button>
            </div>
        </header>
        <main>
          <GradeListaCliente clientes={clientes} setOpenPesquisar={setOpenPesquisar} />
        </main>
    </div>
  )
}

export default ListaDeCliente;