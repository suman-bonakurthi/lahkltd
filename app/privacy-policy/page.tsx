// app/privacy/page.tsx  (veya projenin uygun klasörü)
'use client';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-8">
      {/* Blue Header Box (container-width only, no rounded) */}
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A3176] text-white py-16 text-center">
            <h1 className="text-[28px] sm:text-4xl  font-bold">
              Privacy Policy for L&amp;A Web Services
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section (no extra bg, default page bg) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-black mb-8 pt-8"><strong>Last updated: September 26, 2025</strong></p>

        {/* Intro */}
        <section className="mb-12">
          

          <p className="text-black leading-relaxed mb-4">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <p className="text-black leading-relaxed">
            We use Your Personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </section>

        {/* Interpretation and Definitions */}
        <section className="mb-12">
          <h2 className="text-[28px] font-bold text-black mb-8">Interpretation and Definitions</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Interpretation</h3>
            <p className="text-black leading-relaxed">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Definitions</h3>
            <p className="text-black leading-relaxed mb-4">For the purposes of this Privacy Policy:</p>
            <div className="space-y-4 text-black">
              <div>
                <span className="font-bold text-black">Company</span>
                <span> (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to L&A Web Services.</span>
              </div>
              <div>
                <span className="font-bold text-black">You</span>
                <span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
              </div>
              <div>
                <span className="font-bold text-black">Website</span>
                <span> refers to L&amp;A Services, accessible from L&amp;A</span>
              </div>
              <div>
                <span className="font-bold text-black">Service</span>
                <span> refers to the Website.</span>
              </div>
              <div>
                <span className="font-bold text-black">Personal Data</span>
                <span> is any information that relates to an identified or identifiable individual.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Collecting and Using Your Personal Data */}
        <section className="mb-12">
          <h2 className="text-[28px]  font-bold text-black mb-8">Collecting and Using Your Personal Data</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Types of Data Collected</h3>
            <p className="text-black leading-relaxed mb-4">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <div className="space-y-2 ml-4 text-black">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Email address</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-blackrounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>First name and last name</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Phone number</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Usage Data</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Use of Your Personal Data</h3>
            <p className="text-black leading-relaxed mb-4">The Company may use Personal Data for the following purposes:</p>
            <div className="space-y-3 ml-4 text-black">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>To provide and maintain our Service, including to monitor the usage of our Service.</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>To manage Your Account: to manage Your registration as a user of the Service.</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Changes to this Privacy Policy */}
        <section className="mb-12">
          <h2 className="text-[28px]  font-bold text-black mb-8">Changes to this Privacy Policy</h2>
          <p className="text-black leading-relaxed mb-4">
            We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="text-black leading-relaxed">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-12">
          <h2 className="text-[28px]  font-bold text-black mb-8">Contact Us</h2>
          <p className="text-black leading-relaxed">
            If you have any questions about this Privacy Policy, You can contact us:{' '}
            <a href="#" className="text-primary hover:underline font-medium">click here</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
