import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import escalada from '../assets/escalada.jpg';
import slackline2 from '../assets/slackline2.jpg';
import pao1 from '../assets/pao1.jpg';
import pao2 from '../assets/pao2.jpg';
import "../style/FlipCard.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function FlipCard() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
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
          <img src={escalada} alt="Minha Foto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pao1} alt="Minha Foto" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slackline2} alt="Minha Foto" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide> */}
        <SwiperSlide>
        <img src={pao2} alt="Minha Foto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        {/* <SwiperSlide>
        <img src={kombucha1} alt="Minha Foto" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
