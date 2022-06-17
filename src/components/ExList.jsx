/* eslint-disable react/prop-types */
import React from 'react'

const ExList = ({ year, title, company, desc }) => {
  return (
    <div className="collapse collapse-arrow px-5">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <div className="flex flex-row">
          <p className="text-xl font-semibold text-[#B300A4] pr-10">{year}</p>

          <div className="flex flex-col">
            <p className="text-2xl font-medium">{title}</p>
            <p className="text-base font-light">
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
