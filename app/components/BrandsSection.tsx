"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brands = [
  {
    name: "Bolle",
    url: "https://www.bolle.com/",
    image: "/assets/brand-1.webp",
  },
  {
    name: "Marika",
    url: "https://www.marika.com/",
    image: "/assets/brand-2.webp",
  },
  {
    name: "Blue Tees Golf",
    url: "https://blueteesgolf.co.uk/",
    image: "/assets/brand-3.webp",
  },
  {
    name: "Marsupial Gear",
    url: "https://www.marsupialgear.com/",
    image: "/assets/brand-4.webp",
  },
  {
    name: "PB Golf Apparel",
    url: "https://www.pbgolfapparel.com/",
    image: "/assets/brand-6.webp",
  },
  {
    name: "Monster Energy",
    url: "https://www.monsterenergy.com/en-us/",
    image: "/assets/brand-7.webp",
  },
];

export default function BrandsSection() {
  return (
    <section className="py-16 px-2 sm:px-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight text-white drop-shadow-lg mb-2">
          Trusted Brands
        </h2>
        <p className="text-gray-200 text-center mt-2 max-w-xl text-base md:text-lg">
          We proudly collaborate with world-renowned brands.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 1, // çok küçük delay
          disableOnInteraction: false,
        }}
        speed={5000} // hız (ms)
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="!pb-8"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.name} className="flex justify-center">
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center bg-white/90 rounded-3xl shadow-lg hover:shadow-2xl transition border-2 border-transparent hover:border-primary p-4 min-h-[210px] w-[200px] h-[260px] mx-auto justify-center hover:-translate-y-1 duration-200 backdrop-blur-sm"
            >
              <div className="relative w-full h-[120px] flex items-center justify-center mb-4">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                  sizes="200px"
                  priority
                />
              </div>
              <span className="text-base md:text-lg font-bold text-gray-800 mt-2 text-center line-clamp-2 group-hover:text-primary tracking-tight drop-shadow-sm w-full px-2">
                {brand.name}
              </span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
