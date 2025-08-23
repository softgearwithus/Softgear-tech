import React from "react";
import { FaCheckCircle, FaHandsHelping, FaUserTie, FaCogs } from "react-icons/fa";
import exampleImage from "../assets/why.jpg"; // replace with actual image

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At <strong>Softgear Technologies Pvt. Ltd.</strong>, we deliver more than services —
          we become your <strong>growth partner</strong>. With innovation, affordability, and
          a result-oriented approach, we empower startups and SMEs to thrive in the digital economy.
        </p>
      </div>

      {/* Content */}
      <div className="mt-14 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={exampleImage}
            alt="Softgear Collaboration"
            className="rounded-2xl w-full object-cover shadow-lg"
            style={{ height: "480px" }}
            loading="lazy"
          />
        </div>

        {/* Right Text with Highlights */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            The Softgear Advantage
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We go beyond being a service provider — we act as your business
            partner, ensuring that every solution we deliver is tailored to
            your unique needs and built for long-term growth.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700">
                <strong>Affordable yet Premium</strong> – Tiered packages make world-class
                solutions accessible to businesses of all sizes.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaCogs className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700">
                <strong>Comprehensive Services</strong> – From websites & apps to branding,
                SEO, and compliance, everything under one roof.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaUserTie className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700">
                <strong>Expert Team</strong> – Industry professionals with proven experience
                in delivering growth-focused solutions.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaHandsHelping className="text-blue-600 text-xl mt-1" />
              <p className="text-gray-700">
                <strong>Dedicated Support</strong> – Priority WhatsApp & call assistance,
                account managers, and strategy meet-ups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
