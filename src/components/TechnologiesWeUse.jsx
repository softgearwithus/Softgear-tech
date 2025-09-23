import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiWordpress,
  SiFramer,
  SiGreensock,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiKubernetes,
  SiAwsamplify,
  SiFlutter,
  SiReactquery,
} from "react-icons/si";
import { FaJava, FaMobileAlt, FaCode, FaServer, FaMobile, FaBrain } from "react-icons/fa";

const TechnologiesWeUse = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const techStack = {
    Frontend: [
      { name: "Next.js", icon: <SiNextdotjs size={24} />, color: "hover:border-gray-700" },
      { name: "React.js", icon: <SiReact size={24} color="#61DAFB" />, color: "hover:border-blue-400" },
      { name: "Vue.js", icon: <SiVuedotjs size={24} color="#42B883" />, color: "hover:border-green-400" },
      { name: "WordPress", icon: <SiWordpress size={24} color="#21759B" />, color: "hover:border-blue-600" },
      { name: "Framer", icon: <SiFramer size={24} color="#0055FF" />, color: "hover:border-blue-500" },
      { name: "GSAP", icon: <SiGreensock size={24} color="#88CE02" />, color: "hover:border-green-500" },
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs size={24} color="#3C873A" />, color: "hover:border-green-600" },
      { name: "Express.js", icon: <SiExpress size={24} />, color: "hover:border-gray-700" },
      { name: "MongoDB", icon: <SiMongodb size={24} color="#4DB33D" />, color: "hover:border-green-500" },
      { name: "Java", icon: <FaJava size={24} color="#E76F00" />, color: "hover:border-orange-500" },
      { name: "Python", icon: <SiPython size={24} color="#3776AB" />, color: "hover:border-blue-600" },
    ],
    Mobile: [
      { name: "React Native", icon: <SiReactquery size={24} color="#61DAFB" />, color: "hover:border-blue-400" },
      { name: "Flutter", icon: <SiFlutter size={24} color="#02569B" />, color: "hover:border-blue-600" },
      { name: "Android", icon: <FaMobileAlt size={24} color="#3DDC84" />, color: "hover:border-green-400" },
    ],
    "AI & ML": [
      { name: "TensorFlow", icon: <SiTensorflow size={24} color="#FF6F00" />, color: "hover:border-orange-500" },
      { name: "PyTorch", icon: <SiPytorch size={24} color="#EE4C2C" />, color: "hover:border-red-500" },
      { name: "Python AI", icon: <SiPython size={24} color="#3776AB" />, color: "hover:border-blue-600" },
    ],
  };

  const tabIcons = {
    Frontend: <FaCode className="mr-2" />,
    Backend: <FaServer className="mr-2" />,
    Mobile: <FaMobile className="mr-2" />,
    "AI & ML": <FaBrain className="mr-2" />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 py-16 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Technologies
            <br />
            <span className="text-blue-600">We Use</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Cutting-edge tools and frameworks that power our innovative digital solutions
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.keys(techStack).map((tab, index) => (
            <motion.button
              key={tab}
              variants={tabVariants}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeTab === tab
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/25"
                : "bg-white/80 text-gray-700 border border-gray-200/50 hover:bg-blue-50 hover:border-blue-300/50 backdrop-blur-sm"
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-1.5 text-xs">{tabIcons[tab]}</span>
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={activeTab} // Re-trigger animation when tab changes
        >
          {techStack[activeTab].map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              className={`group bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${tech.color}`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="w-full">
                  <h3 className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {tech.name}
                  </h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-500 mt-1.5 mx-auto"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section with additional info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Always Learning, Always Evolving
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our technology stack is constantly evolving. We stay ahead of the curve by adopting emerging technologies
              and best practices to deliver cutting-edge solutions that drive your business forward.
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesWeUse;



