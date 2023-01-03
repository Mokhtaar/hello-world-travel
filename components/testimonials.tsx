import { Carousel } from "react-responsive-carousel";
import React from "react";
import { Autoplay, Pagination, Navigation, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
  return (
    <>
      <Swiper
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
      </Swiper>
      {/* <div id="testo" className="carousel slide" data-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{padding: "7% 15%"}}>
            <h2 className="testimonial-text">
              I no longer have to sniff other dogs for love. I've found the
              hottest Corgi on TinDog. Woof.
            </h2>
            <img className="dog" src="images/dog-img.jpg" alt="dog-profile" />
            <em>Pebbles, New York</em>
          </div>
          <div className="carousel-item" style={{padding: "7% 15%"}}>
            <h2 className="testimonial-text">
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </h2>
            <img className="dog" src="/bgI.png" alt="lady-profile" />
            <em>Beverly, Illinois</em>
          </div>
        </div>
        <a
          className="carousel-control-prev hi"
          href="#testo"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next hi"
          href="#testo"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div> */}
    </>
  );
}

export default Testimonials;
