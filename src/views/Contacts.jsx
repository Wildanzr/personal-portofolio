import React from 'react'

import Socials from '../components/Socials'

const Contacts = () => {
  return (
    <div className="flex container flex-col pt-5 px-20 justify-center">
      <h2 className="text-5xl font-medium text-center">Contacts</h2>

      <div className="flex flex-row py-10 justify-around">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-xl font-light opacity-60">My Phone Number</p>
            <a
              href="https://wa.me/+625736822725"
              rel="noreferrer"
              target="_blank"
              className="text-3xl font-semibold underline py-2"
            >
              +62 85736822725
            </a>

            <p className="text-xl font-light opacity-60 pt-10">My e-mail</p>
            <a
              href="mailto:graita.sukma@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="text-3xl font-semibold underline py-2"
            >
              graita.sukma@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <p className="text-xl font-light opacity-60 pb-5">
              My Social Media
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
