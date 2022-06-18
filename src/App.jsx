import React, { useState, useEffect } from 'react'

import Navbar from './views/Navbar'
import Hero from './views/Hero'
import About from './views/About'
import Service from './views/Service'
import Contacts from './views/Contacts'
import Footer from './views/Footer'

import './styles/Custom.css'

const App = () => {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
      document.getElementById('theme').classList.add('bgdark')
      document.getElementById('theme').classList.remove('bglight')
      console.log('Theme: Dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.getElementById('theme').classList.add('bglight')
      document.getElementById('theme').classList.remove('bgdark')
      console.log('Theme: Light')
    }
  })

  return (
    <div className="bglight mx-auto h-full text-[#02091B] font-poppins dark:text-[#D8EAF3] duration-300" id='theme'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <About />
      <Service />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
