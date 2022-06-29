/* eslint-disable react/prop-types */
import React from 'react'

import DarkSwitcher from '../components/DarkSwitcher'

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex flex-row container py-5 sm:py-10 px-5 justify-between duration-300">
      <div className="flex flex-row items-center">
        <a href="/" className="text-4xl font-medium tracking-wider">
          Wildan
        </a>
        <DarkSwitcher theme={theme} setTheme={setTheme} show={false} />
      </div>

      <div className="flex flex-row-reverse items-center justify-between sm:hidden">
        <div className="dropdown dropdown-end pl-2">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-h-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 px-2 w-28 shadow bg-base-100 rounded-box text-[#D8EAF3]"
          >
            <li>
              <a
                data-easing="easeInOutQuad"
                href="#home"
                className="text-sm font-normal tracking-wider px-5 hover:font-semibold duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                data-easing="easeInOutQuad"
                href="#about"
                className="text-sm font-normal tracking-wider px-5 hover:font-semibold duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                data-easing="easeInOutQuad"
                href="#service"
                className="text-sm font-normal tracking-wider px-5 hover:font-semibold duration-200"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                data-easing="easeInOutQuad"
                href="#contacts"
                className="text-sm font-normal tracking-wider px-5 hover:font-semibold duration-200"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <DarkSwitcher theme={theme} setTheme={setTheme} show={true} />
      </div>

      <div className="hidden items-center sm:flex">
        <a
          data-easing="easeInOutQuad"
          href="#home"
          className="text-lg font-normal tracking-wider px-5 hover:font-semibold duration-200"
        >
          Home
        </a>
        <a
          data-easing="easeInOutQuad"
          href="#about"
          className="text-lg font-normal tracking-wider px-5 hover:font-semibold duration-200"
        >
          About Me
        </a>
        <a
          data-easing="easeInOutQuad"
          href="#service"
          className="text-lg font-normal tracking-wider px-5 hover:font-semibold duration-200"
        >
          Tech Stack
        </a>
        <a
          data-easing="easeInOutQuad"
          href="#contacts"
          className="text-lg font-normal tracking-wider px-5 hover:font-semibold duration-200"
        >
          Contacts
        </a>
      </div>
    </div>
  )
}

export default Navbar
