import React from "react";
import './style.css'

function GradeListaCliente({ clientes }) {
  return (
    <table className= 'g-lcliente' >
      <thead>
        <tr style={{ height : "35px"}}>
          <th style={{ width : "10%", borderRadius : "5px 0px 0px 0px"}}>Código ERP</th>
          <th style={{ width : "10%"}}>CNPJ</th>
          <th style={{ width : "10%"}}>Razão</th>
          <th style={{ width : "10%"}}>Fantasia</th>
          <th style={{ width : "10%", borderRadius : "0px 5px 0px 0px"}}>Situação</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((clientes, index) => (
          <tr key={clientes.IDCliente} style={{ backgroundColor: index % 2 === 0 ? "#ffffff":"#E9E8E8"}}>
            <td style={{ width : "10%"}}>{clientes.CodERP}</td>
            <td style={{ width : "10%"}}>{clientes.CPFCNPJ}</td>
            <td style={{ width : "10%"}}>{clientes.Razao}</td>
            <td style={{ width : "10%"}}>{clientes.Fantasia}</td>
            <td style={{ width : "10%"}}>{clientes.Situacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GradeListaCliente;
