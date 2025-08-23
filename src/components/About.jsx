import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Softgear Technologies
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Softgear Technologies Pvt. Ltd. is a forward-thinking{" "}
          <strong>digital solutions provider</strong> dedicated to transforming{" "}
          <strong>businesses into brands</strong>. We empower startups and SMEs
          across India with cutting-edge web, mobile, and marketing solutions,
          enabling them to compete and thrive in today’s digital economy.
        </p>
      </div>

      {/* Content */}
      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Softgear Technologies Team"
            className="rounded-2xl shadow-xl object-cover w-full md:w-[90%] h-96"
            loading="lazy"
          />
        </div>

        {/* Right Text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Who We Are
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            From full-stack websites & mobile apps to{" "}
            <strong>branding, SEO, Google Business, and digital marketing</strong>,
            we deliver everything businesses need to stand out in today’s
            competitive market — all under one roof. Our tiered premium packages
            and risk-free first-month trial make high-quality digital solutions
            accessible and affordable for every entrepreneur.
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Our Vision</h4>
              <p className="mt-2 text-gray-600 leading-relaxed">
                To <strong>digitalize 75 million SMEs in India</strong>, giving
                them the tools and visibility needed to excel in the competitive
                market.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Our Mission</h4>
              <p className="mt-2 text-gray-600 leading-relaxed">
                To provide innovative, affordable, and result-oriented digital
                solutions that help businesses grow, connect with their audience,
                and build lasting brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
