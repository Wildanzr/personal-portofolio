/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper'

import CardTech from './CardTech'

// Swiper default style
import 'swiper/css'
import 'swiper/css/effect-cards'

// Swiper custom style
import '../styles/SwiperCard.css'

const SwiperCard = ({ techs }) => {
  const { allState } = useContext(DataContext)
  const { theme } = allState

  useEffect(() => {
    techs.forEach((tech, idx) => {
      if (theme) document.getElementById(`card-slide-${idx}`).style.background = tech.dark
      else document.getElementById(`card-slide-${idx}`).style.background = tech.bg
    })
  }, [theme])

  return (
    <div className="flex mx-20">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        initialSlide={5}
        onSlideChange={(swiper) => {
          console.log(`slide index: ${swiper.realIndex}`)
        }}
        className="mySwiper w-[315px] h-[490px]"
      >
        {techs.map((tech, idx) => {
          return (
            <SwiperSlide key={idx} className='rounded-3xl' id={`card-slide-${idx}`}>
              <CardTech {...tech} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SwiperCard
