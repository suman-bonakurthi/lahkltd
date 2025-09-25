"use client";

import React from "react";
import { Globe2, Layers, Zap, Package, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About Us
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
          Learn about our story, strengths, product portfolio, and commitment to quality and global excellence.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mr-3">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Story</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              L&A Company HK Ltd. is a global supplier of high-quality leather goods, apparel, accessories, general merchandise, and beverages, with headquarters in Hong Kong and production bases in China, Vietnam, Bangladesh, Cambodia, and India. For over a decade, L&A has built a reputation as a trusted partner across Africa, India, Sri Lanka, Vietnam, and the Middle East.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mr-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Strengths</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Tailor-Made Solutions: We create customized solutions for each client. Reliability: Quality as per customer specifications, competitive pricing, and on-time delivery. International Expertise: More than 10 years of experience in diverse global markets.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mr-3">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Product Portfolio</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              All kinds of Textiles and Garments, Leather Goods (Belts, Wallets, Handbags), Garment Accessories (Buttons, Zippers, Interlining, Threads, Elastics, Labels, Tags, Trims), Beverages and General Merchandise (Alcoholic Drinks, Beers, Whisky & Brandy).
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mr-3">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Quality & Innovation</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Quality is at the core of everything we do. We follow stringent quality assurance policies, modern practices, and advanced manufacturing technologies. Our customer-centric approach emphasizes innovation, fashion trend analysis, and continuous improvement.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mr-3">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Global Markets</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Export markets include USA, UK, Canada, India, and the Middle East, with a growing presence in Asia. Our distribution capabilities position us as a global leader in supplying leather goods, apparel, and accessories worldwide.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 p-8 transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mr-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Commitment</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              At L&A Company HK Ltd., we stand for quality, innovation, and reliability. We continually create value for our customers by offering products that enhance competitiveness in an ever-evolving market. L&A Company HK Ltd. – A Trusted Name in Leather, Apparel, and Accessories in the Fashion industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
