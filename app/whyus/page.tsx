"use client";
import React from "react";
import {  Globe2, Layers, Zap, Package, ShieldCheck } from "lucide-react";

const whyUsItems = [
  {
    title: "Reliable",
    text: "We deliver what we promise—every time. With over 10 years of proven experience, we ensure high-quality products, competitive pricing, and on-time delivery through a dependable global network.",
    icon: ShieldCheck,
  },
  {
    title: "Capable",
    text: "Our expertise spans a wide range of industries and product categories, from premium leather goods and apparel to garment accessories and beverages. Whatever your requirement, we have the knowledge and infrastructure to fulfill it with precision.",
    icon: Layers,
  },
  {
    title: "Responsive",
    text: "We listen, adapt, and act quickly. Our customer-first approach means we are always attentive to your needs, providing flexible, tailor-made solutions that match your expectations and evolving market trends.",
    icon: Zap,
  },
  {
    title: "One Stop Shop",
    text: "From textiles, garments, and leather products to accessories like zippers, buttons, threads, and packaging—plus beverages and general merchandise—we provide everything under one roof, saving you time and resources.",
    icon: Package,
  },
  {
    title: "Global Reach",
    text: "With operational bases in Hong Kong, China, Vietnam, and India, and markets across Africa, Asia, the Middle East, North America, and Europe, we have a truly international footprint to serve customers anywhere in the world.",
    icon: Globe2,
  },
];

export default function WhyUsPage() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Why Choose Us
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
          Discover why leading brands around the world choose to partner with us.
        </p>

        {/* Kartlar */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 p-8 text-left transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mr-3">
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
  );
}
