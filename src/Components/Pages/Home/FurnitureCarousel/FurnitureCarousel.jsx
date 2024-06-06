import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import img1 from '../../../../assets/furniture/Design/img-1.jpg'
import img2 from '../../../../assets/furniture/Design/img-2.jpg'
import img3 from '../../../../assets/furniture/Design/img-3.jpg'
import img4 from '../../../../assets/furniture/Design/img-4.jpg'
import img5 from '../../../../assets/furniture/Design/img-5.jpg'
import img6 from '../../../../assets/furniture/Design/img-6.png'
import img7 from '../../../../assets/furniture/Design/img-7.png'
import img8 from '../../../../assets/furniture/Design/img-8.png'
import img9 from '../../../../assets/furniture/Design/img-9.jpg'

export default function FurnitureCarousel() {
  return (
    <>
    <header className="text-center mt-16">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Beautiful rooms 
inspiration</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-500">
      Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you
      </p>
    </header>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
