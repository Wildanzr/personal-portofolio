import React, { useEffect, useContext } from 'react'
import { DataContext } from './context/DataContext'
import SmoothScroll from 'smooth-scroll'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './views/Navbar'
import Hero from './views/Hero'
import About from './views/About'
import Service from './views/Service'
import Contacts from './views/Contacts'
import Footer from './views/Footer'

import './styles/Custom.css'

const App = () => {
  const { allState } = useContext(DataContext)
  const { theme, setTheme } = allState

  // eslint-disable-next-line no-unused-vars
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  })

  AOS.init({})

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
      document.getElementById('theme').classList.add('bgdark')
      document.getElementById('theme').classList.remove('bglight')
    } else {
      document.documentElement.classList.remove('dark')
      document.getElementById('theme').classList.add('bglight')
      document.getElementById('theme').classList.remove('bgdark')
    }
  })

  return (
    <div
      className="bglight mx-auto h-full text-[#02091B] font-poppins dark:text-[#D8EAF3] duration-300"
      id="theme"
    >
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <About />
        {/* <Service />
        <Contacts />
        <Footer /> */}
    </div>
  )
}

export default App
