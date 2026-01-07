import React from "react";
import Footer from "../components/Footer.jsx"

const projects = [
  {
    title: "Luxury Hotel Booking Website",
    client: "Rakib Homestay",
    description:
      "A premium hotel website with online booking, room showcase, gallery, and WhatsApp inquiry system.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    title: "Taxi Service Business Website",
    client: "Guwahati Taxi Service",
    description:
      "SEO-optimized taxi website designed to rank on Google with instant call, booking form, and map integration.",
    tech: ["React", "SEO", "Google Maps API"],
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
  {
    title: "Startup Portfolio Builder Platform",
    client: "SaaS Product",
    description:
      "A dynamic portfolio builder allowing users to create professional portfolios with custom themes.",
    tech: ["MERN Stack", "JWT", "Cloud Storage"],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
];

export default function CaseStudyStyleProjects() {
  return (
    <>
    <section className="bg-[#fffaf7] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-orange-500 font-semibold tracking-wide">
            Bespoke Design & Development
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            A Small Glimpse of the Best of Our Work
          </h2>
        </div>

        {/* TABS (STATIC LIKE SCREENSHOT) */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {[
            "Web Development",
            "Mobile App Development",
            "Software Development",
            "E-Commerce",
            "In-House Products",
          ].map((tab, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-full border text-sm font-medium ${
                i === 0
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-orange-500 text-orange-500 hover:bg-orange-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PROJECT SECTIONS */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* TEXT */}
              <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <h3 className="text-3xl font-bold leading-snug">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-600 font-medium">
                  Client: {project.client}
                </p>

                <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
                  {project.description}
                </p>

                {/* CORE TECH */}
                <div className="mt-8">
                  <p className="text-orange-500 font-semibold mb-3">
                    Core Technologies
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm bg-white border rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* IMAGE */}
              <div
                className={`rounded-2xl overflow-hidden shadow-xl ${
                  index % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
}
