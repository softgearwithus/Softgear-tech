// ExpertiseSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const expertiseData = [
  {
    title: "Website Development",
    description:
      "Responsive, high-performance websites with full-stack frontend and backend solutions.",
    img: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Mobile App Development",
    description:
      "Feature-rich, cross-platform apps for Android & iOS, built for scalability and performance.",
    img: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww"
  },
  {
    title: "Graphics & Branding",
    description:
      "Creative design, logos, and branding materials that strengthen your business identity.",
    img: "https://images.unsplash.com/photo-1613759612065-d5971d32ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYW5kaW5nfGVufDB8fDB8fHww"
  },
  {
    title: "SEO Optimization",
    description:
      "Full-stack SEO strategies to increase visibility, organic traffic, and conversions.",
    img: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Digital Marketing",
    description:
      "Targeted campaigns across Google, Facebook, and Instagram to drive growth.",
    img: "https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Business Consulting",
    description:
      "CA-backed startup compliance, tax filing, and growth strategies — tech + legal under one roof.",
    img: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJ1c2luZXNzfGVufDB8fDB8fHww"
  }
];

export default function ExpertiseSection() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900">Our Expertise</h2>
        <p className="mt-3 text-lg text-blue-600">
          End-to-End Digital Solutions for Startups & SMEs
        </p>

        {/* Slider */}
        <div className="mt-14">
          <Slider {...settings}>
            {expertiseData.map((item, idx) => (
              <div key={idx} className="px-3">
                <div className="relative rounded-xl shadow-lg overflow-hidden min-h-[440px] flex flex-col group">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Content */}
                  <div className="bg-gradient-to-b from-blue-700/90 to-blue-900/90 text-white p-6 flex flex-col flex-1 justify-between">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <div className="w-12 h-[3px] bg-blue-400 mb-4"></div>
                    <p className="text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
