"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function CenteredLogoNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  

  const products = [
    { name: "Leathers", href: "/products/leathers" },
    { name: "Garments", href: "/products/garments" },
    { name: "General Goods", href: "/products/general" },
  ];

  // "Worldwide" artık dropdown değil, direkt link
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Worldwide", href: "/worldwide" }, 
    { name: "Services", href: "/services" },
    { name: "Why Us", href: "/why-us" },
    { name: "Products", href: "/products", dropdown: products },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo üstte ortada */}
        <div className="flex justify-center items-center h-20 relative">
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-48 h-16 sm:w-56 sm:h-20">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Hamburger mobile sağ üst */}
          <div className="absolute right-0 md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 hover:text-blue-600 transition"
            >
              {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Desktop Menu altına */}
        <div className="hidden md:flex justify-center items-center gap-6 font-medium text-gray-800 py-4">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative group">
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition">
                  {item.name} <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all bg-white shadow-lg rounded-xl min-w-[200px] flex flex-col z-50">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition text-sm md:text-base"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-lg hover:bg-blue-50 transition"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="relative w-36 h-14 mx-auto">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 hover:text-blue-600 cursor-pointer absolute right-6"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {menuItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="flex flex-col">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="flex justify-between items-center text-gray-800 font-semibold hover:text-blue-600 transition text-lg px-3 py-2 bg-gray-50 rounded-lg"
                  >
                    {item.name} <ChevronDown className="w-5 h-5" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="flex flex-col pl-4 mt-2 space-y-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-gray-700 hover:text-blue-600 transition px-2 py-1 rounded-lg"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-800 font-semibold hover:text-blue-600 transition text-lg px-3 py-2 rounded-lg"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
