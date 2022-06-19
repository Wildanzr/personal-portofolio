import React, { useEffect, useContext } from 'react'
import { DataContext } from './context/DataContext'

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

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

  })

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
        <Service />
        <Contacts />
        <Footer />
    </div>
  )
}

export default App
