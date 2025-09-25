"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Leather", href: "/services/leather" },
    { name: "Garments", href: "/services/garments" },
    { name: "General Goods", href: "/services/general" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 bg-white shadow transition-all duration-300 ${
        scrolled ? "h-20" : "h-28"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <div
              className={`relative transition-all duration-300 ${
                scrolled ? "w-40 h-12" : "w-64 h-20"
              }`}
            >
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-primary font-medium transition"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center gap-1 text-gray-800 hover:text-primary font-medium transition"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl w-48 flex flex-col z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition rounded-lg"
                      onClick={() => setOpenDropdown(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-800 hover:text-primary font-medium transition"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="ml-4 inline-block px-5 py-2 bg-primary text-white font-medium rounded-full hover:bg-primary/80 transition"
            >
              Get In Touch
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-800 hover:text-primary transition"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col p-4 gap-4">
            <Link
              href="/"
              className="text-gray-800 font-medium hover:text-primary transition"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="flex justify-between items-center text-gray-800 font-medium hover:text-primary transition"
              >
                Services <ChevronDown className="w-5 h-5" />
              </button>
              {mobileDropdown && (
                <div className="flex flex-col mt-2 pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-gray-700 hover:text-primary transition"
                      onClick={() => setMobileOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-800 font-medium hover:text-primary transition"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="inline-block px-5 py-2 bg-primary text-white font-medium rounded-full hover:bg-primary/80 transition mt-2 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
