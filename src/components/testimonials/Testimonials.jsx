import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/me-about.jpg'
import AVTR2 from '../../assets/me-about.jpg'
import AVTR3 from '../../assets/me-about.jpg'
import AVTR4 from '../../assets/me-about.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'David Gilmour',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit minus asperiores debitis deleniti maxime excepturi. Tempora suscipit quasi nemo beatae! Iure libero dolore a aliquam tenetur facere, consectetur delectus!'
  },
  {
    avatar: AVTR2,
    name: 'Jimmy Paige',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit minus asperiores debitis deleniti maxime excepturi. Tempora suscipit quasi nemo beatae! Iure libero dolore a aliquam tenetur facere, consectetur delectus!'
  },
  {
    avatar: AVTR3,
    name: 'Mark Knopfler',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit minus asperiores debitis deleniti maxime excepturi. Tempora suscipit quasi nemo beatae! Iure libero dolore a aliquam tenetur facere, consectetur delectus!'
  },
  {
    avatar: AVTR4,
    name: 'Joe Walsh',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit minus asperiores debitis deleniti maxime excepturi. Tempora suscipit quasi nemo beatae! Iure libero dolore a aliquam tenetur facere, consectetur delectus!'
  },
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // Import Swiper styles
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}></img>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='clienet__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials