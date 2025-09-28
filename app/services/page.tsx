'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lightbulb, Package, Factory } from 'lucide-react';

const ServicesSection = () => {
  const [activeSection, setActiveSection] = useState('product-development');
  const contentRef = useRef<HTMLDivElement | null>(null);

  const navigationItems = [
    { id: 'product-development', label: 'Product Development', icon: Lightbulb },
    { id: 'fabric-sourcing', label: 'Fabric & Accessories Sourcing', icon: Package },
    { id: 'apparel-manufacturing', label: 'Apparel Manufacturing', icon: Factory },
  ];

  const handleClick = (id: string) => {
    setActiveSection(id);
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'product-development':
        return (
          <div>
            <h2 className="flex items-center gap-3 text-4xl font-bold text-black mb-6">
              <Lightbulb className="w-6 h-6 text-primary" />
              Product Development
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Whether you are starting with a simple sketch on a napkin or a comprehensive technical pack,
                we specialize in transforming your garment and textile designs into reality.
                With extensive expertise in every phase of product development, we ensure your vision is executed
                with the highest standards of precision, quality, and craftsmanship.
              </p>
              <p className="font-semibold text-gray-900">Our services include, but are not limited to:</p>
              <ul className="space-y-2">
                {[
                  'Product development and design refinement',
                  'Fabric sourcing and material selection',
                  'Technical drawings and detailed tech pack creation',
                  'Pattern making and sample development',
                  'Fit analysis and garment construction',
                  'Quality control and production support',
                ].map((text) => (
                  <li key={text} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                We are committed to partnering with you to deliver exceptional finished products that meet your expectations and excel in the marketplace.
              </p>
            </div>
          </div>
        );

      case 'fabric-sourcing':
        return (
          <div>
            <h2 className="flex items-center gap-3 text-4xl font-bold text-gray-900 mb-6">
              <Package className="w-6 h-6 text-primary" />
              Fabric and Accessories Sourcing
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                We offer comprehensive development and sourcing services for fabrics, trims, and accessories tailored to your specific needs.
              </p>
              <p>
                Our extensive product range includes a wide variety of fabrics such as knits, wovens, denims, jacquards, leathers, PU fabrics,
                and sustainable organic materials like bamboo, banana fiber, and other innovative fabrics that align with current market trends.
                Additionally, we provide a versatile selection of fabric-printed and paper-printed labels, embroidered woven labels,
                as well as laser-cut and printed designs on wooden surfaces.
              </p>
              <p>
                We also supply all kinds of accessories for garments and leather goods, including PU and leather belts,
                satin and polyester woven labels, paperboard labels, appliqués, heat transfers, hang tags, and more.
              </p>
              <p>
                Our hardware collection features an extensive array of metal accessories, including metal buttons, eyelets, rivets,
                zipper sliders and pullers, snaps, hooks and bars, buckles, and metal loops, available in various finishes, shapes, sizes, and colors.
                We also offer plastic buttons, shell buttons, and wooden buttons designed to meet diverse stylistic and functional needs.
              </p>
              <p>
                Moreover, we provide customization services such as screen printing, laser cutting, and logo engraving on buttons and metal accessories,
                ensuring your products are unique and perfectly aligned with your brand identity.
              </p>
              <p>
                Our dedicated Quality Assurance team rigorously inspects all sourced materials and accessories to ensure they meet the highest standards of durability,
                consistency, and compliance with buyer specifications. We work closely with suppliers to maintain strict quality control throughout the sourcing process.
              </p>
              <p>
                With efficient project management and clear communication, we ensure timely delivery and competitive lead times, helping you meet your production schedules without compromising quality.
              </p>
              <p>
                By leveraging our global sourcing network and expertise, we guarantee reliable access to premium fabrics and accessories that complement your designs and keep you competitive in the market.
              </p>
            </div>
          </div>
        );

      case 'apparel-manufacturing':
        return (
          <div>
            <h2 className="flex items-center gap-3 text-4xl font-bold text-gray-900 mb-6">
              <Factory className="w-6 h-6 text-primary" />
              Apparel Manufacturing
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                L&amp;A is proudly associated with state-of-the-art garment manufacturing companies in Vietnam,
                specializing in the production of a wide range of apparel for men, women, and children. Our partner factories hold certifications and comply with internationally recognized standards such as WRAP, BSCI, SMETA, and Better Work, ensuring ethical practices and responsible manufacturing.
              </p>
              <p>
                Our dedicated Quality Assurance Department plays a critical role in continuously monitoring and controlling product quality as well as social compliance.
                Quality control measures include fabric inspection, in-line and final product inspections, fit testing, and strict adherence to buyer specifications.
                On the social compliance side, we conduct regular factory audits, worker welfare assessments, and environmental impact evaluations to ensure safe and fair working conditions.
              </p>
              <p>
                By collaborating closely with our suppliers, we systematically enhance their quality management systems and ensure all production processes meet industry best practices.
                This commitment guarantees superior garment quality, ethical labor conditions, and a reliable, transparent supply chain.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero section - Redesigned */}
      <section className="pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-black mb-6">
                  Custom Apparel Sourcing Solutions
                </h1>
                <div className="w-24 h-1 bg-primary mb-5"></div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Bespoke sourcing and production strategies, tailored to meet your exact garment and apparel requirements.
              </p>
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center bg-primary text-white px-6 py-3 font-medium text-base transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Discuss Your Requirements</span>
                <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative w-full h-80 md:h-96 overflow-hidden shadow-2xl">
                <Image
                  src="/assets/services.png"
                  alt="Custom Apparel Sourcing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ServicesSection */}
      <div className="min-h-screen pt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
          {/* Left navigation */}
          <div className="md:w-80 md:h-screen border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-8 sticky md:top-24 bg-white z-10">
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`w-full flex items-center gap-3 cursor-pointer text-left px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-primary border-l-4 border-primary'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right content */}
          <div
            ref={contentRef}
            className="flex-1 p-4 md:p-8 overflow-y-auto max-h-screen"
          >
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection