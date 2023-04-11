import React from "react";
import './style.css'

function GradeClienteEndereco({ enderecos, showGrade }) {
  return (
    <table className={showGrade ? 'grade-c-endereco-open':'grade-c-endereco-closed'} >
      <thead>
        <tr style={{ height : "35px"}}>
          <th style={{ width : "10%", borderRadius : "5px 0px 0px 0px"}}>Tipo de Endereço</th>
          <th style={{ width : "10%"}}>Logradouro</th>
          <th style={{ width : "10%"}}>CEP</th>
          <th style={{ width : "10%"}}>Número</th>
          <th style={{ width : "10%"}}>Bairro</th>
          <th style={{ width : "10%", borderRadius : "0px 5px 0px 0px"}}>Complemento</th>
        </tr>
      </thead>
      <tbody>
        {enderecos.map((endereco, index) => (
          <tr key={endereco.IDEndereco} style={{ backgroundColor: index % 2 === 0 ? "#ffffff":"#E9E8E8"}}>
            <td style={{ width : "10%"}}>{endereco.TipoEndereco === 'F'? 'Faturamento': ''}</td>
            <td style={{ width : "10%"}}>{endereco.Logradouro}</td>
            <td style={{ width : "10%"}}>{endereco.CEP}</td>
            <td style={{ width : "10%"}}>{endereco.Numero}</td>
            <td style={{ width : "10%"}}>{endereco.Bairro}</td>
            <td style={{ width : "10%"}}>{endereco.Complemento}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GradeClienteEndereco;
