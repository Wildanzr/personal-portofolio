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
    <div className="flex items-center sm:mx-20">
      <div className="flex relative w-[315px] h-[300px] items-center justify-center sm:justify-start sm:h-[490px]">
        <div className="flex absolute bg-[#D8EAF3] w-32 h-32 rounded-full top-[20%] left-[17%] sm:bottom-[25%] sm:right-[-5%] sm:w-[350px] sm:h-[350px]"></div>
        <div className="flex absolute bg-[#00B3A4] w-32 h-32 rounded-full bottom-[28%] right-[15%] sm:left-[42%] sm:bottom-[10%] sm:w-[350px] sm:h-[350px]"></div>
        <div className="flex absolute bg-[#F1CB22] w-32 h-32 rounded-full bottom-[15%] left-[20%] sm:top-[30%] sm:right-[-15%] sm:w-[350px] sm:h-[350px]"></div>
        {theme
          ? (
          <div className="flex absolute bg-[#464646] w-48 h-48 rounded-full sm:w-[450px] sm:h-[450px]">
          {mapWheel()}
        </div>
            )
          : (
          <div className="flex absolute bg-[#FFF] w-48 h-48 rounded-full sm:w-[450px] sm:h-[450px]">
          {mapWheel()}
        </div>
            )}
      </div>
    </div>
  )
}

export default WheelTech
