import React, { useState, useContext } from "react";

import { ContentContext } from "../../contexts/contentContext"; 
import {obtemDadosCliente} from '../MenusContent/Clientes/obtemDadosCliente'

import './style.css'

function GradeListaCliente({ clientes, setOpenPesquisar }) {

  const [selectedLine, setSelectedLine] = useState(null);

  const {dadosCliente, setDadosCliente, openContent, setOpenContent} = useContext(ContentContext)

  const handleClickGrade = (idCliente) => {
    if (idCliente === selectedLine) {
      setSelectedLine(null)
    } else {
      setSelectedLine(idCliente)
    }
  }

  const handleDoubleClick = (CodERP) =>{
    obtemDadosCliente(CodERP, null, setDadosCliente, setOpenContent);
    setOpenPesquisar(false);
  }

  const handleSituacao = (Situacao) => {
    console.log('Situacao')
  }

  return (
    <table className='g-lcliente' >
      <thead>
        <tr style={{ height: "35px" }}>
          <th style={{ width: "10%", borderRadius: "5px 0px 0px 0px" }}>Código ERP</th>
          <th style={{ width: "10%" }}>CNPJ</th>
          <th style={{ width: "10%" }}>Razão</th>
          <th style={{ width: "10%" }}>Fantasia</th>
          <th style={{ width: "10%", borderRadius: "0px 5px 0px 0px" }}>Situação</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((clientes, index) => (
          <tr
            className={selectedLine === clientes.IDCliente ? 'row-selected' : index % 2 === 0 ? " row-white" : " row-dark"}
            key={clientes.IDCliente}
            onClick={() => handleClickGrade(clientes.IDCliente)}
            onDoubleClick={() => handleDoubleClick(clientes.CodERP)}
          >
            <td style={{ width: "10%" }}>{clientes.CodERP}</td>
            <td style={{ width: "10%" }}>{clientes.CPFCNPJ}</td>
            <td style={{ width: "10%" }}>{clientes.Razao}</td>
            <td style={{ width: "10%" }}>{clientes.Fantasia}</td>
            <td style={{ width: "10%" }}>{clientes.Situacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GradeListaCliente;
