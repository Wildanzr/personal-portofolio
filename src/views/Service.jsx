import React, { useContext } from 'react'

import { DataContext } from '../context/DataContext'

import SwiperTech from '../components/SwiperCard'
import WheelTech from '../components/WheelTech'
import RecentProj from '../components/RecentProj'

const Service = () => {
  // Use context
  const { allState } = useContext(DataContext)
  const { techs, projects1, projects2 } = allState
  return (
    <div className="flex flex-col justify-between container px-20">
      <h2 className="text-5xl font-medium text-center pb-20">Service</h2>

      <div className="flex flex-row justify-between">
        <WheelTech techs={techs} />
        <SwiperTech techs={techs} />
      </div>

      <div className="flex flex-row pt-28 items-center justify-between">
        <h2 className="text-3xl font-light">Recent Projects</h2>
        <div className="flex items-center">
          <a
            href="https://github.com/Wildanzr"
            rel="noreferrer"
            target="_blank"
            className="text-sm font-medium duration-100 hover:font-bold"
          >
            view my github
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-row py-10 justify-between">
        <RecentProj projects={projects1} title="Project 1" />
        <RecentProj projects={projects2} title="Project 2" />
      </div>
    </div>
  )
}

export default Service
