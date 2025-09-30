"use client";

import React from "react";
import Image from "next/image";
import {
  Globe2,
  Layers,
  Zap,
  Package,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

// Feature sections matching About Us layout
const featureSections = [
  {
    icon: Target,
    title: "Our Story: Powering Global Apparel Sourcing",
    image: "/assets/story.png",
    description:
      "L&H Garments was founded with a clear mission: to be a trusted sourcing partner for fashion brands and retailers worldwide, helping them navigate and thrive in the fast-moving apparel industry. Our journey is driven by a passion for quality, innovation, and ethical production. We are committed to delivering cost-effective, scalable, and sustainable garment solutions that make a real impact. At L&H, we don't just source products, we help our clients build stronger, more efficient global supply chains.",
  },
  {
    icon: Target,
    title: "Our Vision",
    image: "/assets/vision.png",
    description:
      "To be the most trusted apparel sourcing partner for fashion brands and retailers worldwide. This vision guides every order we fulfill and every partnership we build. We strive to create long-term relationships based on trust, transparency, and shared success, delivering quality garments with reliability and integrity.",
  },
  {
    icon: Users,
    title: "Meet Our Driving Force",
    image: "/assets/driving.png",
    description:
      "At the heart of L&H Garments is a team of sourcing experts, quality inspectors, and logistics professionals passionate about helping our clients succeed. While our expertise spans design, production, and supply chain management, we are united by a shared commitment to excellence, reliability, and innovation in every garment we deliver.",
  },
];

// Core values cards (Why Us)
const whyUsItems = [
  {
    title: "Reliable",
    text:
      "We deliver what we promise—every time. With over 10 years of proven experience, we ensure high-quality products, competitive pricing, and on-time delivery through a dependable global network.",
    icon: ShieldCheck,
  },
  {
    title: "Capable",
    text:
      "Our expertise spans a wide range of industries and product categories, from premium leather goods and apparel to garment accessories and beverages. Whatever your requirement, we have the knowledge and infrastructure to fulfill it with precision.",
    icon: Layers,
  },
  {
    title: "Responsive",
    text:
      "We listen, adapt, and act quickly. Our customer-first approach means we are always attentive to your needs, providing flexible, tailor-made solutions that match your expectations and evolving market trends.",
    icon: Zap,
  },
  {
    title: "One Stop Shop",
    text:
      "From textiles, garments, and leather products to accessories like zippers, buttons, threads, and packaging—plus beverages and general merchandise—we provide everything under one roof, saving you time and resources.",
    icon: Package,
  },
  {
    title: "Global Reach",
    text:
      "With operational bases in Hong Kong, China, Vietnam, and India, and markets across Africa, Asia, the Middle East, North America, and Europe, we have a truly international footprint to serve customers anywhere in the world.",
    icon: Globe2,
  },
];

export default function WhyUsPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <section className="pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Features Section - Same as About Us */}
      <div className="space-y-20">
  {featureSections.map((feature, index) => (
    <div
      key={index}
      className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image Side */}
      <div
        className={`${
          index % 2 === 1 ? "md:order-2" : ""
        } relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden shadow-xl border-4 border-primary`}
      >
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content Side */}
      <div className={`${index % 2 === 1 ? "md:order-1" : ""} w-full`}>
        <div className="border-l-4 border-primary pl-6">
          <div className="flex items-start mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-headtext">
                {feature.title}
              </h3>
              <div className="w-16 h-0.5 bg-primary mt-3"></div>
            </div>
          </div>
          <div className="text-bodytext text-sm leading-relaxed sm:leading-loose space-y-4">
            {feature.description
              .split("\n\n")
              .map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
      </section>

      {/* Our Core Values / Why Us */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-headtext mb-3">
              Our Core Values: The Foundation of Our Work
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-5"></div>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Discover why leading brands around the world choose to partner with
              us.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {whyUsItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="shadow-md hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 transition-all duration-300 bg-white p-8 lg:p-12  flex flex-col h-full"
                >
                  <div className="  flex items-start mb-6 ">
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-headtext"> 
                        {item.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-primary mt-2"></div>
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm leading-relaxed space-y-4 flex-1">
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
