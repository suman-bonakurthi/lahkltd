"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileMenuTop = scrolled ? "5rem" : "7rem";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-all duration-300 ${
        scrolled ? "h-20" : "h-28"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center h-full">
          {/* Logo + Hamburger */}
          <div className="flex justify-between items-center py-2 lg:py-0">
            <Link href="/" className="flex items-center">
              <div
                className={`relative transition-all duration-300 ${
                  scrolled ? "w-32 h-10 sm:w-36 sm:h-12" : "w-48 h-16 sm:w-56 sm:h-18"
                }`}
              >
                <Image
                  src="/logo.jpg"
                  alt="L&A Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                className="text-gray-800 hover:text-primary transition focus:outline-none"
              >
                {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
            <Link href="/" className="text-gray-800 hover:text-primary font-medium transition text-sm xl:text-base">
              Home
            </Link>
            <Link href="/worldwide" className="text-gray-800 hover:text-primary font-medium transition text-sm xl:text-base">
              Worldwide
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-primary font-medium transition text-sm xl:text-base">
              Services
            </Link>
            <Link href="/whyus" className="text-gray-800 hover:text-primary font-medium transition text-sm xl:text-base">
              Why Us
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-primary font-medium transition text-sm xl:text-base">
              About Us
            </Link>

            {/* Products link */}
            <Link
              href="/products"
              className="text-gray-800 font-medium text-sm xl:text-base hover:text-primary transition"
            >
              Products
            </Link>

            <Link
              href="/contact"
              className="ml-2 xl:ml-4 inline-block px-4 py-2 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition text-sm xl:text-base"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto shadow-lg"
          style={{ top: mobileMenuTop }}
        >
          <div className="px-6 py-6">
            <nav className="flex flex-col gap-3">
              <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 text-gray-800 font-medium border-b border-gray-100">
                Home
              </Link>
              <Link href="/worldwide" onClick={() => setMobileOpen(false)} className="py-3 text-gray-800 font-medium border-b border-gray-100">
                Worldwide
              </Link>
              <Link href="/services" onClick={() => setMobileOpen(false)} className="py-3 text-gray-800 font-medium border-b border-gray-100">
                Services
              </Link>
              <Link href="/whyus" onClick={() => setMobileOpen(false)} className="py-3 text-gray-800 font-medium border-b border-gray-100">
                Why Us
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="py-3 text-gray-800 font-medium border-b border-gray-100">
                About Us
              </Link>

              {/* Products link */}
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-gray-800 font-medium border-b border-gray-100 hover:text-primary transition"
              >
                Products
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-block px-6 py-3 bg-primary text-white rounded-full text-center font-medium"
              >
                Get In Touch
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
