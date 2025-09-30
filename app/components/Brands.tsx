"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Brands = () => {
  const logos = Array.from({ length: 9 }, (_, i) => `/assets/brand-${i + 1}.webp`);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-headtext mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-bodytext text-base max-w-2xl mx-auto leading-relaxed">
            We proudly partner with top fashion labels and retailers worldwide,
            delivering high-quality garments, reliable sourcing, and scalable
            production solutions.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative px-8 sm:px-12 lg:px-16">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".brand-swiper-button-next",
              prevEl: ".brand-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".brand-swiper-pagination",
              dynamicBullets: true,
            }}
            spaceBetween={20}
            slidesPerView={2}
            centeredSlides={false}
            grabCursor={true}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 24 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              768: { slidesPerView: 4, spaceBetween: 32 },
              1024: { slidesPerView: 5, spaceBetween: 36 },
              1280: { slidesPerView: 6, spaceBetween: 40 },
            }}
            className="pb-14"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-32 sm:h-36 lg:h-40 px-4">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={logo}
                      alt={`Brand ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="brand-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer bg-white border border-gray-300 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>

          <div className="brand-swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer bg-white border border-gray-300 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-primary"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          {/* Pagination Dots */}
          <div className="brand-swiper-pagination absolute bottom-4 w-full flex justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
