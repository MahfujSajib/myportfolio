import React from 'react';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <section className='testimonials' id="testimonial">
          <h4 style={{textAlign:"center"}}>Review From clients</h4> 
          <h2 style={{textAlign:"center",color:"aqua"}}>Testimonial</h2> 
          <Swiper className='testimonial'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='slider'>
        <h4>sajib is So hardWorking</h4>
        <h5>Kathie Deng</h5>
      </SwiperSlide>
      <SwiperSlide className='slider'>
        <h4>Sajib is Passionate to his Work</h4>
        <h5>Dave</h5>
      </SwiperSlide>
      <SwiperSlide className='slider'>
        <h4>He Know his Work very well</h4>
        <h5>Fufuzai</h5>
      </SwiperSlide>
      <SwiperSlide className='slider'>
        <h4>He did a great job for my company</h4>
        <h5>David</h5>
      </SwiperSlide>
    </Swiper> 
        </section>
    );
};

export default Testimonial;