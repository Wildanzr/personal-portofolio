import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-cards'

import '../styles/Swiper.css'

const CardTech = () => {
  return (
    <div className="flex">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className='text-black text-base font-light'>Slide 1</SwiperSlide>
        <SwiperSlide className='text-black text-base font-light'>Slide 2</SwiperSlide>
        <SwiperSlide className='text-black text-base font-light'>Slide 3</SwiperSlide>
        <SwiperSlide className='text-black text-base font-light'>Slide 4</SwiperSlide>
        <SwiperSlide className='text-black text-base font-light'>Slide 5</SwiperSlide>
        <SwiperSlide className='text-black text-base font-light'>Slide 6</SwiperSlide>
        <SwiperSlide className='text-black text-base font-light'>Slide 7</SwiperSlide>
        <SwiperSlide className='text-black text-base font-light'>Slide 8</SwiperSlide>
        <SwiperSlide className='text-black text-base font-light'>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CardTech
