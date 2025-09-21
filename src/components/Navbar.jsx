// Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-cyan-500 text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold">Softgear Technologies</span>
            <span className="text-gray-600 text-xs sm:text-sm font-medium hidden md:block">Pvt. Ltd.</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 text-gray-700 font-medium">
          {["About Us", "What We Do", "Packages", "Blog"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                className="relative py-2 px-1 md:px-2 lg:px-3 hover:text-cyan-500 transition-colors duration-300 group text-xs md:text-sm lg:text-base"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Get in Touch Button (Desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/intouch"
              className="hidden md:block border-2 border-cyan-500 text-cyan-500 px-3 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Hamburger */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none text-base sm:text-lg p-1 sm:p-2"
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-md overflow-hidden"
      >
        <ul className="flex flex-col items-center py-4 sm:py-6 space-y-3 sm:space-y-4 text-gray-700 font-medium">
          {["About Us", "What We Do", "Packages", "Blog"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                className="hover:text-cyan-500 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-cyan-50 text-sm sm:text-base"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex justify-center pb-4 sm:pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/intouch"
              className="border-2 border-cyan-500 text-cyan-500 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
