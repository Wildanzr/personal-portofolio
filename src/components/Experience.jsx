import React, { useState } from 'react'

import ExList from './ExList'

const Experience = () => {
  const [experiences1] = useState([
    {
      year: 2021,
      title: 'DTS Scholarship Awardee',
      company: 'University of Brawijaya',
      desc: 'Got an scholarship from Ministry of Communication and Information Technology of the Republic of Indonesia to learn Java Programming and completed Oracle certification'
    },
    {
      year: 2022,
      title: 'IT Developer Intern',
      company: 'Bank Negara Indonesia, Jakarta',
      desc: 'Got an scholarship from Ministry of Communication and Information Technology of the Republic of Indonesia to learn Java Programming and completed Oracle certification'
    }
  ])

  const [experiences2] = useState([
    {
      year: 2020,
      title: 'Basic Programming Assistant',
      company: 'FILKOM, University of Brawijaya',
      desc: 'Got an scholarship from Ministry of Communication and Information Technology of the Republic of Indonesia to learn Java Programming and completed Oracle certification'
    },
    {
      year: 2021,
      title: 'Object Oriented Assistant',
      company: 'FILKOM, University of Brawijaya',
      desc: 'Got an scholarship from Ministry of Communication and Information Technology of the Republic of Indonesia to learn Java Programming and completed Oracle certification'
    }
  ])

  return (
    <div className="flex flex-col container px-20 py-10">
        <h2 className='text-3xl font-light'>Experience</h2>

        <div className="flex flex-row justify-end py-4">
            {experiences2.map((ex, index) => (
                <ExList key={index} year={ex.year} title={ex.title} company={ex.company} desc={ex.desc}/>
            ))}
        </div>

        <div className="flex flex-row justify-end py-4">
            {experiences1.map((ex, index) => (
                <ExList key={index} year={ex.year} title={ex.title} company={ex.company} desc={ex.desc}/>
            ))}
        </div>
    </div>
  )
}

export default Experience
