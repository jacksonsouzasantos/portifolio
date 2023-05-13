import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import escalada from '../assets/escalada.svg';
import slackline2 from '../assets/slackline2.svg';
import pao1 from '../assets/pao1.svg';
import pao2 from '../assets/pao2.svg';
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
        slidesPerView={"2"}
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
        <img src={} alt="Minha Foto" />
        </SwiperSlide> */}
        <SwiperSlide>
        <img src={pao2} alt="Minha Foto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        {/* <SwiperSlide>
        <img src={} alt="Minha Foto" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
