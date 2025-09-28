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
      <section className="pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  Our Story: Powering Global Apparel Sourcing
                </h1>
                <div className="w-24 h-1 bg-primary mb-5"></div>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                L&amp;H Garments was founded with a clear mission: to be a trusted
                sourcing partner for fashion brands and retailers worldwide,
                helping them navigate and thrive in the fast-moving apparel
                industry. Our journey is driven by a passion for quality,
                innovation, and ethical production. We are committed to delivering
                cost-effective, scalable, and sustainable garment solutions that
                make a real impact. At L&amp;H, we don&apos;t just source products, we
                help our clients build stronger, more efficient global supply
                chains.
              </p>
            </div>
            <div className="relative">
              <div className="relative w-full h-80 md:h-96 overflow-hidden shadow-2xl">
                <Image
                  src="/assets/story.png" 
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="md:order-2 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  Our Vision
                </h2>
                <div className="w-24 h-1 bg-primary mb-5"></div>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                To be the most trusted apparel sourcing partner for fashion brands
                and retailers worldwide. This vision guides every order we fulfill
                and every partnership we build. We strive to create long-term
                relationships based on trust, transparency, and shared success,
                delivering quality garments with reliability and integrity.
              </p>
            </div>
            <div className="md:order-1 relative">
              <div className="relative w-full h-80 md:h-96 overflow-hidden shadow-2xl">
                <Image
                  src="/assets/vision.png"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Driving Force */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                  Meet Our Driving Force
                </h2>
                <div className="w-24 h-1 bg-primary mb-5"></div>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                At the heart of L&amp;H Garments is a team of sourcing experts,
                quality inspectors, and logistics professionals passionate about
                helping our clients succeed. While our expertise spans design,
                production, and supply chain management, we are united by a shared
                commitment to excellence, reliability, and innovation in every
                garment we deliver.
              </p>
            </div>
            <div className="relative">
              <div className="relative w-full h-80 md:h-96 overflow-hidden shadow-2xl">
                <Image
                  src="/assets/driving.png"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values / Why Us */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our Core Values: The Foundation of Our Work
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-5"></div>
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Discover why leading brands around the world choose to partner with
              us.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyUsItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center text-primary mr-3">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
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