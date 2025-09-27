import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Logo + Copy */}
        <div className="flex flex-col items-start space-y-3">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.jpg"
              alt="L&H Logo"
              width={100}
              height={70}
              className="object-contain"
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
         
          <p className="text-xs text-gray-500 mt-2">© 2025 L&A Garments. All rights reserved.</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/product-development" className="hover:text-white transition">
                Product Development
              </Link>
            </li>
            <li>
              <Link href="/services/apparel-manufacturing" className="hover:text-white transition">
                Apparel Manufacturing
              </Link>
            </li>
            <li>
              <Link href="/services/leatherwear" className="hover:text-white transition">
                Leatherwear
              </Link>
            </li>
          </ul>
        </div>

        {/* Sourcing */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Sourcing</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/sourcing/apparel" className="hover:text-white transition">
                Apparel Sourcing
              </Link>
            </li>
            <li>
              <Link href="/sourcing/accessories" className="hover:text-white transition">
                Accessories & Trim Sourcing
              </Link>
            </li>
            <li>
              <Link href="/sourcing/health-products" className="hover:text-white transition">
                Health Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
