import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { dadosClientei } from './initObjs';

import ButtonActionBlue from '../../ButtonActionBlue';
import Divisor from '../../Divisor';
import ClienteContent from '../../ClienteContent';
import ListaDeCliente from '../../ListaDeClientes';

import './style.css'

const Clientes = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState('');
  const [codERP, setCodERP] = useState('');
  const [cpfCNPJ, setCPFCNPJ] = useState('');
  const [pesquisar, setPesquisar] = useState('');
  const [openContent, setOpenContent] = useState(false);
  const [dadosCliente, setDadosCliente] = useState(dadosClientei);
  const [openPesquisar, setOpenPesquisar] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function removeNonNumeric(str) {
    return str.replace(/[^0-9]/g, '');
  }

  const handleChangeCodERP = (event) => {
    const inputValue = event.target.value;
    const numericValue = removeNonNumeric(inputValue);
    setCodERP(numericValue);
  };

  const handleChangeCpfCnpj = (event) => {
    const inputValue = event.target.value;
    const numericValue = removeNonNumeric(inputValue);
    setCPFCNPJ(numericValue);
  };

  const handleChangePesquisar = (event) => {
    setPesquisar(event.target.value)
  };

  const handleClickButtonLimpar = () => {
    setOpenContent(false);
    setCodERP('');
  }

  const handleBlurCodERP = () => {
    obtemDadosCliente(codERP, cpfCNPJ);
  }

  const handleBlurPesquisar = () => {
    pesquisar !== '' ? setOpenPesquisar(true) : setOpenPesquisar(false);
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    obtemDadosCliente(codERP, cpfCNPJ);
    event.target.blur();
  }
}

async function obtemDadosCliente(codERP, cpfCNPJ) {
  try {
    const token = localStorage.getItem('token');

    if ((codERP !== null && codERP !== undefined) || (cpfCNPJ !== null && cpfCNPJ !== undefined)) {

      fetch('http://localhost:3030/cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          coderp: codERP,
          cpfcnpj: cpfCNPJ
        })
      })
        .then(response => response.json())
        .then((data) => {
          if (data.sucess) {
            const dataR = data.data[0]
            setDadosCliente(dataR);
            setOpenContent(true);
          } else {
            setAlert(data.info);
            openModal();
          }
        })
    }
  } catch (error) {
    console.error(error);
  }
}

return (
  <div className='cliente-container'>
    <section className="cliente-inputs">
      <div className="cliente-input cliente-input-coderp">
        <label htmlFor="coderp">Código ERP</label>
        <input
          type="text"
          id="coderp"
          name="coderp"
          value={codERP}
          onBlur={handleBlurCodERP}
          onChange={handleChangeCodERP}
          onKeyDown={handleKeyDown}
          inputMode="numeric"
        />
      </div>
      <div className="cliente-input cliente-input-cpfcnpj">
        <label htmlFor="cpfcnpj">CPF/CNPJ</label>
        <input
          type="text"
          id="cpfcnpj"
          name="cpfcnpj"
          value={cpfCNPJ}
          onChange={handleChangeCpfCnpj}
          inputMode="numeric"
        />
      </div>

      <div className="cliente-input cliente-input-pesquisar">
        <label htmlFor="pesquisar">Pesquisar</label>
        <input
          type="text"
          id="pesquisar"
          name="pesquisar"
          value={pesquisar}
          onChange={handleChangePesquisar}
          onBlur={handleBlurPesquisar}
        />
      </div>

      <ButtonActionBlue
        aditionalClass={'cliente-botao-limpar'}
        onClick={handleClickButtonLimpar}
        title={'Limpar'}
      />
    </section>
    <Divisor />
    <ClienteContent
      className={openContent ? 'cliente-content-open' : 'cliente-content-closed'}
      dadosCliente={dadosCliente}
    />
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className='cliente-modal'
      overlayClassName="cliente-overlay"
    >
      <AiOutlineExclamationCircle id='cliente-icon-alert' />
      <h2>Cliente</h2>
      <p>{alert}</p>
      <button onClick={closeModal}>Fechar</button>
    </Modal>
    {openPesquisar ? <ListaDeCliente setOpenPesquisar={setOpenPesquisar} vPesquisa={pesquisar} /> : <></>}
  </div>
)
}

export default Clientes;