import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video
            className="w-full h-auto object-cover"
            src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4"
            autoPlay
            muted
            loop
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <p className="text-xl md:text-2xl lg:text-3xl">Slide 2</p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <p className="text-xl md:text-2xl lg:text-3xl">Slide 3</p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <p className="text-xl md:text-2xl lg:text-3xl">Slide 4</p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <p className="text-xl md:text-2xl lg:text-3xl">Slide 5</p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <p className="text-xl md:text-2xl lg:text-3xl">Slide 6</p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <p className="text-xl md:text-2xl lg:text-3xl">Slide 7</p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <p className="text-xl md:text-2xl lg:text-3xl">Slide 8</p>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <p className="text-xl md:text-2xl lg:text-3xl">Slide 9</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
