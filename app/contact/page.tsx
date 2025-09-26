'use client';
import React, { useState } from 'react';

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
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // <---- PUT THE ACCESS KEY HERE
          name: fullName,
          email: email,
          company: company,
          service: service,
          message: message,
        }),
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
    <div className="min-h-screen pt-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto bg-[#0A3176] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-0 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="flex flex-col h-full space-y-8 max-w-xl">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Let&apos;s Discuss Your Requirements
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We&apos;re excited to learn about your ideas. Whether you have a specific requirement in mind, need a consultation, or just want to learn more, our team is ready to connect with you.
                </p>
              </div>

              <div className="border-t border-gray-200 my-8" />

              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  What to Expect <br /> Next
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Once you submit the form, one of our specialists will review your message and get back to you within 24-48 business hours. We look forward to exploring how we can create impactful digital solutions together.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex flex-col h-full">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      id="service"
                      className="text-gray-900 w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
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

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none"
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-start">
                  <div
                    onClick={() => setCaptchaValue('dummy')}
                    className="cursor-pointer select-none inline-flex items-center space-x-3 border border-gray-300 rounded bg-gray-100 px-4 py-3 hover:bg-gray-200"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      checked={!!captchaValue}
                      readOnly
                    />
                    <span className="text-sm text-gray-700">I&apos;m not a robot</span>
                    <div className="flex flex-col items-center text-xs text-gray-500">
                      <span>reCAPTCHA</span>
                      <div className="flex space-x-1">
                        <span>Privacy</span>
                        <span>-</span>
                        <span>Terms</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500">
                  *By submitting this form, you have read and agreed to Viliha Web Services&nbsp;
                  <a href="#" className="text-blue-600 hover:underline">Terms of Use</a> and&nbsp;
                  <a href="#" className="text-blue-600 hover:underline">Privacy Statement</a>.
                </p>

                <div>
                  <button
                    type="submit"
                    className="cursor-pointer bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary transition-colors font-medium"
                  >
                    Send Message
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
