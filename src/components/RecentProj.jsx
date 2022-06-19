/* eslint-disable react/prop-types */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-creative'

const RecentProj = ({ projects, title }) => {
  return (
    <div className="flex flex-col">
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }}
        modules={[EffectCreative]}
        className="mySwiper3 w-[500px] h-96"
      >
        {projects.map((project, idx) => {
          return (
            <SwiperSlide key={idx}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </SwiperSlide>
          )
        })}
      </Swiper>

      <p className='py-4 text-xl font-medium text-center'>{title}</p>
    </div>
  )
}

export default RecentProj
