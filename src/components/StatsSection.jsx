// StatsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaUsers, FaGlobeAsia, FaRocket, FaBriefcase, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function StatsSection() {
  const [startCount, setStartCount] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, threshold: 0.2, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    {
      id: 1,
      icon: <FaBriefcase className="text-blue-600 text-4xl mb-4" />,
      end: 5,
      suffix: "+",
      label: "Years of Experience",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      icon: <FaUsers className="text-cyan-600 text-4xl mb-4" />,
      end: 50,
      suffix: "+",
      label: "SME & Startup Clients Onboarded",
      gradient: "from-cyan-600 to-blue-700"
    },
    {
      id: 3,
      icon: <FaGlobeAsia className="text-indigo-600 text-4xl mb-4" />,
      end: 10,
      suffix: "+",
      label: "Industries Served",
      gradient: "from-indigo-600 to-blue-700"
    },
    {
      id: 4,
      icon: <FaRocket className="text-sky-600 text-4xl mb-4" />,
      end: 100,
      suffix: "+",
      label: "Digital Solutions Delivered",
      gradient: "from-sky-600 to-blue-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Main Hero Card - Left Side */}
          <motion.div
            variants={cardVariants}
            className="lg:row-span-2 bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl p-8 border border-gray-200/50 relative overflow-hidden backdrop-blur-sm shadow-lg"
          >
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
                Empowering
                <br />
                Startups &
                <br />
                SMEs with
                <br />
                <span className="text-blue-600">Digital</span>
                <br />
                <span className="text-blue-600">Excellence.</span>
              </h1>
              <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                From idea to execution through technology and consulting
              </p>
            </div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border border-gray-300 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 border border-gray-300 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-300 rounded-full"></div>
            </div>
          </motion.div>

          {/* Years of Experience Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl p-6 border border-gray-200/50 relative overflow-hidden group hover:border-blue-400/50 transition-all duration-500 backdrop-blur-sm shadow-lg"
          >
            <div className="relative z-10">
              <FaBriefcase className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                {startCount && (
                  <CountUp
                    end={5}
                    duration={4}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                )}+
              </h3>
              <p className="text-gray-700 font-semibold text-lg mb-2">Years of Experience</p>
              <p className="text-gray-600 text-sm">
                Building digital solutions with proven expertise and industry knowledge
              </p>
              {/* Mock chart */}
              <div className="mt-4 flex items-end space-x-1">
                <div className="w-2 h-8 bg-blue-500 rounded-sm"></div>
                <div className="w-2 h-12 bg-blue-600 rounded-sm"></div>
                <div className="w-2 h-6 bg-blue-500 rounded-sm"></div>
                <div className="w-2 h-10 bg-blue-600 rounded-sm"></div>
                <div className="w-2 h-14 bg-blue-500 rounded-sm"></div>
              </div>
            </div>
          </motion.div>

          {/* Clients Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl p-6 border border-gray-200/50 relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm shadow-lg"
          >
            <div className="relative z-10">
              <FaUsers className="text-cyan-600 text-4xl mb-4" />
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-2">
                {startCount && (
                  <CountUp
                    end={50}
                    duration={4}
                    delay={0.2}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                )}+
              </h3>
              <p className="text-gray-700 font-semibold text-lg mb-2">SME & Startup Clients</p>
              <p className="text-gray-600 text-sm">
                Trusted by growing businesses to scale their digital presence
              </p>
              {/* Client avatars mockup */}
              <div className="mt-4 flex -space-x-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-indigo-600 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-blue-700 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs text-white">+</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Industries Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl p-6 border border-gray-200/50 relative overflow-hidden group hover:border-indigo-400/50 transition-all duration-500 backdrop-blur-sm shadow-lg"
          >
            <div className="relative z-10">
              <FaGlobeAsia className="text-indigo-600 text-4xl mb-4" />
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent mb-2">
                {startCount && (
                  <CountUp
                    end={10}
                    duration={4}
                    delay={0.4}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                )}+
              </h3>
              <p className="text-gray-700 font-semibold text-lg mb-2">Industries Served</p>
              <p className="text-gray-600 text-sm">
                Cross-industry expertise from tech to healthcare and beyond
              </p>
              {/* Industry icons grid */}
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded border border-blue-200 flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                </div>
                <div className="w-8 h-8 bg-indigo-100 rounded border border-indigo-200 flex items-center justify-center">
                  <div className="w-3 h-3 bg-indigo-600 rounded-sm"></div>
                </div>
                <div className="w-8 h-8 bg-cyan-100 rounded border border-cyan-200 flex items-center justify-center">
                  <div className="w-3 h-3 bg-cyan-600 rounded-sm"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Digital Solutions Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl p-6 border border-gray-200/50 relative overflow-hidden group hover:border-sky-400/50 transition-all duration-500 backdrop-blur-sm shadow-lg"
          >
            <div className="relative z-10">
              <FaRocket className="text-sky-600 text-4xl mb-4" />
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-2">
                {startCount && (
                  <CountUp
                    end={100}
                    duration={4}
                    delay={0.4}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                )}+
              </h3>
              <p className="text-gray-700 font-semibold text-lg mb-2">Digital Solutions</p>
              <p className="text-gray-600 text-sm">
                From websites to mobile apps, branding to compliance solutions
              </p>
              {/* Solution types visualization */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-200 rounded">
                    <div className="w-3/4 h-1 bg-sky-600 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-200 rounded">
                    <div className="w-2/3 h-1 bg-blue-600 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-200 rounded">
                    <div className="w-1/2 h-1 bg-cyan-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

