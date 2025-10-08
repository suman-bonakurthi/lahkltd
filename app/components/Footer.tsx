"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo + Copy - Takes 2 columns on large screens */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpg"
                alt="L&H Logo"
                width={100}
                height={70}
                unoptimized
                className="object-contain w-24 h-auto md:w-32 lg:w-40"
                priority
              />
            </Link>
            <p className="text-xs text-gray-500 mt-2 max-w-xs">
              © 2025 L&A Garments. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h3 className="text-white text-base font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition"
                >
                  Product Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition"
                >
                  Apparel Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition"
                >
                  Leatherwear
                </Link>
              </li>
            </ul>
          </div>

          {/* Sourcing */}
          <div className="flex flex-col">
            <h3 className="text-white text-base font-bold mb-4">Sourcing</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition"
                >
                  Apparel Sourcing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition"
                >
                  Accessories & Trim Sourcing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-white transition"
                >
                  Health Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h3 className="text-white text-base font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li> */}
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-sm hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    // <footer className="bg-[#121828] text-white pt-12 pb-8">
    //   <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-12 container-1200px">
    //     <div className="footer-column">
    //       <a href="https://www.viliha.com/" className="mb-4 inline-block">
    //         {/* <Image src="https://cdn.viliha.com/images/logos/viliha-footer-logo.jpg" alt="Viliha Web Services Logo" className="w-36 rounded-lg"> */}
    //       </a>
    //       <p className="text-sm opacity-70">
    //         Architecting Your Digital Future.
    //       </p>
    //       <div className="mt-4 text-xs opacity-50">
    //         © 2025 Viliha. All Rights Reserved.
    //       </div>
    //     </div>
    //     <div className="footer-column">
    //       <h3 className="font-semibold mb-4">Services</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <a
    //             href="/services/custom-software-development/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Custom Software Solutions
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/services/web-development/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Web Application Development
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/services/mobile-app-development/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Mobile App Development
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/services/ux-ui-design/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             UX/UI Design Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/services/ecommerce-solutions/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             E-commerce &amp; Enterprise
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="footer-column">
    //       <h3 className="font-semibold mb-4">Migration Services</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <a
    //             href="/services/cloud-solutions/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Cloud Solutions &amp; Infrastructure
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/services/qa-and-testing/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Software QA &amp; Testing
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/services/api-development/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             API Development &amp; Integration
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/services/dedicated-development-teams/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Dedicated Development Teams
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/services/ongoing-support/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Ongoing Support &amp; Maintenance
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="footer-column">
    //       <h3 className="font-semibold mb-4">Company</h3>
    //       <ul className="space-y-2">
    //         <li>
    //           <a
    //             href="/about-us/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             About Us
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/contact/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Contact Us
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/privacy-policy/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Privacy Policy
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="/terms-conditions/"
    //             className="text-sm opacity-70 hover:opacity-100 transition text-[#aaa]"
    //           >
    //             Terms &amp; Conditions
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
