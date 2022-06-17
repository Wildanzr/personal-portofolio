import React from 'react'

import Experience from './Experience'

const About = () => {
  return (
    <div className="flex flex-col cotainer py-20 px-10">
      <div className="flex flex-col">
      <h2 className="text-5xl font-medium text-center">About Me</h2>
      <p className='text-xl font-light text-center py-10'>
        My full name is Graita Sukma Febriansyah Triwildan Azmi. Woo, your name is too long. That is the fact.<br />
        I am a student of Information Technology Education at Brawijaya University. My passion about <br />
        tech makes me curious about new technologies. <br />
        Currently, I am freelance as Full-Stack Developer <br />
        working with scrum agile methodology.
      </p>
      </div>

      <Experience />
    </div>
  )
}

export default About
