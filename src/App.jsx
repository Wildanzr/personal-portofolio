import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'

import './styles/Custom.css'

function App () {
  return (
    <div className="bglight mx-auto h-screen font-poppins text-[#02091B]">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
