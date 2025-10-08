"use client";

import React, { useState } from "react";
import Image from "next/image";

type ProductWithPrefix = { title: string; prefix: string; count: number };
type ProductWithImages = { title: string; images: string[] };
type ProductSubcategory = ProductWithPrefix | ProductWithImages;

type Category = {
  title: string;
  subcategories: ProductSubcategory[];
};

const categories: Category[] = [
  {
    title: "Apparel",
    subcategories: [
      { title: "Men", prefix: "men", count: 5 },
      { title: "Women", prefix: "woman", count: 10 },
      { title: "Kids", prefix: "kids", count: 2 },
    ],
  },
  {
    title: "Leather Goods",
    subcategories: [
      { title: "Belts", prefix: "belt", count: 3 },
      { title: "Wallets", prefix: "wallet", count: 2 },
      { title: "Bags", prefix: "bag", count: 5 },
    ],
  },
  {
    title: "Beverages",
    subcategories: [
      {
        title: "Sunflower Oil",
        images: ["bev-1.webp", "bev-2.webp", "bev-4.webp"],
      },
      {
        title: "Alcoholic Beer",
        images: ["bev-3.webp", "bev-5.webp", "bev-6.webp"],
      },
    ],
  },
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Apparel");
  const [activeSubcategory, setActiveSubcategory] = useState<string>("Men");

  const currentSubcategories =
    activeCategory !== null
      ? categories.find((c) => c.title === activeCategory)?.subcategories
      : [];

  const currentProducts =
    activeSubcategory && currentSubcategories
      ? currentSubcategories.find((s) => s.title === activeSubcategory)
      : null;

  return (
    <section className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-headtext mb-4">
          Our Products
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
        <p className="text-bodytext mb-8 max-w-2xl mx-auto text-base">
          Explore our carefully curated selection of products across categories.
        </p>

        {/* Top-level category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => {
                setActiveCategory(cat.title);
                // Automatically pick first subcategory
                const firstSub = cat.subcategories[0];
                if (firstSub) setActiveSubcategory(firstSub.title);
              }}
              className={`cursor-pointer px-5 py-2 border transition ${
                activeCategory === cat.title
                  ? "bg-primary text-white border-primary rounded-full"
                  : "bg-gray-100 text-headtext border-gray-300 hover:bg-gray-200 rounded-full"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Subcategory tabs */}
        {activeCategory && currentSubcategories && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {currentSubcategories.map((sub) => (
              <button
                key={sub.title}
                onClick={() => setActiveSubcategory(sub.title)}
                className={`cursor-pointer px-5 py-2 border transition ${
                  activeSubcategory === sub.title
                    ? "bg-primary text-white border-primary rounded-full"
                    : "bg-gray-100 text-headtext border-gray-300 hover:bg-gray-200 rounded-full"
                }`}
              >
                {sub.title}
              </button>
            ))}
          </div>
        )}

        {/* Products grid */}
        {currentProducts && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {"images" in currentProducts
              ? currentProducts.images.map((img, i) => (
                  <div
                    key={`${currentProducts.title}-${i}`}
                    className="group relative overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  >
                    <Image
                      src={`/assets/products/${img}`}
                      alt={`${currentProducts.title} ${i + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))
              : Array.from({ length: currentProducts.count }, (_, i) => (
                  <div
                    key={`${currentProducts.prefix}-${i + 1}`}
                    className="group relative overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  >
                    <Image
                      src={`/assets/products/${currentProducts.prefix}-${i + 1}.webp`}
                      alt={`${currentProducts.title} ${i + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
