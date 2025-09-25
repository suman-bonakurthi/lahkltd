"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-16 relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              L&A Garment Sourcing & Manufacturing
            </h1>
            
            <h2 className="text-lg sm:text-xl text-blue-600 font-medium">
              Premium Garments, Leather Goods & Apparel Solutions for Global Brands
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
              We specialize in high-quality garment manufacturing, leather products, and general goods sourcing delivering reliable, scalable, and cost-effective solutions for fashion brands worldwide. With a commitment to quality, ethical production, and timely delivery, L&A is your trusted global sourcing partner for apparel and lifestyle products.
            </p>
            
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium text-base transition-colors duration-300"
              >
                Let Us Build Your Solution
              </Link>
            </div>
          </div>

          {/* Right Image - Circular Design */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px]">
              {/* Circular background */}
              <div className="absolute  rounded-full"></div>
              
              {/* Main circular image container */}
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-full overflow-hidden">
                <Image
                  src="/assets/hero.png"
                  alt="L&A Garment Manufacturing"
                  fill
                   sizes="(max-width: 640px) 300px,
         (max-width: 768px) 400px,
         (max-width: 1024px) 500px,
         600px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}