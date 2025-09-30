"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-40 relative w-full min-h-screen overflow-hidden">
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-slate-200 rounded-full opacity-20"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-slate-100 rounded-lg rotate-45 opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-slate-300 rotate-12 opacity-25"></div>
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-slate-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-60 right-1/3 w-12 h-12 border border-slate-300 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)] ">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-10 text-left order-1 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center">
              <div className="flex items-center bg-slate-50 border border-slate-200  px-6 py-3 shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm text-headtext font-medium tracking-wide uppercase">
                  Premium Garments, Leather Goods & Apparel Solutions
                </span>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-headtext leading-tight tracking-tight">
                L&amp;A – Leathers &amp; Appeals
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-headtext font-medium italic">
                Sourcing &amp; Manufacturing Supply Chain
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-bodytext max-w-xl leading-relaxed font-light">
              We specialize in high-quality garment manufacturing, leather products, and
              general goods sourcing delivering reliable, scalable, and cost-effective
              solutions for fashion brands worldwide. With a commitment to quality, ethical
              production, and timely delivery, L&A is your trusted global sourcing partner
              for apparel and lifestyle products.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 py-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-headtext">50+</div>
                <div className="text-sm text-headtext uppercase tracking-wide">Global Brands</div>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-headtext">25+</div>
                <div className="text-sm text-headtext uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-slate-300"></div>
             
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end relative order-2 lg:order-2">
            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-full h-full border-2 border-slate-200 rounded-lg -z-10 transform rotate-3"></div>
            <div className="absolute -bottom-8 -left-8 w-full h-full bg-slate-50 rounded-lg -z-20 transform -rotate-2"></div>

            {/* Main image container */}
            <div className="relative w-[350px] sm:w-[450px] md:w-[550px] lg:w-[600px] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/assets/hero.png"
                alt="L&A Garment Manufacturing - Premium Quality Production"
                fill
                sizes="(max-width: 640px) 350px, (max-width: 768px) 450px, (max-width: 1024px) 550px, 600px"
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

              {/* Quality badge overlay */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-headtext">Quality Certified</span>
                </div>
                <p className="text-xs text-bodytext mt-1">Ethical Production Standards</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 order-3 lg:col-span-2">
            <Link
              href="/contact-us"
              className="group relative inline-flex items-center justify-center bg-primary hover:bg-hover text-white px-10 py-5 rounded-none font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Let Us Build Your Solution</span>
              <div className="absolute inset-0 bg-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center border-2 border-headtext text-headtext hover:bg-hover hover:text-white  px-10 py-5 rounded-none font-semibold text-lg transition-all duration-300"
            >
              View Our Work
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
