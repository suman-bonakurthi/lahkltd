"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // Pagination kaldırıldı

// Swiper CSS (pagination CSS de kaldırıldı)
import "swiper/css";
import "swiper/css/navigation";

const Brands = () => {
  const logos = Array.from({ length: 9 }, (_, i) => `/assets/brand-${i + 1}.webp`);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-700 text-base mb-12 max-w-2xl mx-auto">
          We proudly partner with top fashion labels and retailers worldwide,
          delivering high-quality garments, reliable sourcing, and scalable
          production solutions.
        </p>

        <div className="relative">
          {/* Eğer hala sol/sağ belirginliği istiyorsan buraya ekle; yoksa boş bırak */}
          <div className="absolute top-0 left-0 h-full w-1 shadow-lg shadow-gray-400/70 z-20"></div>
          <div className="absolute top-0 right-0 h-full w-1 shadow-lg shadow-gray-400/70 z-20"></div>

          <Swiper
            modules={[Autoplay, Navigation]} // Pagination modülü çıkartıldı
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".brand-swiper-button-next",
              prevEl: ".brand-swiper-button-prev",
            }}
            spaceBetween={24}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="pb-10"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="relative w-24 h-24 flex items-center justify-center transition-transform duration-300 hover:scale-110">
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
      </div>
    </section>
  );
};

export default Brands;
