import React from 'react'

import Heart from '../images/heart.png'

const Footer = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-5 justify-center">
        <p className='text xl font-light'>© 2022. Made with
          <img src={Heart} alt="heart" className="inline-block w-5 h-5 mx-2" />
         by Wildan.</p>
    </div>
  )
}

export default Footer
