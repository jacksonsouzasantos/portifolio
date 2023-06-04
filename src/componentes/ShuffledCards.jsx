
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "../style/ShuffledCards.css";
import "swiper/css";
import "swiper/css/effect-cards";

export default function ChuffledCards() {
  return (
    <>
    <div className='container'>
      <div id='cs-container'>
        <Swiper
          id='SwiperShuffled'
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className='shuffledSlide'>
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
      <div className="about-text">
        <h2>Conhecimentos Adquiridos</h2>
        <p>Em cada card tem um pouco das habilidades desenvolvidas<br/> nos cursos e projetos desenvolvidos.</p>
        <p>Habilidades de hards skills e softs skills, <br/> que fazem parte de minha jornada de aprendizado constante.</p>
      </div>
      </div>
    </>
  );
}