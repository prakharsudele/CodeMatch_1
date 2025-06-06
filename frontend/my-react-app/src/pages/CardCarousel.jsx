// src/components/CardCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './CardCarousel.css';

const cards = [
  '/demo.png',
  '/demo1.png',
  '/demo2.png',
  '/demo3.png',
];

const CardCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {cards.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Card ${index + 1}`} className="carousel-card" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
