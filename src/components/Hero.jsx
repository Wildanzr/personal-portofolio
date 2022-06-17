import React from 'react'

import HeroImage from '../images/Hero.png'

const Hero = () => {
  return (
    <div className="flex flex-row container justify-between py-5 px-20">
      <div className="flex flex-col place-content-end">
        <div className="flex flex-col">
          <p className="text-5xl font-medium pb-2">Hello there</p>
          <p className="text-5xl font-light pb-2">
            My name is
            <span className="text-5xl font-medium text-[#4242BC]"> Wildan</span>
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

      <div className="flex justify-end">
        <img src={HeroImage} alt="hero" className="w-9/12 h-9/12" />
      </div>
    </div>
  )
}

export default Hero