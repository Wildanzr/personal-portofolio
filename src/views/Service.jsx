import React, { useContext } from 'react'

import { DataContext } from '../context/DataContext'

import SwiperTech from '../components/SwiperCard'
import WheelTech from '../components/WheelTech'
import RecentProj from '../components/RecentProj'
import MyGithub from '../components/MyGithub'

const Service = () => {
  // Use context
  const { allState } = useContext(DataContext)
  const { techs, wheelTech, setWheelTech, projects1, projects2 } = allState
  return (
    <div className="flex flex-col justify-between container px-5 sm:px-20" id='service'>
      <div
        className="flex flex-col"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <h2 className="text-5xl font-medium text-center pb-0 sm:pb-10">Tech Stack</h2>

        <div className="flex flex-col items-center sm:justify-between sm:flex-row">
          <WheelTech techs={wheelTech} />
          <SwiperTech techs={techs} wheelTech={wheelTech} setWheelTech={setWheelTech}/>
        </div>
      </div>

      <div
        className="flex flex-col"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="flex flex-row pt-28 items-center justify-center sm:justify-between">
          <h2 className="text-3xl font-light">Recent Projects</h2>
          <MyGithub style='justify-end hidden sm:flex'/>
        </div>

        <div className="flex flex-col py-10 justify-between sm:flex-row">
          <RecentProj projects={projects1} title="Project 1" />
          <RecentProj projects={projects2} title="Project 2" />
          <MyGithub style='flex justify-end sm:hidden'/>
        </div>
      </div>
    </div>
  )
}

export default Service
