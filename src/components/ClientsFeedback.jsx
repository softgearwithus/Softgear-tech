import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const feedbacks = [
  {
    name: "Kelli Fox",
    title: "CEO, Astrolife, Australia",
    feedback:
      "DigiMantra's technical proficiency & communication was outstanding throughout the project. They were flexible, making the entire development process hassle-free. I would recommend them to those seeking a professional development team.",
    rating: 5,
    avatar: "KF",
    bgColor: "from-blue-500 to-indigo-600",
  },
  {
    name: "Valters Lauzums",
    title: "Partner, Hypersonic, USA",
    feedback:
      "Great work, reliable and detailed work. They are committed to providing work of the highest caliber and strive for extraordinary professionalism. Their consistent performance reflected their commitment to delivering quality outcomes.",
    rating: 5,
    avatar: "VL",
    bgColor: "from-purple-500 to-pink-600",
  },
  {
    name: "Sarah Johnson",
    title: "Marketing Director, TechCorp, Canada",
    feedback:
      "Exceptional service and innovative solutions. The team delivered beyond our expectations and helped us achieve remarkable growth in our digital presence.",
    rating: 5,
    avatar: "SJ",
    bgColor: "from-green-500 to-teal-600",
  },
  {
    name: "Michael Chen",
    title: "Founder, StartupX, Singapore",
    feedback:
      "Professional, efficient, and results-driven. They transformed our business idea into a fully functional platform that exceeded all our requirements.",
    rating: 5,
    avatar: "MC",
    bgColor: "from-orange-500 to-red-600",
  },
];

const ClientsFeedback = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover how we drive digital transformation for businesses worldwide
            with our innovative solutions and exceptional service.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="relative"
        >
          {feedbacks.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col hover:border-blue-300/50">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-300 transition-colors duration-300">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${client.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {client.avatar}
                  </div>
                </div>

                {/* Feedback */}
                <div className="flex-grow">
                  <p className="text-gray-700 italic text-center leading-relaxed mb-6 text-base">
                    "{client.feedback}"
                  </p>
                </div>

                {/* Rating */}
                <div className="text-center mb-4">
                  <div className="text-yellow-400 text-xl mb-2">
                    {Array.from({ length: client.rating }, (_, i) => (
                      <span
                        key={i}
                        className="inline-block animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - client.rating }, (_, i) => (
                      <span key={i} className="text-gray-300">
                        ☆
                      </span>
                    ))}
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center">
                  <div className="font-bold text-gray-800 text-lg mb-1">
                    {client.name}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {client.title}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="swiper-button-prev-custom w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-lg">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="swiper-button-next-custom w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 shadow-lg">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active-custom {
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default ClientsFeedback;
