import React from 'react'

import Experience from '../components/Experience'

const About = () => {
  return (
    <div
      className="flex flex-col cotainer py:10 sm:py-20 px-10 duration-300"
      id="about"
    >
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
        <h2 className="text-5xl font-medium text-center">About Me</h2>
        <p className="hidden text-lg font-light text-center py-10 sm:text-xl sm:flex sm:justify-center">
          My full name is Graita Sukma Febriansyah Triwildan Azmi. Woo, your
          name is too long. That is the fact.
          <br />
          I am a student of Information Technology Education at University of
          Brawijaya. My passion about <br />
          tech makes me curious about new technologies. <br />
          Currently, I am freelancer as Full-Stack Developer <br />
          working with scrum and agile methodology.
        </p>
        <p className="text-lg font-light text-center py-10 sm:text-xl sm:hidden">
          My full name is Graita Sukma Febriansyah Triwildan Azmi. Woo, your
          name is too long. That is the fact. <br />I am a student of
          Information Technology Education at University of Brawijaya. My
          passion about tech makes me curious about new technologies. <br />
          Currently, I am freelancer as Full-Stack Developer working with scrum and
          agile methodology.
        </p>
      </div>

      <Experience />
    </div>
  )
}

export default About
