import React from 'react'

import Socials from '../components/Socials'

const Contacts = () => {
  return (
    <div
      className="flex container flex-col pt-5 px-20 justify-center"
      id='contacts'
      data-aos="fade-up"
      data-aos-delay="0"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <h2 className="text-5xl font-medium text-center">Contacts</h2>

      <div className="flex flex-col py-10 justify-around sm:flex-row">
        <div className="flex flex-col">
          <div className="flex flex-col text-center sm:text-start">
            <p className="text-xl font-light opacity-60">My Phone Number</p>
            <a
              href="https://wa.me/+625736822725"
              rel="noreferrer"
              target="_blank"
              className="text-xl font-semibold underline py-2 hover:text-[#4242BC] duration-300 dark:text-[#D8EAF3] dark:hover:text-[#B300A4]"
            >
              +62 85736822725
            </a>

            <p className="text-xl font-light opacity-60 pt-10">My e-mail</p>
            <a
              href="mailto:graita.sukma@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="text-xl font-semibold underline py-2 hover:text-[#4242BC] duration-300 dark:text-[#D8EAF3] dark:hover:text-[#B300A4]"
            >
              graita.sukma@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col py-10 sm:py-0">
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
