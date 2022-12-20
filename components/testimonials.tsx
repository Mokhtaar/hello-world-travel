import { Carousel } from "react-responsive-carousel";
import React from "react";
import { Autoplay, Pagination, Navigation, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
  

function Testimonials() {
  return (
    // <div
    //   id="carouselExampleControls"
    //   className="carousel slide relative"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-inner relative w-full overflow-hidden">
    //     <div className="carousel-item active relative float-left w-full">
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
    //         className="block w-full"
    //         alt="Wild Landscape"
    //       />
    //     </div>
    //     <div className="carousel-item relative float-left w-full">
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
    //         className="block w-full"
    //         alt="Camera"
    //       />
    //     </div>
    //     <div className="carousel-item relative float-left w-full">
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
    //         className="block w-full"
    //         alt="Exotic Fruits"
    //       />
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //     type="button"
    //     data-bs-target="#carouselExampleControls"
    //     data-bs-slide="prev"
    //   >
    //     <span
    //       className="carousel-control-prev-icon inline-block bg-no-repeat"
    //       aria-hidden="true"
    //     ></span>
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //     type="button"
    //     data-bs-target="#carouselExampleControls"
    //     data-bs-slide="next"
    //   >
    //     <span
    //       className="carousel-control-next-icon inline-block bg-no-repeat"
    //       aria-hidden="true"
    //     ></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>

    // <div id="controls-carousel" className="relative" data-carousel="static">
    //   <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img
    //         src="/mark-2.png"
    //         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //         alt="/vercel.svg"
    //       />
    //     </div>

    //     <div
    //       className="hidden duration-700 ease-in-out"
    //       data-carousel-item="active"
    //     >
    //       <img
    //         src="/next.svg"
    //         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //         alt="/vercel.svg"
    //       />
    //     </div>

    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img
    //         src="/mark-2.png"
    //         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //         alt="/vercel.svg"
    //       />
    //     </div>

    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img
    //         src="/bgI.png"
    //         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //         alt="/vercel.svg"
    //       />
    //     </div>

    //     <div className="hidden duration-700 ease-in-out" data-carousel-item>
    //       <img
    //         src="/mark-2.png"
    //         className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //         alt="/vercel.svg"
    //       />
    //     </div>
    //   </div>

    //   <button
    //     type="button"
    //     className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    //     data-carousel-prev
    //   >
    //     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //       <svg
    //         aria-hidden="true"
    //         className="w-6 h-6 text-white dark:text-gray-800"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M15 19l-7-7 7-7"
    //         ></path>
    //       </svg>
    //       <span className="sr-only">Previous</span>
    //     </span>
    //   </button>
    //   <button
    //     type="button"
    //     className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    //     data-carousel-next
    //   >
    //     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    //       <svg
    //         aria-hidden="true"
    //         className="w-6 h-6 text-white dark:text-gray-800"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M9 5l7 7-7 7"
    //         ></path>
    //       </svg>
    //       <span className="sr-only">Next</span>
    //     </span>
    //   </button>
    // </div>

    <>
      <Swiper
        spaceBetween={30}
      

        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        zoom={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img
            className="object-cover px-16 pb-10"
            src="/bgI.png"
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover px-16"
            src="/mar1.jpeg"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover"
            //src="/mar2.jpeg"
            alt="image slide 3"
          />
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
