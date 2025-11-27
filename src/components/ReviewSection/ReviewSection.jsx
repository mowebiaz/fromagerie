'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { ReviewCard } from '../ReviewCard/ReviewCard'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import './ReviewSection.scss'

export const ReviewSection = ({ items }) => {
  return (
    <section id="reviews">
      <div className="container">
        <h2>Ils parlent de nous</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <ReviewCard review={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
