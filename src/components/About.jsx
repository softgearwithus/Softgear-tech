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
          At <strong>Softgear Technologies</strong>, we started with a simple but
          powerful vision — to empower local businesses struggling to survive in
          the digital era. While large agencies charge high fees with little
          value, many small businesses lack even the basics, like a proper Google
          My Business presence. We’re here to change that.
        </p>
      </div>

      {/* Content Grid */}
      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
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
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Who We Are</h3>
          <p className="text-gray-600 leading-relaxed">
            We provide <strong>end-to-end digital solutions</strong> — from
            full-stack websites & mobile apps to{" "}
            <strong>branding, SEO, Google Business, and digital marketing</strong>.
            Our goal is to make premium digital solutions affordable and
            result-driven. With tiered service packages and a risk-free first-month
            trial, we make digital growth accessible for every entrepreneur.
          </p>

          {/* Vision & Mission */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Our Vision</h4>
              <p className="mt-2 text-gray-600 leading-relaxed">
                To <strong>digitalize 75 million SMEs in India</strong>, giving
                them the visibility and tools needed to grow, scale, and
                succeed in today’s competitive market.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900">Our Mission</h4>
              <p className="mt-2 text-gray-600 leading-relaxed">
                To provide <strong>innovative, affordable, and scalable</strong>{" "}
                digital solutions that help businesses connect with their
                audience, strengthen their brand, and achieve measurable growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Section for Professional Feel */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          Beyond empowering local businesses, we are also developing{" "}
          <strong>cutting-edge software products</strong> for healthcare,
          e-commerce, and retail, while leveraging{" "}
          <strong>AI and automation</strong> to improve efficiency and unlock
          growth opportunities.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
