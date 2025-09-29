import Navbar from "./Navbar"
import MiniCard from "./miniCard"
import SlidingBanner from "./SlidingBanner"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative min-h-screen bg-gradient-to-br from-[#111d39] via-[#1b378a] to-green-800 px-2 sm:px-0">
        <Navbar className="absolute top-0 left-0 right-0" />

        {/* Left side cards */}


        {/* Right side cards */}

        <MiniCard
          icon="🚀"
          value="Launch"
          label="Complete startup solutions"
          className="absolute bottom-16 lg:bottom-20 right-2 sm:right-4 lg:right-8 xl:right-16 hidden lg:block"
        />

        <div className="relative mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-16 text-center w-full px-3 sm:px-4 md:px-6 lg:px-8 text-white overflow-visible">
          <motion.h1
            className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-tight whitespace-nowrap sm:whitespace-normal"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Softgear Technologies
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 leading-relaxed font-light tracking-wide text-blue-100 max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering startups & SMEs with{" "}
            <span className="font-semibold text-teal-300">comprehensive digital solutions</span>
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 leading-relaxed font-normal text-gray-200 max-w-4xl mx-auto px-2 hidden sm:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From{" "}
            <span className="text-blue-300 font-medium">web development</span> and{" "}
            <span className="text-teal-300 font-medium">mobile apps</span> to{" "}
            <span className="text-green-300 font-medium">branding, SEO</span>, and{" "}
            <span className="text-yellow-300 font-medium">compliance solutions</span> - we provide end-to-end digital services.
          </motion.p>

          <motion.div
            className="mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gradient bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
              Ready to Get Started?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-300 mb-3 sm:mb-4 md:mb-6 px-2">
              Transform your business with our{" "}
              <span className="font-semibold text-teal-300">proven digital solutions</span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-4 sm:mb-6 md:mb-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.button
              className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-2xl font-bold text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-700 group overflow-hidden transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 backdrop-blur-sm shadow-lg shadow-purple-500/30"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Left to right fill overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-2xl"></div>

              {/* Content */}
              <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                <motion.span
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  📅
                </motion.span>
                <span className="font-extrabold text-white drop-shadow-md">
                  Schedule a Meet
                </span>

              </span>
            </motion.button>
            <motion.button
              className="border-2 border-white/40 hover:border-white/60 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base transition duration-300 backdrop-blur-sm hover:bg-white/10"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <SlidingBanner />
          </motion.div>
        </div>
      </div>
    </>
  )
}
export default Hero