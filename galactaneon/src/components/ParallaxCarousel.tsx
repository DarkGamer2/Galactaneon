import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import GirlCosplay from "../assets/media/images/Miku-Fashion-Subculture-Dress-Uniform-Outfit-Anime-Cosplay-Costumes.jpg_640x640Q90.jpg_.avif"
import ValorantCosplay from "../assets/media/images/fade-cosplay-v0-cm83kyh26fra1.webp"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper";

const ParallaxCarousel = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        } as React.CSSProperties}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h3 className="dark:text-white text-center">Girl Cosplay</h3>
          </div>
          <div className="subtitle" data-swiper-parallax="-200"></div>
          <div className="text flex" data-swiper-parallax="-100">
            <img src={GirlCosplay} alt="Girl Cosplay" className="carousel-image" />
            <p className="dark:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nisi quisquam culpa distinctio quos voluptatibus maiores doloribus quasi vitae qui! Autem obcaecati aspernatur voluptates maiores magnam! Sint nesciunt vel doloribus?</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <h3 className="dark:text-white text-center">Valorant Cosplay</h3>
          </div>
          <div className="subtitle" data-swiper-parallax="-200"></div>
          <div className="text" data-swiper-parallax="-100">
            <img src={ValorantCosplay} alt="Valorant Cosplay" className="carousel-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ParallaxCarousel;
