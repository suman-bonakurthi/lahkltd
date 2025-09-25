"use client";

import React from "react";
import Image from "next/image";

const solutions = [
  {
    title: "Custom Garment Manufacturing",
    description:
      "Get tailor-made garment production for your unique requirements. From small batches to bulk orders, we deliver premium-quality apparel with precision and consistency.",
    image: "/assets/solution-1.png",
  },
  {
    title: "Fabric & Material Sourcing",
    description:
      "We source high-grade fabrics, leathers, trims, and accessories from trusted suppliers worldwide, ensuring cost-efficiency, compliance, and timely delivery.",
    image: "/assets/solution-2.png",
  },
  {
    title: "Product Design & Development",
    description:
      "Turn your vision into reality with our design-to-production services. Our experts assist with sampling, pattern making, and prototyping to bring your ideas to life.",
    image: "/assets/solution-3.png",
  },
  {
    title: "Quality Control & Inspection",
    description:
      "Our strict multi-stage quality checks guarantee that every piece meets international standards before it reaches your warehouse or store.",
    image: "/assets/solution-4.png",
  },
  {
    title: "Logistics & Global Shipping",
    description:
      "We manage the entire supply chain and logistics, ensuring your products are shipped safely and delivered on time anywhere in the world.",
    image: "/assets/solution-5.png",
  },
  {
    title: "Ethical & Sustainable Production",
    description:
      "We are committed to ethical sourcing and sustainable manufacturing, meeting social compliance and environmental responsibility standards.",
    image: "/assets/solution-6.png",
  },
];

const Solutions = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Solutions Crafted for Your Fashion Brand
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver exactly what your brand needs: reliable, scalable, and high-quality garment sourcing and manufacturing solutions. Our services are designed to ensure efficiency, quality assurance, and global supply chain reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
            >
              {/* Small icon top-left */}
              <div className="w-20 h-20 relative mb-4">
                <Image src={sol.image} alt={sol.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{sol.title}</h3>
              <p className="text-gray-600 text-sm">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
