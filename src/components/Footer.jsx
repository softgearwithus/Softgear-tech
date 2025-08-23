import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#022B5F] text-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-start gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-4 text-sm mb-6">
            <a href="#" className="hover:underline">
              Our Philosophy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Assets
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              News
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Careers
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              DMLearning
            </a>
          </div>

          <div className="flex gap-5 text-xl">
            <a href="#" className="hover:text-blue-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Divider for desktop */}
        <div className="hidden md:block w-px bg-gray-600 h-28"></div>

        {/* Right Section */}
        <div className="flex-1">
          <h4 className="text-base font-semibold mb-4">Join Our Community</h4>
          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-md border border-gray-300 text-black focus:outline-none w-full"
            />
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-r-md font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <hr className="my-10 border-gray-600" />

      <div className="text-center text-sm text-gray-300">
        Made with <span className="text-red-500">❤</span> in India. Copyright ©{" "}
        {new Date().getFullYear()} Softgear technologies private limited. All rights reserved.{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        .
      </div>
    </footer>
  );
}
