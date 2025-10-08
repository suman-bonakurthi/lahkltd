"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Globe2, Zap, Target } from "lucide-react";

const WorldwidePresence = () => {
  const [activeCountry, setActiveCountry] = useState<
    null | (typeof countries)[0]
  >(null);

  const countries = [
    {
      name: "Vietnam",
      description:
        "Empowering businesses with tailored solutions in one of Southeast Asia's most dynamic markets.",
      position: { x: "76%", y: "48%" },
    },
    {
      name: "China",
      description:
        "Delivering high-quality products and services to the world's largest manufacturing hub.",
      position: { x: "72%", y: "40%" },
    },
    {
      name: "Hong Kong",
      description:
        "Supporting international trade and commerce from one of Asia's key financial centers.",
      position: { x: "77%", y: "44%" },
    },
    {
      name: "India",
      description:
        "Helping businesses scale in one of the most innovative and rapidly developing economies.",
      position: { x: "67.5%", y: "48%" },
    },
    {
      name: "Cambodia",
      description:
        "Bringing modern solutions to support growth and digital transformation.",
      position: { x: "74%", y: "48%" },
    },
    {
      name: "Bangladesh",
      description:
        "Partnering with local enterprises to meet global quality and supply chain standards.",
      position: { x: "70.5%", y: "44%" },
    },
  ];

  const benefits = [
    {
      title: "Faster Delivery",
      text: "Our network ensures quicker lead times and on-time shipping.",
      icon: Zap,
    },
    {
      title: "Local Expertise",
      text: "We understand the unique needs of each market and adapt accordingly.",
      icon: Target,
    },
    {
      title: "Global Network",
      text: "From small businesses to large enterprises, we provide flexible and scalable solutions worldwide.",
      icon: Globe2,
    },
  ];

  return (
    <section className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
        {/* Başlık */}
        <h1 className="text-3xl sm:text-4xl font-bold text-bodytext mb-4">
          Our Worldwide Presence
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-bodytext mb-14 max-w-2xl mx-auto text-base">
          At L&amp;A, we believe that great products and services know no
          borders. Our commitment to excellence has allowed us to build a strong
          network of customers and partners across key global markets.
        </p>

        {/* World Map Section */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold text-bodytext mb-8">
            Where We Operate
          </h2>

          {/* World Map Container */}
          <div className="bg-white border border-gray-100 p-8 mb-12">
            <div className="relative w-full max-w-6xl mx-auto">
              <div className="relative w-full aspect-[2/1] overflow-hidden">
                <Image
                  src="/assets/worldwide.png"
                  alt="World Map showing L&amp;A global presence"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                />

                {/* Country Markers */}
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                    style={{
                      left: country.position.x,
                      top: country.position.y,
                    }}
                    onMouseEnter={() => setActiveCountry(country)}
                    onMouseLeave={() => setActiveCountry(null)}
                  >
                    <div className="relative">
                      {/* responsive marker boyutu */}
                      <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>

                      {activeCountry?.name === country.name && (
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                          <div className="bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-lg whitespace-nowrap">
                            {country.name}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center mt-6 gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-primary rounded-full"></div>
              <span className="text-2xl text-bodytext font-medium">
                L&amp;A Global Presence
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-2xl text-bodytext">
                {countries.length} Countries
              </span>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {countries.map((country) => (
            <div
              key={country.name}
              className="shadow-sm hover:shadow-xl border border-gray-100 p-8 text-left transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center  text-primary mr-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-bodytext">
                  {country.name}
                </h3>
              </div>
              <p className="text-bodytext mb-14 max-w-2xl mx-auto text-base">
                {country.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-bodytext mb-8">
            Why Our Global Reach Matters
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className=" shadow-sm hover:shadow-xl border border-gray-100 p-8 text-left transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center  text-primary mr-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-bodytext">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-bodytext mb-14 max-w-2xl mx-auto text-base">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary shadow-sm border border-gray-100 p-12 text-center text-white">
          <h2 className="text-xl font-semibold mb-4">
            Connecting You with the World
          </h2>
          <p className="text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Whether you are sourcing products, expanding operations, or looking
            for reliable partners abroad, our team bridges the gap between
            markets and opportunities helping your business succeed globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorldwidePresence;
