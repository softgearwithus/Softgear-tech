// GetInTouch.jsx
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp integration only
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const whatsappNumber = "919041029969"; // 👉 Replace with your WhatsApp number (no + sign)
    const text = `👋 Hello, my name is ${formData.name}.
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
💬 Message: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-6 md:px-20">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Have questions or need assistance? We’re here to help you transform your business into a digital brand.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Contact Information
          </h2>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
              <span>Mohali, Punjab, India</span>
            </li>
            <li className="flex items-start gap-4">
              <FaEnvelope className="text-blue-600 text-xl mt-1" />
              <span>technologiessoftgear@gmail.com</span>
            </li>
            <li className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-600 text-xl mt-1" />
              <span>+91 90410 29969</span>
            </li>
            <li className="flex items-start gap-4">
              <FaClock className="text-blue-600 text-xl mt-1" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send Us a Message on WhatsApp
          </h2>
          <form onSubmit={handleWhatsApp} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 90410 29969"
                  className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write your message here..."
                className="mt-2 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition"
            >
              <FaWhatsapp /> Send via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Map Section (Mohali) */}
      <div className="mt-20 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Mohali Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.897035621033!2d76.71944431498873!3d30.70464998164883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef3e51df9fdf%3A0x5a9ff7dc4d5b1e19!2sMohali%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1702471838000!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
