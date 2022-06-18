import React from 'react'

import Socials from '../components/Socials'

const Contacts = () => {
  return (
    <div className="flex flex-col py-20 px-20 justify-center">
      <h2 className="text-5xl font-medium text-center">Contacts</h2>

      <div className="flex flex-row justify-around">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-xl font-light opacity-60">My Phone Number</p>
            <span className="text-3xl font-semibold underline py-2">
              +62 85736822725
            </span>

            <p className="text-xl font-light opacity-60 pt-10">My e-mail</p>
            <span className="text-3xl font-semibold underline py-2">
              graita.sukma@gmail.com
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <p className="text-xl font-light opacity-60 pb-5">My Social Media</p>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
