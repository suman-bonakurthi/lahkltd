"use client";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Script from "next/script";

export default function ContactPage() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || "");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setStatus("⚠️ Please verify you are not a robot.");
      return;
    }

    const form = e.currentTarget;
    const name = (form.elements.namedItem("fullName") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement)
      .value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const params = {
      name: name,
      email: email,
      company: company,
      dateTime: new Date().toLocaleString(),
      interest: service,
      message: message,
    };

    setLoading(true);
    setStatus("");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_COMPANY_TEMPLATE_ID || "",
        params
      );
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_CUSTOMER_TEMPLATE_ID || "",
        params
      );
      setStatus("✅ Email sent successfully!");
      setLoading(false);
      setRecaptchaToken(null);
      form.reset();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send email.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // try {
  //   const response = await fetch("/api/contact", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       fullName,
  //       email,
  //       company,
  //       service,
  //       message,
  //       token: recaptchaToken,
  //     }),
  //   });
  //     const result = await response.json();
  //     if (response.ok) {
  //       alert("Your message has been sent, thank you!");
  //       form.reset();
  //       setRecaptchaToken(null);
  //     } else {
  //       alert("An error occurred: " + (result.message || "Failed to send"));
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occurred while connecting to the server.");
  //   }
  // };

  return (
    <div>
      {/* ✅ Include reCAPTCHA script manually */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=explicit`}
        strategy="afterInteractive"
      />
      {/* Header */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary text-white py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div>
        <div className="pt-10 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column */}
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-xl sm:text-xl font-bold text-bodytext mb-4">
                  Let&apos;s Discuss Your Requirements
                </h2>
                <p className="text-bodytext text-base leading-relaxed">
                  We&apos;re excited to learn about your ideas. Whether you have
                  a specific requirement in mind, need a consultation, or just
                  want to learn more, our team is ready to connect with you.
                </p>
              </div>

              <div className="border-t border-gray-200 my-6" />

              <div>
                <h3 className="text-xl sm:text-xl font-bold text-bodytext mb-4">
                  What to Expect <br className="hidden sm:block" /> Next
                </h3>
                <p className="text-bodytext text-base leading-relaxed">
                  Once you submit the form, one of our specialists will review
                  your message and get back to you within 24-48 business hours.
                  We look forward to exploring how we can create impactful
                  digital solutions together.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl font-bold text-bodytext mb-6 text-center">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 shadow-lg"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-base font-medium text-bodytext mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full px-3 py-2 bg-gray-100 text-bodytext border border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-medium text-bodytext mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-3 py-2 bg-gray-100 text-bodytext border border-gray-300"
                      required
                    />
                  </div>
                </div>

                {/* Company + Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-base font-medium text-bodytext mb-2"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="w-full px-3 py-2 bg-gray-100 text-bodytext border border-gray-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-base font-medium text-bodytext mb-2"
                    >
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      id="service"
                      className="w-full px-3 py-2 bg-gray-100 text-bodytext border border-gray-300"
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
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-bodytext mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-100 text-bodytext border border-gray-300 resize-none"
                  />
                </div>

                {/* reCAPTCHA v2 */}
                <div>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    onChange={(token) => setRecaptchaToken(token)}
                  />
                </div>

                {/* Terms */}
                <p className="text-xs text-bodytext">
                  *By submitting this form, you have read and agreed to L&A Web
                  Services&nbsp;
                  <Link
                    href="/terms-conditions"
                    className="text-blue-600 hover:underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and&nbsp;
                  <Link
                    href="/privacy-policy"
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`relative group overflow-hidden rounded-full bg-primary text-white px-6 py-3 w-full sm:w-auto font-medium text-base transition-all duration-300 ${
                      loading
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-hover"
                    }`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center space-x-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 01-8 8z"
                          ></path>
                        </svg>
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="relative z-10">Send Message</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center relative">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
            {/* 👇 Add this line to display status */}
            {status && (
              <p
                className={`text-sm mt-4 ${
                  status.startsWith("✅")
                    ? "text-green-600"
                    : status.startsWith("⚠️")
                      ? "text-yellow-600"
                      : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}

            {/* Check Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="green"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Message */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Thank You!
            </h2>
            <p className="text-gray-600 text-sm">
              Your message has been sent successfully. Our team will reach out
              to you soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
