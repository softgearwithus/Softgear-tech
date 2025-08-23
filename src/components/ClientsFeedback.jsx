import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const feedbacks = [
  {
    name: "Kelli Fox",
    title: "CEO, Astrolife, Australia",
    feedback:
      "DigiMantra’s technical proficiency & communication was outstanding throughout the project. They were flexible, making the entire development process hassle-free. I would recommend them to those seeking a professional development team.",
   
    rating: 5,
  },
  {
    name: "Valters Lauzums",
    title: "Partner, Hypersonic, USA",
    feedback:
      "Great work, reliable and detailed work. They are committed to providing work of the highest caliber and strive for extraordinary professionalism. Their consistent performance reflected their commitment to delivering quality outcomes.",
 
    rating: 5,
  },
  // Add more feedback objects here...
];

const ClientsFeedback = () => {
  return (
    <div className="py-12 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">Our Clients Feedback</h2>
      <p className="text-gray-500 mt-2">
        Discover how we drive digital transformation for businesses worldwide.
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        className="mt-14"
      >
        {feedbacks.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="relative border rounded-2xl p-6 shadow-sm bg-white h-full flex flex-col overflow-visible">
              {/* Avatar */}
          

              {/* Feedback */}
              <div className="mt-14 text-gray-600 italic text-center">
                "{client.feedback}"
              </div>

              {/* Name & Title */}
              <div className="mt-4 font-bold text-center">{client.name}</div>
              <div className="text-sm text-gray-400 text-center">
                {client.title}
              </div>

              {/* Rating */}
              <div className="mt-3 text-yellow-400 text-center text-lg">
                {"★".repeat(client.rating)}{"☆".repeat(5 - client.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsFeedback;
