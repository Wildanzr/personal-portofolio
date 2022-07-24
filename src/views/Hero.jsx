import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

import Hero1 from '../images/me.png'
import Hero2 from '../images/me2.png'
import WaveGif from '../images/wave.png'

const Hero = () => {
  const { allState } = useContext(DataContext)
  const { theme } = allState

  return (
    <div className="flex flex-col-reverse justify-between py-14 px-5 duration-300 sm:flex-row container sm:px-20" id='home'>
      <div className="flex flex-col place-content-end">
        <div className="flex flex-col">
          <div className="flex flex-row items-end">
            <p className="text-4xl font-medium pb-2 sm:text-5xl">Hello there</p>
            <img src={WaveGif} className="pl-2 w-20" />
          </div>
          <p className="text-4xl font-light pb-2 sm:text-5xl">
            My name is
            <span className="text-4xl font-medium text-[#4242BC] dark:text-[#B300A4] duration-300 sm:text-5xl"> Wildan</span>
          </p>
          <p className="text-base font-extralight">
            A person who always motivated to learn new thing
          </p>
        </div>

        <div className="flex justify-center py-10">
            <button className='px-10 py-2 btndownload rounded-full font-semibold text-white text-xl'>
                Download CV
            </button>
        </div>
      </div>

      <div className="flex justify-center">
        {
          theme ? <img src={Hero1} alt="hero" className="w-10/12 sm:w-full h-full duration-300" /> : <img src={Hero2} alt="hero" className="w-10/12 sm:w-full h-full duration-300" />
        }
      </div>
    </div>
  )
}

export default Hero
