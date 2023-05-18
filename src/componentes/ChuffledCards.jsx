import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "../style/ShuffledCards.css";
import "swiper/css";
import "swiper/css/effect-cards";

export default function ChuffledCards() {
  return (
    <>
      <div id='card1'>
      <h2 id='h2Card'>Hards Skills</h2>
        <Swiper 
          id='SwiperShuffled'
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className='shuffledSlide'>
            <h5>Slide 1
              Aprendizados com React</h5>
          </SwiperSlide>
          <SwiperSlide className='shuffledSlide' >Slide 2</SwiperSlide>
          <SwiperSlide className='shuffledSlide' >Slide 3</SwiperSlide>
          <SwiperSlide className='shuffledSlide' >Slide 4</SwiperSlide>
          <SwiperSlide className='shuffledSlide' >Slide 5</SwiperSlide>
          <SwiperSlide className='shuffledSlide' >Slide 6</SwiperSlide>
          <SwiperSlide className='shuffledSlide' >Slide 7</SwiperSlide>
          <SwiperSlide className='shuffledSlide' >Slide 8</SwiperSlide>
          <SwiperSlide className='shuffledSlide' >Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div id='cards2'>
      <h2>Soft Skills</h2>
        <Swiper
        id='SwiperShuffled'
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className='shuffledSlide' id='colorCard'>
            <h5>Slide 1
              Aprendizados com React</h5>
          </SwiperSlide>
          <SwiperSlide className='shuffledSlide'>Slide 2</SwiperSlide>
          <SwiperSlide className='shuffledSlide'>Slide 3</SwiperSlide>
          <SwiperSlide className='shuffledSlide'>Slide 4</SwiperSlide>
          <SwiperSlide className='shuffledSlide'>Slide 5</SwiperSlide>
          <SwiperSlide className='shuffledSlide'>Slide 6</SwiperSlide>
          <SwiperSlide className='shuffledSlide'>Slide 7</SwiperSlide>
          <SwiperSlide className='shuffledSlide'>Slide 8</SwiperSlide>
          <SwiperSlide className='shuffledSlide'>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}