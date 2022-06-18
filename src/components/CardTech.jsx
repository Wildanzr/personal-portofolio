/* eslint-disable react/prop-types */
import React from 'react'

const CardTech = ({ logo, title, desc }) => {
  return (
    <div className="flex flex-col h-full text-black justify-center">
      <div className="flex flex-col items-center my-5">
        <img src={logo} alt={title} className="w-8/12 h-auto" />
        <p className="text-2xl font-medium">{title}</p>
      </div>

      <div className="flex flex-col">
        <p className="text-xl font-light text-center px-5">{desc}</p>
      </div>
    </div>
  )
}

export default CardTech
