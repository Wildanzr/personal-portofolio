import React, { useState } from 'react'

import SwiperTech from '../components/SwiperCard'
import WheelTech from '../components/WheelTech'

import LogoReact from '../images/react.png'
import LogoNode from '../images/node.png'
import LogoMongo from '../images/mongo.png'
import LogoPostgres from '../images/postgres.png'
import LogoTailwind from '../images/tailwind.png'
import LogoAws from '../images/aws.png'
import LogoDocker from '../images/docker.png'
import LogoGit from '../images/git.png'
import LogoSpring from '../images/spring.png'
import LogoLaravel from '../images/laravel.png'

const Service = () => {
  const [techs] = useState([
    {
      logo: LogoReact,
      title: 'React',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    },
    {
      logo: LogoNode,
      title: 'NodeJS',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    },
    {
      logo: LogoMongo,
      title: 'Mongo',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    },
    {
      logo: LogoPostgres,
      title: 'Postgres',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    },
    {
      logo: LogoAws,
      title: 'AWS',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    },
    {
      logo: LogoGit,
      title: 'Git',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    },
    {
      logo: LogoDocker,
      title: 'Docker',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    },
    {
      logo: LogoTailwind,
      title: 'TailwindCSS',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    },
    {
      logo: LogoSpring,
      title: 'Spring Boot',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    },
    {
      logo: LogoLaravel,
      title: 'Laravel',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    }
  ])

  return (
    <div className="flex flex-col justify-between container px-10">
      <h2 className="text-5xl font-medium text-center pb-20">Service</h2>

      <div className="flex flex-row justify-between">
        <WheelTech techs={techs}/>
        <SwiperTech techs={techs}/>
      </div>
    </div>
  )
}

export default Service
