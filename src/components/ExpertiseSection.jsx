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
    img: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=900&auto=format&fit=crop&q=70",
  },
  {
    title: "Mobile App Development",
    description:
      "Feature-rich, cross-platform apps for Android & iOS, built for scalability and performance.",
    img: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=900&auto=format&fit=crop&q=70",
  },
  {
    title: "Graphics & Branding",
    description:
      "Creative design, logos, and branding materials that strengthen your business identity.",
    img: "https://images.unsplash.com/photo-1613759612065-d5971d32ca49?w=900&auto=format&fit=crop&q=70",
  },
  {
    title: "SEO Optimization",
    description:
      "Full-stack SEO strategies to increase visibility, organic traffic, and conversions.",
    img: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=900&auto=format&fit=crop&q=70",
  },
  {
    title: "Digital Marketing",
    description:
      "Targeted campaigns across Google, Facebook, and Instagram to drive growth.",
    img: "https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?w=900&auto=format&fit=crop&q=70",
  },
  {
    title: "Business Consulting",
    description:
      "CA-backed startup compliance, tax filing, and growth strategies — tech + legal under one roof.",
    img: "https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=900&auto=format&fit=crop&q=70",
  },
];

export default function ExpertiseSection() {
  const settings = {
    // IMPORTANT: mobile-first so phones start at 1 slide
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    adaptiveHeight: true,

    // Breakpoints are MIN-WIDTH when mobileFirst = true
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },  // ≥768px => 2
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // ≥1024px => 3
    ],
  };

  return (
    <section className="bg-white py-20">
      {/* Inline CSS: spacing + mobile width enforcement */}
      <style>{`
        /* Make slider use full width */
        .slick-slider, .slick-list, .slick-track { width: 100%; }

        /* Consistent gap between slides without squishing content */
        .slick-list { margin: 0 -12px; }
        .slick-slide { padding: 0 12px; }

        /* Ensure each slide's inner wrapper stretches */
        .slick-slide > div { display: flex; width: 100%; }

        /* On phones, guarantee one full-width card and hide partial peeks */
        @media (max-width: 767.98px) {
          .slick-list { overflow: hidden; }
          .slick-slide { padding: 0 10px; }
          .slick-slide > div { width: 100% !important; }
        }

        /* Nicer dots */
        .slick-dots { bottom: -30px; }
        .slick-dots li button:before { font-size: 11px; opacity: .45; }
        .slick-dots li.slick-active button:before { opacity: 1; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Expertise</h2>
        <p className="mt-3 text-lg text-blue-600">
          End-to-End Digital Solutions for Startups & SMEs
        </p>

        <div className="mt-14">
          <Slider {...settings}>
            {expertiseData.map((item, idx) => (
              <div key={idx} className="w-full">
                <div className="relative w-full rounded-xl shadow-lg overflow-hidden min-h-[420px] flex flex-col group">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="bg-gradient-to-b from-blue-700/90 to-blue-900/90 text-white p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <div className="w-12 h-[3px] bg-blue-400 mb-3"></div>
                      <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                    {/* optional footer or CTA could go here */}
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
