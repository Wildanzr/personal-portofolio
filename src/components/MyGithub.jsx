/* eslint-disable react/prop-types */
import React from 'react'

const MyGithub = ({ style }) => {
  return (
    <div className={style}>
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
  )
}

export default MyGithub
