/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const WheelTech = ({ techs }) => {
  const { allState } = useContext(DataContext)
  const { theme } = allState

  const mapWheel = () => {
    return (
      <div className="flex relative items-center justify-center w-full h-full">
        <img
          src={techs[0].logo}
          className="flex absolute w-[13%] top-[5%] object-cover"
          id="wheel-1"
        />
        <img
          src={techs[1].logo}
          className="flex absolute w-[13%] top-[15%] right-[15%] object-cover"
          id="wheel-2"
        />
        <img
          src={techs[2].logo}
          className="flex absolute w-[13%] right-[5%] object-cover"
          id="wheel-3"
        />
        <img
          src={techs[3].logo}
          className="flex absolute w-[13%] bottom-[15%] right-[15%] object-cover"
          id="wheel-4"
        />
        <img
          src={techs[4].logo}
          className="flex absolute w-[30%] object-cover"
          id="wheel-5"
        />
        <img
          src={techs[5].logo}
          className="flex absolute w-[13%] bottom-[5%] object-cover"
          id="wheel-6"
        />
        <img
          src={techs[6].logo}
          className="flex absolute w-[13%] bottom-[15%] left-[15%] object-cover"
          id="wheel-7"
        />
        <img
          src={techs[7].logo}
          className="flex absolute w-[13%] left-[5%] object-cover"
          id="wheel-8"
        />
        <img
          src={techs[8].logo}
          className="flex absolute w-[13%] top-[15%] left-[15%] object-cover"
          id="wheel-9"
        />
      </div>
    )
  }
  return (
    <div className="flex mx-20">
      <div className="flex relative w-[315px] h-[490px] items-center">
        <div className="flex absolute bg-[#D8EAF3] w-[350px] h-[350px] rounded-full bottom-[25%] right-[-5%]"></div>
        <div className="flex absolute bg-[#00B3A4] w-[350px] h-[350px] rounded-full left-[42%] bottom-[10%]"></div>
        <div className="flex absolute bg-[#F1CB22] w-[350px] h-[350px] rounded-full top-[30%] right-[-15%]"></div>
        {theme
          ? (
          <div className="flex absolute bg-[#464646] w-[450px] h-[450px] rounded-full">
          {mapWheel()}
        </div>
            )
          : (
          <div className="flex absolute bg-[#FFF] w-[450px] h-[450px] rounded-full">
          {mapWheel()}
        </div>
            )}
      </div>
    </div>
  )
}

export default WheelTech
