import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

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
    <div className="bglight mx-auto text-[#02091B] font-poppins dark:text-[#D8EAF3] duration-300" id='theme'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <About />
    </div>
  )
}

export default App
