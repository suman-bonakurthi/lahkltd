'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactPage() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Please verify that you are not a robot.');
      return;
    }

    const form = e.currentTarget;
    const fullName = (form.elements.namedItem('fullName') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const company = (form.elements.namedItem('company') as HTMLInputElement).value;
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          company,
          service,
          message,
          token: recaptchaToken,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Your message has been sent, thank you!');
        form.reset();
        setRecaptchaToken(null);
      } else {
        alert('An error occurred: ' + (result.message || 'Failed to send'));
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while connecting to the server.');
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary text-white py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column */}
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-headtext mb-4">
                  Let&apos;s Discuss Your Requirements
                </h2>
                <p className="text-bodytext text-base leading-relaxed">
                  We&apos;re excited to learn about your ideas. Whether you have a specific requirement in mind,
                  need a consultation, or just want to learn more, our team is ready to connect with you.
                </p>
              </div>

              <div className="border-t border-gray-200 my-6" />

              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-headtext mb-4">
                  What to Expect <br className="hidden sm:block" /> Next
                </h3>
                <p className="text-bodytext text-base leading-relaxed">
                  Once you submit the form, one of our specialists will review your message and get back to you
                  within 24-48 business hours. We look forward to exploring how we can create impactful digital
                  solutions together.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-4xl font-bold text-headtext mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-lg">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-base font-medium text-headtext mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full px-3 py-2 bg-gray-100 text-headtext border border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-headtext mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-3 py-2 bg-gray-100 text-headtext border border-gray-300"
                      required
                    />
                  </div>
                </div>

                {/* Company + Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-base font-medium text-headtext mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="w-full px-3 py-2 bg-gray-100 text-headtext border border-gray-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-base font-medium text-headtext mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      id="service"
                      className="w-full px-3 py-2 bg-gray-100 text-headtext border border-gray-300"
                      required
                    >
                      <option value="">Select a service...</option>
                      <option>Textiles & Accessories</option>
                      <option>Apparel Manufacturing</option>
                      <option>Leather Goods Sourcing</option>
                      <option>Beverage Sourcing</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-base font-medium text-headtext mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-100 text-headtext border border-gray-300 resize-none"
                  />
                </div>

                {/* reCAPTCHA v2 */}
                <div>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    onChange={(token) => setRecaptchaToken(token)}
                  />
                </div>

                {/* Terms */}
                <p className="text-xs text-bodytext">
                  *By submitting this form, you have read and agreed to L&A Web Services&nbsp;
                  <Link href="/terms-conditions" className="text-blue-600 hover:underline">Terms & Conditions</Link> and&nbsp;
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                </p>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="relative group cursor-pointer overflow-hidden bg-primary text-white px-6 py-3 w-full sm:w-auto font-medium text-base"
                  >
                    <span className="absolute inset-0 bg-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
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