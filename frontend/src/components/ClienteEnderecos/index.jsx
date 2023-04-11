import React, { useEffect, useState } from 'react';
import GradeClienteEndereco from '../GradeClienteEndereco';

import './style.css'

const ClienteEnderecos = ({ openEndereco, setOpenEndereco, idCliente }) => {

    const [dadosCEndereco, setDadosCEndereco] = useState([]);
    const [showGrade, setShowGrade] = useState(false);

    const handleCloseClienteEndereco = () => {
        setOpenEndereco(false)
    }

    useEffect(()=>{
        async function obtemClienteEndereco() {
            try {
                const token = localStorage.getItem('token');
    
                await fetch('http://localhost:3030/cliente_endereco', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        idcliente: await idCliente
                    })
                })
                    .then(async response => await response.json())
                    .then((data) => {
                        if (data.sucess) {
                            const dataR = data.data
                            setDadosCEndereco(dataR);
                            setShowGrade(true);
                        } else {
                            setShowGrade(false);
                        }
                    })
            } catch (error) {
                console.error(error);
            }
        }
        if(idCliente !== null){
            obtemClienteEndereco();
        }
    }, [idCliente])


    

    return (
        <div className={openEndereco ? 'c-enderecos-open' : 'c-enderecos-closed'}>
            <header>
                <p>Cliente - Endereços</p>
                <div className='buttons'>
                    <button>_</button>
                    <button onClick={handleCloseClienteEndereco}>x</button>
                </div>
            </header>
            <main>
                <GradeClienteEndereco enderecos={dadosCEndereco} showGrade={showGrade} />
            </main>
        </div>
    )
}

export default ClienteEnderecos;