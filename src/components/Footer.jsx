import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaArrowUp,
} from "react-icons/fa6";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-[#022B5F] via-[#034077] to-[#022B5F] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-white/20 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white/20 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Softgear Technologies
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transforming ideas into digital reality with innovative solutions
                for startups and SMEs worldwide.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: FaFacebookF, href: "#", color: "hover:text-blue-400" },
                  { icon: FaLinkedinIn, href: "#", color: "hover:text-blue-500" },
                  { icon: FaXTwitter, href: "#", color: "hover:text-gray-400" },
                  { icon: FaYoutube, href: "#", color: "hover:text-red-500" },
                  { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {["Our Philosophy", "Services", "Portfolio", "About Us", "Careers", "Blog"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">
                Our Services
              </h4>
              <ul className="space-y-3">
                {["Website Development", "App Development", "Shopify E-commerce", "Graphic Design", "Automation", "Digital Marketing"].map(
                  (service, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                      >
                        {service}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">
                Get In Touch
              </h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <FaPhone className="text-blue-400" />
                  <span>+91 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaEnvelope className="text-blue-400" />
                  <span>info@softgeartech.com</span>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <FaLocationDot className="text-blue-400 mt-1" />
                  <span>Your Location, City, Country</span>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 flex-1"
                  />
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left text-sm text-gray-300">
                Made with{" "}
                <span className="text-red-500 animate-pulse">❤</span> in India.
                Copyright © {new Date().getFullYear()} Softgear Technologies
                Private Limited. All rights reserved.
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>

                {/* Scroll to Top Button */}
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Scroll to top"
                >
                  <FaArrowUp className="text-white group-hover:translate-y-[-2px] transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
