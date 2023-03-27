import { Carousel } from "react-responsive-carousel";
import React from "react";
import { Autoplay, Pagination, Navigation, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
  return (
    <>
      <video autoPlay loop muted className="mx-auto h-auto w-[90%]">
        <source src="/testmo.webm" type="video/webm" />
        <source src="/testmo.mp4" type="video/mp4" />
        Sorry, your browser doesn&apos;t support videos.
      </video>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        zoom={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="py-10 px-16">
          <img className="object-cover" src="/test.png" alt="image slide 1" />
        </SwiperSlide>
        <SwiperSlide className="py-10 px-16">
          <img className="object-cover" src="/test.png" alt="image slide 2" />
        </SwiperSlide>
        <SwiperSlide className="py-10 px-16">
          <img className="object-cover" src="/test.png" alt="image slide 3" />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
}

export default Testimonials;
