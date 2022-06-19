import React, { useState } from 'react'

import SwiperTech from '../components/SwiperCard'
import WheelTech from '../components/WheelTech'
import RecentProj from '../components/RecentProj'

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

import Img1 from '../images/docs/1.jpg'
import Img2 from '../images/docs/2.jpg'
import Img3 from '../images/docs/3.jpg'
import Img4 from '../images/docs/4.jpg'
import Img5 from '../images/docs/5.jpg'
import Img6 from '../images/docs/6.jpg'

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
