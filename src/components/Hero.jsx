import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/hero-image.png";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative bg-blue-800 text-gray-900 min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 flex flex-col md:flex-row items-center gap-12">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            We Build <span className="text-white">Ideas into Reality</span>
          </h1>
          <p className="mt-6 text-lg text-white">
            From websites to apps, design to marketing — your all-in-one digital
            partner. Let's create something amazing together.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-lg font-semibold text-white shadow-lg transition">
            <Link to="/intouch">  Start Your Project</Link>
            </button>
          
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing Background */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
            {/* Hero Illustration */}
            <img
              src={HeroImage}
              alt="Tech Illustration"
              className="relative z-10 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]"
        >
          <path
            d="M321.39,56.44c58.39,0,113.47,15.13,168.15,30.26,58.46,15.85,117.66,31.7,176.13,31.7s117.67-15.85,176.13-31.7C950.1,71.57,1005.18,56.44,1063.57,56.44s113.47,15.13,168.15,30.26V0H0V86.7C53.3,71.57,107.48,56.44,165.87,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}
