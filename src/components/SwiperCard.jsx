/* eslint-disable react/prop-types */
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper'

import CardTech from './CardTech'

// Swiper default style
import 'swiper/css'
import 'swiper/css/effect-cards'

// Swiper custom style
import '../styles/SwiperCard.css'

const SwiperCard = ({ techs }) => {
  return (
    <div className="flex mx-20">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        initialSlide={5}
        className="mySwiper w-[315px] h-[490px]"
      >
        {techs.map((tech, idx) => {
          return (
            <SwiperSlide key={idx} className='rounded-3xl'>
              <CardTech {...tech} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SwiperCard
