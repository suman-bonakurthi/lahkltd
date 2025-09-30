"use client";

import React from "react";
import Image from "next/image";
import { Layers, Zap, Package, ShieldCheck, CheckCircle } from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Our Strengths",
      image: "/assets/our-strength.png",
      description:
        "Tailor-Made Solutions: We create customized solutions to match the specific requirements of each client.\n\nReliability: We guarantee quality as per customer specifications, competitive pricing, and on-time delivery through our strong global network.\n\nInternational Expertise: More than 10 years of experience in catering to a diverse range of markets with a strong global footprint.",
    },
    {
      icon: Package,
      title: "Product Portfolio",
      image: "/assets/commitment.png",
      description:
        "Our extensive product range includes:\n\nAll kind of Textiles and Garments\n\nLeather Goods, Belts, Wallets, Hand Bags.\n\nGarment Accessories: Metal Buttons, zippers, interlining & pocketing material, sewing threads, elastics, labels, tags, and many various types of trims\n\nBeverages and General Merchandise, Alcoholic drinks, Beers, Whisky & Brandy",
    },
    {
      icon: Zap,
      title: "Quality & Innovation",
      image: "/assets/quality.png",
      description:
        "At L&A, quality is at the core of everything we do. We follow a stringent quality assurance policy, adopting modern practices and advanced manufacturing technologies. Our customer-centric approach emphasizes innovation, fashion trend analysis, and continuous improvement, allowing us to deliver solutions that are not only functional but also fashionable and in vogue. This commitment to excellence is reflected in our finished products, characterized by contemporary design, superior craftsmanship, and global appeal.",
    },
    {
      icon: Layers,
      title: "Global Markets",
      image: "/assets/global.png",
      description:
        "Our export markets include the USA, UK, Canada, India, and the Middle East, supported by a growing presence in Asia. With our extensive experience and distribution capabilities, we are positioned as a global leader in supplying leather goods, apparel, accessories, and many more.",
    },
    {
      icon: ShieldCheck,
      title: "Our Commitment",
      image: "/assets/commitment.png",
      description:
        "At L&A Company, we stand for quality, innovation, and reliability. We aim to continually create value for our customers by offering products that enhance competitiveness in an ever-evolving market. L&A Company. A Trusted Name in Leather, Apparel, and Accessories in the Fashion industry.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch mb-20">
          {/* Text */}
          <div className="space-y-10">
            <div className="border-l-4 border-primary pl-6 space-y-4">
              <p className="text-bodytext text-base leading-relaxed">
                <span className="font-semibold text-headtext">
                  L&amp;A Company HK Ltd.
                </span>{" "}
                is a global supplier of high-quality{" "}
                <span className="font-medium text-headtext">
                  leather goods, apparel, accessories, general merchandise
                </span>{" "}
                and has recently expanded into{" "}
                <span className="font-medium text-headtext">beverages</span>.
              </p>

              <ul className="space-y-3">
                {[
                  "Headquartered in Hong Kong",
                  "Production bases in China, Vietnam, Bangladesh, Cambodia, and India",
                  "Specialized in leather, garments, accessories & beverages",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-bodytext text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-2 border-gray-200 pt-6 space-y-4">
              <p className="text-bodytext text-base leading-relaxed">
                For over a decade,{" "}
                <span className="font-semibold text-headtext">L&amp;A</span> has built a
                reputation as a{" "}
                <span className="font-medium text-headtext">trusted partner</span> to
                leading leather and garment manufacturers across{" "}
                <span className="italic text-headtext">
                  Central and Eastern Africa, India, Sri Lanka, Vietnam, and the Middle
                  East
                </span>
                .
              </p>

              <ul className="space-y-3">
                {[
                  "Delivering products that meet and exceed international standards",
                  "Commitment to quality, reliability, and customer satisfaction",
                  "Strong global footprint with proven expertise",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-bodytext text-sm sm:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-[16/10] overflow-hidden shadow-xl border-4 border-primary">
            <Image
              src="/assets/about-us.png"
              alt="About Us"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch"
            >
              {/* Image Side */}
              <div
                className={`relative w-full aspect-[16/10] overflow-hidden shadow-xl border-4 border-primary ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Side */}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-headtext">
                        {feature.title}
                      </h3>
                      <div className="w-16 h-0.5 bg-primary mt-3"></div>
                    </div>
                  </div>
                  <div className="text-bodytext text-sm leading-relaxed sm:leading-loose space-y-4">
                    {feature.description
                      .split("\n\n")
                      .map((paragraph, pIndex) => (
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
