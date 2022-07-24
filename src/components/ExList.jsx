/* eslint-disable react/prop-types */
import React from 'react'

const ExList = ({ year, title, company, desc }) => {
  return (
    <div className="collapse collapse-arrow px-0 sm:px-5">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <div className="flex flex-row">
          <p className="tetx-lg font-semibold text-[#B300A4] dark:text-[#4242BC] duration-300 pr-10 sm:text-xl">{year}</p>

          <div className="flex flex-col">
            <p className="text-xl font-medium sm:text-2xl">{title}</p>
            <p className="text-sm font-light sm:text-base">
              • {company}
            </p>
          </div>
        </div>
      </div>
      <div className="collapse-content">
        <p className='text-sm font-extralight pl-24'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default ExList
