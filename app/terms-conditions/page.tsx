// app/terms/page.tsx
"use client";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen pt-8">
      {/* Blue Header Box (container-width only, no rounded) */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary text-white py-16 text-center">
            <h1 className=" text-3xl sm:text-4xl font-bold">
              Terms and Conditions for L&amp;A Web Site
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section (no extra bg, default page bg) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-base text-bodytext mb-8 pt-8">
          <strong>Last updated: September 26, 2025</strong>
        </p>

        {/* Intro */}
        <section className="mb-12">
          <p className="text-bodytext leading-relaxed mb-4 text-justify">
            Please read these Terms and Conditions carefully before using Our
            Service.
          </p>
          <p className="text-bodytext leading-relaxed  text-justify">
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </p>
        </section>

        {/* Acknowledgment */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-bodytext mb-8">
            Acknowledgment
          </h2>
          <p className="text-bodytext leading-relaxed mb-4  text-justify">
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service.
          </p>
          <p className="text-bodytext leading-relaxed  text-justify">
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service.
          </p>
        </section>

        {/* Links to Other Websites */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-bodytext mb-8">
            Links to Other Websites
          </h2>
          <p className="text-bodytext leading-relaxed  text-justify">
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by the Company.
          </p>
          <p className="text-bodytext leading-relaxed  text-justify">
            The Company has no control over, and assumes no responsibility for,
            the content, privacy policies, or practices of any third party web
            sites or services. You further acknowledge and agree that the
            Company shall not be responsible or liable, directly or indirectly,
            for any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods or
            services available on or through any such web sites or services.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-bodytext mb-8">
            Limitation of Liability
          </h2>
          <p className="text-bodytext leading-relaxed  text-justify">
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of this Terms and Your exclusive remedy for all of the
            foregoing shall be limited to the amount actually paid by You
            through the Service or 100 USD if You haven’t purchased anything
            through the Service.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-bodytext mb-8">
            Governing Law
          </h2>
          <p className="text-bodytext leading-relaxed text-justify">
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Terms and Your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
          </p>
        </section>

        {/* Changes to These Terms */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-bodytext mb-8">
            Changes to These Terms and Conditions
          </h2>
          <p className="text-bodytext leading-relaxed text-justify">
            We reserve the right, at Our sole discretion, to modify or replace
            these Terms at any time. If a revision is material We will make
            reasonable efforts to provide at least 30 days’ notice prior to any
            new terms taking effect.
          </p>
          <p className="text-bodytext leading-relaxed text-justify">
            By continuing to access or use Our Service after those revisions
            become effective, You agree to be bound by the revised terms.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-bodytext mb-8">
            Contact Us
          </h2>
          <p className="text-bodytext leading-relaxed text-justify">
            If you have any questions about these Terms and Conditions, You can
            contact us:{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              click here
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
