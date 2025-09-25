"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/hero.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-down">
          L&A Sourcing & Manufacturing Services
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl animate-fade-in-up">
          High-quality garments, leathers, and general goods for brands worldwide. Reliable, capable, responsive — your one-stop global partner.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/80 text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Get in Touch
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 1s ease forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
