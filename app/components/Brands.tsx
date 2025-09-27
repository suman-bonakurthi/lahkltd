"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Brands = () => {
  const logos = Array.from({ length: 9 }, (_, i) => `/assets/brand-${i + 1}.webp`);

  return (
    <section className="py-4">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          We proudly partner with top fashion labels and retailers worldwide, delivering high-quality garments, reliable sourcing, and scalable production solutions.
        </p>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="relative w-24 h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Image
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  fill           
                  className="object-contain"
                  sizes="96px"   
                 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
