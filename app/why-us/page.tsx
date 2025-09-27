"use client";
import React from "react";
import Image from "next/image";
import { Globe2, Layers, Zap, Package, ShieldCheck } from "lucide-react";

// Core values kartları
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

export default function AboutUsPage() {
  return (
    <div>
      {/* Our Story */}
      <section className="pt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-[28px] sm:text-4xl font-bold text-gray-900 mb-4">
              Our Story: Powering Global Apparel Sourcing
            </h1>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              L&amp;H Garments was founded with a clear mission: to be a trusted
              sourcing partner for fashion brands and retailers worldwide,
              helping them navigate and thrive in the fast-moving apparel
              industry. Our journey is driven by a passion for quality,
              innovation, and ethical production. We are committed to delivering
              cost-effective, scalable, and sustainable garment solutions that
              make a real impact. At L&amp;H, we don’t just source products, we
              help our clients build stronger, more efficient global supply
              chains.
            </p>
          </div>
          <div className="relative w-full h-80">
            <Image
              src="/assets/story.png" 
              alt="Our Story"
              fill
              className="object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-80 order-2 md:order-1">
            <Image
              src="/assets/vision.png"
              alt="Our Vision"
              fill
              className="object-cover shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-[28px] sm:text-4xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To be the most trusted apparel sourcing partner for fashion brands
              and retailers worldwide. This vision guides every order we fulfill
              and every partnership we build. We strive to create long-term
              relationships based on trust, transparency, and shared success,
              delivering quality garments with reliability and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Driving Force */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[28px] sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Driving Force
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              At the heart of L&amp;H Garments is a team of sourcing experts,
              quality inspectors, and logistics professionals passionate about
              helping our clients succeed. While our expertise spans design,
              production, and supply chain management, we are united by a shared
              commitment to excellence, reliability, and innovation in every
              garment we deliver.
            </p>
          </div>
          <div className="relative w-full h-80">
            <Image
              src="/assets/driving.png"
              alt="Our Team"
              fill
              className="object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Core Values / Why Us */}
      <section className="pt-16 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-[28px] sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values: The Foundation of Our Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
            Discover why leading brands around the world choose to partner with
            us.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyUsItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="shadow-sm hover:shadow-xl border border-gray-100 p-8 text-left transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl  text-primary mr-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
