// StatsSection.jsx
import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaGlobeAsia, FaRocket, FaBriefcase } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <FaBriefcase className="text-blue-600 text-4xl mb-3" />,
      end: 5,
      suffix: "+",
      label: "Years of Experience"
    },
    {
      id: 2,
      icon: <FaUsers className="text-blue-600 text-4xl mb-3" />,
      end: 50,
      suffix: "+",
      label: "SME & Startup Clients Onboarded"
    },
    {
      id: 3,
      icon: <FaGlobeAsia className="text-blue-600 text-4xl mb-3" />,
      end: 10,
      suffix: "+",
      label: "Industries Served"
    },
    {
      id: 4,
      icon: <FaRocket className="text-blue-600 text-4xl mb-3" />,
      end: 100,
      suffix: "+",
      label: "Digital Solutions Delivered"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Empowering Startups & SMEs with Digital Excellence
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          From websites and mobile apps to branding, SEO, and compliance —
          we’ve built solutions that help businesses grow, scale, and stand out.
        </p>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white shadow-md rounded-xl py-8 px-6 hover:shadow-lg transition flex  flex-col justify-center text-center items-center "
            >
              {stat.icon}
              <h3 className="text-4xl font-bold text-blue-600 mt-4">
                <CountUp end={stat.end} duration={2} />{stat.suffix}
              </h3>
              <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
