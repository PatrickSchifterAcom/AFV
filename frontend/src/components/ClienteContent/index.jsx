import React, {useState} from 'react';
import DefaultLabel from '../DefaultLabel';
import DefaultSelect from '../DefaultSelect';
import ButtonActionOrange from '../ButtonActionOrange';
import LabelCNPJ from '../LabelCNPJ';
import ClienteEnderecos from '../ClienteEnderecos';

import Modal from 'react-modal';

import './style.css';

const ClienteContent = ({ className, dadosCliente }) => {

  const [openEndereco, setOpenEndereco] = useState(false);

  const handleClickEnderecos = () =>{
    setOpenEndereco(true)
  }


  return (
    <div className={'cliente-content'}>
      <main className={className}>
        <div className="cliente-content-row cc-r1">
          <DefaultLabel description={'Código ERP'} name={'coderp'} value={dadosCliente.CodERP} disabled={true} className={'cc-coderp'} />
          <LabelCNPJ description={'CPF/CNPJ'} name={'cpfcnpj'} value={dadosCliente.CPFCNPJ} disabled={true} className={'cc-cpfcnpj'} />
          <DefaultLabel description={'Razão Social'} name={'razaosocial'} value={dadosCliente.Razao} disabled={true} className={'cc-razao'} />
          <DefaultSelect description={'Situação'} value={dadosCliente.Situacao} disabled={true} className={'cc-situacao'} />
          <ButtonActionOrange title={'Atualizar'} className={'cc-button-o'} />
        </div>
        <div className="cliente-content-row cc-r2">
          <DefaultLabel description={'Fantasia'} name={'fantasia'} value={dadosCliente.Fantasia} disabled={true} className={'cc-fantasia'} />
          <DefaultLabel description={'Inscrição Estadual'} name={'incricaoestadual'} value={dadosCliente.InscricaoEstadual} disabled={true} className={'cc-inscricaoestadual'} />
        </div>
        <div className="cliente-content-row cc-r3">
          <DefaultLabel description={'Logradouro'} name={'logradouro'} value={dadosCliente.Logradouro} disabled={true} className={'cc-logradouro'} />
          <DefaultLabel description={'Número'} name={'numero'} value={dadosCliente.Numero} disabled={true} className={'cc-numero'} />
          <DefaultLabel description={'CEP'} name={'cep'} value={dadosCliente.CEP} disabled={true} className={'cc-cep'} />
          <DefaultLabel description={'Complemento'} name={'complemento'} value={dadosCliente.Complemento} disabled={true} className={'cc-complemento'} />
        </div>
        <div className="cliente-content-row cc-r4">
          <DefaultLabel description={'Bairro'} name={'bairro'} value={dadosCliente.Bairro} disabled={true} className={'cc-bairro'} />
          <DefaultLabel description={'Cidade'} name={'cidade'} value={dadosCliente.Cidade} disabled={true} className={'cc-cidade'} />
          <DefaultLabel description={'UF'} name={'uf'} value={dadosCliente.UFCidade} disabled={true} className={'cc-uf'} />
          <DefaultLabel description={'Email'} name={'email'} value={dadosCliente.Email} disabled={true} className={'cc-email'} />
        </div>
        <div className="cliente-content-row cc-r5">
          <DefaultLabel description={'Telefone Celular'} name={'telcelular'} value={dadosCliente.TelCelular} disabled={true} className={'cc-telcelular'} />
          <DefaultLabel description={'Telefone Fixo'} name={'telfixo'} value={dadosCliente.TelFixo} disabled={true} className={'cc-telfixo'} />
          <DefaultLabel description={'Data Fundação'} name={'datafundacao'} value={dadosCliente.DataFundacao} disabled={true} className={'cc-datafundacao'} />
        </div>
        <div className="cliente-content-row cc-r6">
          <ButtonActionOrange title={'Dados Fiscais'} className={'cc-button'} />
          <ButtonActionOrange title={'Endereços'} className={'cc-button'} onClick={handleClickEnderecos} />
          <ButtonActionOrange title={'Perfil e Politica'} className={'cc-button'} />
          <ButtonActionOrange title={'Cliente x Vendedores'} className={'cc-button'} />
          <ButtonActionOrange title={'Contatos'} className={'cc-button'} />
        </div>
      </main>
      <ClienteEnderecos openEndereco={openEndereco} setOpenEndereco={setOpenEndereco} idCliente={dadosCliente.IDCliente} />
    </div>
  )
}

export default ClienteContent