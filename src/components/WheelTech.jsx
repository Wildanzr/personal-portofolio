/* eslint-disable react/prop-types */
import React from 'react'

const WheelTech = ({ techs }) => {
  return (
    <div className="flex mx-20">
        <div className="flex relative w-[315px] h-[490px] items-center">
            <div className="flex absolute bg-[#D8EAF3] w-[392px] h-[392px] rounded-full bottom-[22%] right-[-15%]"></div>
            <div className="flex absolute bg-[#00B3A4] w-[392px] h-[392px] rounded-full left-[47%] bottom-[10%]"></div>
            <div className="flex absolute bg-[#F1CB22] w-[392px] h-[392px] rounded-full top-[30%] right-[-20%]"></div>
            <div className="flex absolute bg-[#FFFFFF] w-[490px] h-[490px] rounded-full">
                <div className="flex relative items-center justify-center w-full h-full">
                    <img src={techs[0].logo} className='flex absolute w-6/12 object-cover' id='wheel-react'/>
                    <img src={techs[1].logo} className='flex absolute w-[13%] top-[5%] object-cover' id='wheel-node'/>
                    <img src={techs[2].logo} className='flex absolute w-[13%] bottom-[5%] object-cover'id='wheel-mongo'/>
                    <img src={techs[3].logo} className='flex absolute w-[13%] bottom-[15%] right-[15%] object-cover'id='wheel-postrges'/>
                    <img src={techs[4].logo} className='flex absolute w-[13%] right-[5%] object-cover'id='wheel-aws'/>
                    <img src={techs[5].logo} className='flex absolute w-[13%] top-[15%] left-[15%] object-cover'id='wheel-git'/>
                    <img src={techs[6].logo} className='flex absolute w-[13%] left-[5%] object-cover'id='wheel-docker'/>
                    <img src={techs[7].logo} className='flex absolute w-[13%] bottom-[15%] left-[15%] object-cover'id='wheel-tailwind'/>
                    <img src={techs[8].logo} className='flex absolute w-[13%] top-[15%] right-[15%] object-cover'id='wheel-express'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WheelTech
