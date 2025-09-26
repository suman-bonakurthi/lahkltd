"use client";
import React from "react";
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
  return (
    <section className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Başlık */}
        <h1 className="text-[28px] sm:text-4xl font-bold text-gray-900 mb-4">
          Products
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
          Explore our carefully curated selection of products across categories.
        </p>

        {/* Bölümler */}
        {productSections.map((section) => (
          <div key={section.title} className="mb-16">
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
