// Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ correct import

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-cyan-500 text-2xl font-extrabold">Softgear</span>
          <span className="text-gray-500 text-sm">Technologies Pvt. Ltd.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-800 font-medium">
          <li>
            <Link to="/about" className="hover:text-cyan-500 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-cyan-500 transition">
              What We Do
            </Link>
          </li>
          <li>
            <Link to="/packages" className="hover:text-cyan-500 transition">
              Packages
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-cyan-500 transition">
              Blog
            </Link>
          </li>
         
        </ul>

        {/* Get in Touch Button (Desktop only) */}
        <Link
          to="/intouch"
          className="hidden md:block border border-cyan-500 text-cyan-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-white transition"
        >
          Get in Touch
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none text-xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center py-6 space-y-6 text-gray-800 font-medium">
            <li>
              <Link to="/about" className="hover:text-cyan-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-cyan-500 transition">
                What We Do
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-cyan-500 transition">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-cyan-500 transition">
                Blog
              </Link>
            </li>
           
          </ul>
          <div className="flex justify-center pb-6">
            <Link
              to="/intouch"
              className="border border-cyan-500 text-cyan-500 px-5 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-white transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
