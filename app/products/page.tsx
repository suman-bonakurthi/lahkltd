"use client";
import React, { useState } from "react";
import Image from "next/image";

const productSections = [
  { title: "Men", prefix: "men", count: 5 },
  { title: "Women", prefix: "woman", count: 10 },
  { title: "Bags", prefix: "bag", count: 2 },
  { title: "Beverages", prefix: "bev", count: 6 },
  { title: "Kids", prefix: "kids", count: 2 },
  { title: "Belts", prefix: "belt", count: 3 },
  { title: "Wallets", prefix: "wallet", count: 2 },
];

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSections =
    activeFilter === "All"
      ? productSections
      : productSections.filter((s) => s.title === activeFilter);

  return (
    <section className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Başlık */}
        <h1 className="text-[28px] sm:text-4xl font-bold text-gray-900 mb-4">
          Products
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
          Explore our carefully curated selection of products across categories.
        </p>

        {/* Filtre butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <button
            onClick={() => setActiveFilter("All")}
            className={`cursor-pointer px-5 py-2 rounded-md border transition ${
              activeFilter === "All"
                ? "bg-primary text-white border-primary"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {productSections.map((section) => (
            <button
              key={section.title}
              onClick={() => setActiveFilter(section.title)}
              className={`cursor-pointer px-5 py-2 rounded-md border transition ${
                activeFilter === section.title
                  ? "bg-primary text-white border-primary"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Ürün Gridleri */}
        {filteredSections.map((section) => (
          <div key={section.title} className="mb-16">
            {/* Artık her zaman başlık gösteriyoruz */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 border-b border-gray-300 pb-2 text-left">
              {section.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {Array.from({ length: section.count }, (_, i) => (
                <div
                  key={`${section.prefix}-${i + 1}`}
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <Image
                    src={`/assets/products/${section.prefix}-${i + 1}.webp`}
                    alt={`${section.title} ${i + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
