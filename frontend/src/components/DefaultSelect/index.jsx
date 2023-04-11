import React from 'react';
import './style.css'

const DefaultSelect = ({description, value, disabled, className}) => {
  return (
    <div className={"default-select " + className}>
        <label>{description}</label>
        <select value={value} disabled={disabled}>
        <option value="">Selecione uma opção</option>
        <option value="A">ATIVO</option>
        <option value="C">CANCELADO</option>
        <option value="B">BLOQUEADO</option>
        </select>
    </div>
  )
}

export default DefaultSelect;