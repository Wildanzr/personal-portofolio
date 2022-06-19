/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react'

import LogoReact from '../images/tech/react.png'
import LogoNode from '../images/tech/node.png'
import LogoMongo from '../images/tech/mongo.png'
import LogoPostgres from '../images/tech/postgres.png'
import LogoTailwind from '../images/tech/tailwind.png'
import LogoAws from '../images/tech/aws.png'
import LogoDocker from '../images/tech/docker.png'
import LogoGit from '../images/tech/git.png'
import LogoExpress from '../images/tech/express.png'

import Img1 from '../images/docs/1.jpg'
import Img2 from '../images/docs/2.jpg'
import Img3 from '../images/docs/3.jpg'
import Img4 from '../images/docs/4.jpg'
import Img5 from '../images/docs/5.jpg'
import Img6 from '../images/docs/6.jpg'

export const DataContext = createContext()

export const DataProvider = props => {
  const [techs, setTechs] = useState([
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
      logo: LogoExpress,
      title: 'ExpressJS',
      desc: 'React Fundamentals, state, props, hooks, context api, routing, DevTools. Also using Framework such as Ant Design and Material UI.'
    }
  ])

  const [projects1] = useState([
    {
      title: 'Project 1',
      image: Img1
    },
    {
      title: 'Project 2',
      image: Img2
    },
    {
      title: 'Project 3',
      image: Img3
    }
  ])

  const [projects2] = useState([
    {
      title: 'Project 4',
      image: Img4
    },
    {
      title: 'Project 5',
      image: Img5
    },
    {
      title: 'Project 6',
      image: Img6
    }
  ])

  const allState = {
    techs,
    setTechs,
    projects1,
    projects2
  }

  return (
    <DataContext.Provider value={{ allState }}>
        {props.children}
    </DataContext.Provider>
  )
}
