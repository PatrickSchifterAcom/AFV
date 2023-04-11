import React from 'react'
import './style.css'

const ButtonActionOrange = ({className, title, onClick}) => {
  return (
    <button className={'button-action-orange ' + className} onClick={onClick}>{title}</button>
  )
}

export default ButtonActionOrange;