import React from "react";

const Packages = () => {
  const packages = [
    {
      name: "Starter Package",
      description:
        "Perfect for small businesses taking their first step into digital. Build a strong online presence with essential tools and support.",
      features: [
        "Professional website (up to 5 pages)",
        "Google My Business setup & optimization",
        "Basic SEO setup",
        "Social media page creation",
        "1 Month Support",
      ],
    },
    {
      name: "Growth Package",
      description:
        "Designed for growing businesses that want to scale and reach more customers with digital marketing and branding support.",
      features: [
        "Custom website with CMS",
        "Advanced SEO optimization",
        "Google Ads & Facebook Ads setup",
        "Brand identity & creative design",
        "3 Months Support & Maintenance",
      ],
    },
    {
      name: "Premium Package",
      description:
        "Comprehensive solution for established businesses looking to dominate their industry with advanced strategies and automation.",
      features: [
        "E-commerce or Enterprise Website",
        "Full SEO & analytics tracking",
        "Complete digital marketing suite",
        "AI-powered workflow automation",
        "6 Months Support & Consultation",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Packages
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          At <strong>Softgear Technologies Pvt. Ltd.</strong>, we design flexible
          and result-driven packages tailored to empower startups, SMEs, and
          enterprises. Choose the package that fits your business journey and
          let us help you grow.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {pkg.name}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {pkg.description}
            </p>
            <ul className="space-y-3 flex-1">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">✔</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button className="w-full py-3 px-6 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
