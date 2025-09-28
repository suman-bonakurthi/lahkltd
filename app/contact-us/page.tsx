'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please check the reCAPTCHA box.');
      return;
    }

    const form = e.currentTarget;
    const fullName = (form.elements.namedItem('fullName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const company = (form.elements.namedItem('company') as HTMLInputElement).value;
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: 'b98cfb1a-9a91-43cf-9f51-435519f1a06d', name: fullName, email, company, service, message }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Your message has been sent, thank you!');
        form.reset();
        setCaptchaValue(null);
      } else {
        alert('An error occurred: ' + (result.message || 'Failed to send'));
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while connecting to the server.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="bg-[#0A3176] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column */}
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Let&apos;s Discuss Your Requirements
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  We&apos;re excited to learn about your ideas. Whether you have a specific requirement in mind,
                  need a consultation, or just want to learn more, our team is ready to connect with you.
                </p>
              </div>

              <div className="border-t border-gray-200 my-6" />

              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  What to Expect <br className="hidden sm:block" /> Next
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Once you submit the form, one of our specialists will review your message and get back to you
                  within 24-48 business hours. We look forward to exploring how we can create impactful digital
                  solutions together.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8  shadow-lg">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-base font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>

                {/* Company + Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-base font-medium text-gray-700 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-base font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      id="service"
                      className="w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select a service...</option>
                      <option>Textiles &amp; Accessories</option>
                      <option>Apparel Manufacturing</option>
                      <option>Leather Goods Sourcing</option>
                      <option>Beverage Sourcing</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300  focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-start">
                  <div
                    onClick={() => setCaptchaValue('dummy')}
                    className="cursor-pointer select-none inline-flex items-center space-x-3 border border-gray-300 bg-gray-100 px-4 py-3 hover:bg-gray-200 w-full sm:w-auto"
                  >
                    <input type="checkbox" className="h-4 w-4" checked={!!captchaValue} readOnly />
                    <span className="text-base text-gray-700">I&apos;m not a robot</span>
                  </div>
                </div>

                {/* Terms */}
                <p className="text-xs text-gray-500">
                  *By submitting this form, you have read and agreed to Viliha Web Services&nbsp;
                  <Link href="/terms-conditions" className="text-blue-600 hover:underline">Terms &amp; Conditions</Link> and&nbsp;
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                </p>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="relative group cursor-pointer overflow-hidden bg-primary text-white px-6 py-3 w-full sm:w-auto  font-medium text-base"
                  >
                    <span className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative z-10">Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
