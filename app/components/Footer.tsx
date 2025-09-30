"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-8">
          {/* Logo + Copy */}
          <div className="flex flex-col space-y-3 w-48 flex-shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpg"
                alt="L&H Logo"
                width={100}
                height={70}
                className="object-contain"
                priority
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="text-xs text-gray-500 mt-2">© 2025 L&A Garments. All rights reserved.</p>
          </div>

          {/* Spacer to push the rest to the right */}
          <div className="flex-grow"></div>

          {/* Services */}
          <div className="flex flex-col w-48 flex-shrink-0">
            <h3 className="text-white text-base font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm hover:text-white transition">
                  Product Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition">
                  Apparel Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition">
                  Leatherwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Sourcing */}
          <div className="flex flex-col w-48 flex-shrink-0">
            <h3 className="text-white text-base font-bold mb-4">Sourcing</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm hover:text-white transition">
                  Apparel Sourcing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition">
                  Accessories & Trim Sourcing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-white transition">
                  Health Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col w-48 flex-shrink-0">
            <h3 className="text-white text-base font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-sm hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-sm hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-sm hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
