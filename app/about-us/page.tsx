"use client";

import React from "react";
import Image from "next/image";
import { Layers, Zap, Package, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Üst Bölüm */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          {/* Yazı */}
          <div>
            <h1 className="text-[28px] sm:text-4xl font-bold text-gray-900 mb-3">
              About Us
            </h1>
            <div className="w-24 h-1 bg-primary mb-5"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              L&amp;A Company HK Ltd. is a global supplier of high-quality leather
              goods, apparel, accessories, general merchandise, and recently
              entered in beverages, with headquarters in Hong Kong and production
              bases strategically located in China, Vietnam, Bangladesh, Cambodia
              and India.
              <br /><br />
              For over a decade, L&amp;A has built a reputation as a trusted
              partner to leading leather and garment manufacturers across Central
              and Eastern Africa, India, Sri Lanka, Vietnam, and the Middle East.
              We specialize in providing products that not only meet but exceed
              international quality standards, ensuring customer satisfaction at
              every stage.
            </p>
          </div>
          {/* Fotoğraf */}
          <div className="relative w-full h-80 md:h-96 overflow-hidden">
            <Image
              src="/assets/about-us.png" // buraya kendi görsel yolunu koy
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Alt Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Our Strengths */}
          <div className="bg-white shadow-md hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-1 text-left">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/assets/our-strength.png"
                alt="Our Strength"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center  text-primary mr-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Strengths</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tailor-Made Solutions: We create customized solutions to match the
                specific requirements of each client.<br /><br />
                Reliability: We guarantee quality as per customer specifications,
                competitive pricing, and on-time delivery through our strong global
                network.<br /><br />
                International Expertise: More than 10 years of experience in
                catering to a diverse range of markets with a strong global
                footprint.
              </p>
            </div>
          </div>

          {/* Product Portfolio */}
          <div className="bg-white shadow-md hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-1 text-left">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/assets/commitment.png"
                alt="Product Portfolio"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center  text-primary mr-3">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Product Portfolio</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our extensive product range includes:<br /><br />
                All kind of Textiles and Garments<br /><br />
                Leather Goods, Belts, Wallets, Hand Bags.<br /><br />
                Garment Accessories: Metal Buttons, zippers, interlining &amp;
                pocketing material, sewing threads, elastics, labels, tags, and many
                various types of trims<br /><br />
                Beverages and General Merchandise, Alcoholic drinks, Beers, Whisky
                &amp; Brandy
              </p>
            </div>
          </div>

          {/* Quality & Innovation */}
          <div className="bg-white shadow-md hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-1 text-left">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/assets/quality.png"
                alt="Quality & Innovation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center  text-primary mr-3">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Quality & Innovation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At L&amp;A, quality is at the core of everything we do. We follow a
                stringent quality assurance policy, adopting modern practices and
                advanced manufacturing technologies. Our customer-centric approach
                emphasizes innovation, fashion trend analysis, and continuous
                improvement, allowing us to deliver solutions that are not only
                functional but also fashionable and in vogue. This commitment to
                excellence is reflected in our finished products, characterized by
                contemporary design, superior craftsmanship, and global appeal.
              </p>
            </div>
          </div>

          {/* Global Markets */}
          <div className="bg-white shadow-md hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-1 text-left">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/assets/global.png"
                alt="Global Markets"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center  text-primary mr-3">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Global Markets</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our export markets include the USA, UK, Canada, India, and the Middle
                East, supported by a growing presence in Asia. With our extensive
                experience and distribution capabilities, we are positioned as a
                global leader in supplying leather goods, apparel, accessories, and
                many more.
              </p>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-white shadow-md hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:-translate-y-1 text-left">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/assets/commitment.png"
                alt="Our Commitment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center  text-primary mr-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Our Commitment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At L&amp;A Company, we stand for quality, innovation, and reliability.
                We aim to continually create value for our customers by offering
                products that enhance competitiveness in an ever-evolving market.
                L&amp;A Company. A Trusted Name in Leather, Apparel, and Accessories
                in the Fashion industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
