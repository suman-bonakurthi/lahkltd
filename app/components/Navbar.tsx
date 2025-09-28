"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-white shadow-lg backdrop-blur py-2" : "bg-white py-3"} 
      `}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="L&A Logo"
                width={300}
                height={120}
                priority
                className={`object-contain transition-all duration-300 group-hover:scale-105
                  ${
                    scrolled
                      ? "h-16 w-auto sm:h-18 md:h-20"
                      : "h-20 w-auto sm:h-24 md:h-28 lg:h-32"
                  }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10  opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about-us", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/why-us", label: "Why Us" },
              { href: "/products", label: "Products" },
              { href: "/worldwide", label: "Worldwide" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-800 hover:text-primary font-medium transition-colors text-base xl:text-lg after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact-us"
              className="group relative inline-flex items-center justify-center bg-primary text-white px-6 py-3  font-medium text-base xl:text-lg transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              className="text-gray-800 hover:text-primary transition focus:outline-none p-2"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <nav className="flex flex-col gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/why-us", label: "Why Us" },
                { href: "/products", label: "Products" },
                { href: "/worldwide", label: "Worldwide" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-gray-800 font-medium border-b border-gray-100 hover:text-primary transition text-base"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="group relative inline-flex items-center justify-center bg-primary text-white w-full px-6 py-3  font-medium text-lg transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden mt-4"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
