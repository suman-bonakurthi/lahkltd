"use client";

import React from "react";
import Image from "next/image";
import { Layers, Zap, Package, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Our Strengths",
      image: "/assets/our-strength.png",
      description: "Tailor-Made Solutions: We create customized solutions to match the specific requirements of each client.\n\nReliability: We guarantee quality as per customer specifications, competitive pricing, and on-time delivery through our strong global network.\n\nInternational Expertise: More than 10 years of experience in catering to a diverse range of markets with a strong global footprint."
    },
    {
      icon: Package,
      title: "Product Portfolio",
      image: "/assets/commitment.png",
      description: "Our extensive product range includes:\n\nAll kind of Textiles and Garments\n\nLeather Goods, Belts, Wallets, Hand Bags.\n\nGarment Accessories: Metal Buttons, zippers, interlining & pocketing material, sewing threads, elastics, labels, tags, and many various types of trims\n\nBeverages and General Merchandise, Alcoholic drinks, Beers, Whisky & Brandy"
    },
    {
      icon: Zap,
      title: "Quality & Innovation",
      image: "/assets/quality.png",
      description: "At L&A, quality is at the core of everything we do. We follow a stringent quality assurance policy, adopting modern practices and advanced manufacturing technologies. Our customer-centric approach emphasizes innovation, fashion trend analysis, and continuous improvement, allowing us to deliver solutions that are not only functional but also fashionable and in vogue. This commitment to excellence is reflected in our finished products, characterized by contemporary design, superior craftsmanship, and global appeal."
    },
    {
      icon: Layers,
      title: "Global Markets",
      image: "/assets/global.png",
      description: "Our export markets include the USA, UK, Canada, India, and the Middle East, supported by a growing presence in Asia. With our extensive experience and distribution capabilities, we are positioned as a global leader in supplying leather goods, apparel, accessories, and many more."
    },
    {
      icon: ShieldCheck,
      title: "Our Commitment",
      image: "/assets/commitment.png",
      description: "At L&A Company, we stand for quality, innovation, and reliability. We aim to continually create value for our customers by offering products that enhance competitiveness in an ever-evolving market. L&A Company. A Trusted Name in Leather, Apparel, and Accessories in the Fashion industry."
    }
  ];

  return (
    <section className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Hero Section - Improved Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                About Us
              </h1>
              <div className="w-24 h-1 bg-primary mb-5"></div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-base leading-relaxed">
                L&amp;A Company HK Ltd. is a global supplier of high-quality leather
                goods, apparel, accessories, general merchandise, and recently
                entered in beverages, with headquarters in Hong Kong and production
                bases strategically located in China, Vietnam, Bangladesh, Cambodia
                and India.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                For over a decade, L&amp;A has built a reputation as a trusted
                partner to leading leather and garment manufacturers across Central
                and Eastern Africa, India, Sri Lanka, Vietnam, and the Middle East.
                We specialize in providing products that not only meet but exceed
                international quality standards, ensuring customer satisfaction at
                every stage.
              </p>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 overflow-hidden shadow-2xl">
              <Image
                src="/assets/about-us.png"
                alt="About Us"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Section - New Layout */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-5 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative w-full h-80 overflow-hidden shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Content Side */}
              <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="bg-white p-8 lg:p-12 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10  flex items-center justify-center text-primary mr-4">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-primary mt-2"></div>
                    </div>
                  </div>
                  <div className="text-gray-600 text-base leading-relaxed space-y-4">
                    {feature.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}