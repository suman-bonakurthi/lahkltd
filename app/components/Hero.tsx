"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 relative w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 text-left">
            {/* Small title */}
            <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
              Premium Garments, Leather Goods & Apparel Solutions for Global Brands
            </p>
            
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              L&A Garment Sourcing & Manufacturing
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              We specialize in high-quality garment manufacturing, leather products, and general goods sourcing delivering reliable, scalable, and cost-effective solutions for fashion brands worldwide. With a commitment to quality, ethical production, and timely delivery, L&A is your trusted global sourcing partner for apparel and lifestyle products.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-base transition-colors duration-300"
              >
                 Let Us Build Your Solution
              </Link>
            </div>
          </div>

          {/* Right Image - Perfect Circular Design */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px]">
              {/* Outer circle background */}
              
              {/* Inner perfect circle for image */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-white shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/assets/hero.png"
                    alt="L&A Garment Manufacturing"
                    fill
                    sizes="(max-width: 640px) 342px, (max-width: 768px) 442px, (max-width: 1024px) 542px, 592px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      minWidth: '100%',
                      minHeight: '100%'
                    }}
                    className="rounded-full"
                    priority
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-pink-400 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}