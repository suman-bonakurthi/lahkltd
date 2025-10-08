"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-40 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div>
              <h1 className="text-3xl font-semibold text-bodytext leading-snug">
                L&amp;A – Leathers &amp; Apparels
              </h1>
              <div className="w-28 h-1 bg-primary mt-4"></div>
            </div>

            <p className="text-bodytext leading-relaxed text-justify">
              <span className="text-bodytext">
                We specialize in high-quality garment manufacturing, leather
                products, and general goods sourcing delivering reliable,
                scalable, and cost-effective solutions for fashion brands
                worldwide. With a commitment to quality, ethical production, and
                timely delivery, L&amp;A is your trusted global sourcing partner
                for apparel and lifestyle products designed to delivery
                precision, quality, and efficiency.
              </span>{" "}
              <span className="font-medium text-bodytext"></span>{" "}
              <span className="font-medium text-bodytext"></span>{" "}
              <span className="font-medium text-bodytext"></span>
            </p>

            <Link
              href="/contact-us"
              className="group relative inline-flex items-center justify-center rounded-full bg-primary text-white px-7 py-3 font-semibold text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Let Us Build Your Solution</span>
              <div className="absolute inset-0 bg-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 overflow-hidden shadow-lg border-4 border-primary">
              <Image
                src="/assets/hero.jpg"
                alt="Custom Apparel Sourcing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="pt-40 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-white to-gray-50">
    //   <div className="absolute inset-0 opacity-30 z-10">
    //     <div
    //       className="absolute inset-0"
    //       style={{
    //         backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
    //         backgroundSize: "24px 24px",
    //       }}
    //     ></div>
    //   </div>

    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    //       {/* Left Content */}
    //       <div className="flex flex-col justify-center space-y-8 text-left">
    //         <div className="space-y-2">
    //           <h1 className="text-2xl sm:text-2xl md:text-xl text-headtext leading-tight tracking-tight">
    //             L&amp;A – Leathers &amp; Apparels
    //           </h1>
    //           <p className="text-lg sm:text-xl md:text-2xl text-headtext font-medium">
    //             Sourcing &amp; Manufacturing Supply Chain
    //           </p>
    //         </div>

    //         <p className="text-bodytext max-w-xl leading-relaxed font-light text-justify">
    //           We specialize in high-quality garment manufacturing, leather
    //           products, and general goods sourcing delivering reliable,
    //           scalable, and cost-effective solutions for fashion brands
    //           worldwide. With a commitment to quality, ethical production, and
    //           timely delivery, L&amp;A is your trusted global sourcing partner
    //           for apparel and lifestyle products.
    //         </p>

    //         {/* Trust indicators */}
    //         <div className="flex items-center space-x-4">
    //           <div className="text-center">
    //             <div className="text-2xl font-bold text-bodytext">50+</div>
    //             <div className="text-sm text-bodytext uppercase tracking-wide">
    //               Global Brands
    //             </div>
    //           </div>
    //           <div className="w-px h-12 bg-slate-300"></div>
    //           <div className="text-center">
    //             <div className="text-2xl font-bold text-bodytext">25+</div>
    //             <div className="text-sm text-headtext uppercase tracking-wide">
    //               Years Experience
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-col sm:flex-row gap-4 pt-6 lg:col-span-2">
    //           <Link
    //             href="/contact-us"
    //             className="group relative inline-flex items-center justify-center bg-primary hover:bg-hover text-white px-10 py-5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
    //           >
    //             <span className="relative z-10">
    //               Let Us Build Your Solution
    //             </span>
    //             <div className="absolute inset-0 bg-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    //           </Link>

    //           <Link
    //             href="/products"
    //             className="inline-flex items-center justify-center border-2 border-bodytext text-bodytext hover:bg-hover hover:text-white px-10 py-5 rounded-full font-semibold text-sm transition-all duration-300"
    //           >
    //             View Our Work
    //             <svg
    //               className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
    //               fill="none"
    //               stroke="currentColor"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M17 8l4 4m0 0l-4 4m4-4H3"
    //               />
    //             </svg>
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Right Image */}
    //       <div className="flex justify-center lg:justify-end relative z-10">
    //         <div className="absolute -top-2 -right-8 w-full h-full border-2 border-slate-200 rounded-lg -z-10 transform rotate-3"></div>
    //         <div className="absolute -bottom-2 -left-8 w-full h-full bg-slate-50 rounded-lg -z-20 transform -rotate-2"></div>

    //         <div className="relative w-[350px] sm:w-[450px] md:w-[550px] lg:w-[600px] aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
    //           <Image
    //             src="/assets/hero.png"
    //             alt="L&A Garment Manufacturing - Premium Quality Production"
    //             fill
    //             sizes="(max-width: 640px) 350px, (max-width: 768px) 450px, (max-width: 1024px) 550px, 600px"
    //             className="object-cover hover:scale-105 transition-transform duration-700"
    //             priority
    //           />

    //           <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

    //           <div className="absolute bottom-1 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg">
    //             <div className="flex items-center space-x-2">
    //               <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
    //               <span className="text-sm font-semibold text-headtext">
    //                 Quality Certified
    //               </span>
    //             </div>
    //             <p className="text-xs text-bodytext mt-1">
    //               Ethical Production Standards
    //             </p>
    //           </div>
    //         </div>
    //       </div>

    //       {/* CTA Buttons */}
    //     </div>
    //   </div>
    // </section>
  );
}
