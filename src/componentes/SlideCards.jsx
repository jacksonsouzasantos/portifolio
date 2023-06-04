import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import escalada from '../assets/escalada.svg';
import slackline2 from '../assets/slackline2.svg';
import pao1 from '../assets/pao1.svg';
import forneando from '../assets/forneando.svg';
import "../style/SlideCards.css";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function SlideCards() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={escalada} alt="Minha Foto"  width="250" height="250"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pao1} alt="Minha Foto"  width="250" height="250"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slackline2} alt="Minha Foto"   width="250" height="250"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={forneando} alt="Minha Foto"  width="250" height="250" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}