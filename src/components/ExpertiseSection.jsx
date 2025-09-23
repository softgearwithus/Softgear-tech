// ExpertiseSection.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const expertiseData = [
  {
    title: "Idea Execution & Implementation",
    description:
      "Transform your innovative ideas into reality with our comprehensive execution strategies and technical implementation.",
    bgGradient: "from-yellow-50 via-orange-50 to-red-50",
    darkAccent: "from-orange-600 to-red-600",
    borderColor: "border-orange-300/60",
    textColor: "text-orange-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Shopify E-commerce",
    description:
      "Build powerful, scalable online stores with custom Shopify solutions that drive sales and enhance user experience.",
    bgGradient: "from-green-50 via-emerald-50 to-teal-50",
    darkAccent: "from-emerald-600 to-teal-600",
    borderColor: "border-emerald-300/60",
    textColor: "text-emerald-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
      </svg>
    ),
  },
  {
    title: "App Development",
    description:
      "Create feature-rich mobile applications for iOS and Android with cutting-edge technology and seamless user interfaces.",
    bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
    darkAccent: "from-blue-600 to-purple-600",
    borderColor: "border-blue-300/60",
    textColor: "text-blue-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: "Website Development",
    description:
      "Build responsive, high-performance websites with modern technologies and optimized user experiences across all devices.",
    bgGradient: "from-cyan-50 via-blue-50 to-indigo-50",
    darkAccent: "from-cyan-600 to-indigo-600",
    borderColor: "border-cyan-300/60",
    textColor: "text-cyan-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description:
      "Create stunning visual identities, logos, and marketing materials that captivate your audience and strengthen your brand.",
    bgGradient: "from-pink-50 via-rose-50 to-red-50",
    darkAccent: "from-pink-600 to-red-600",
    borderColor: "border-pink-300/60",
    textColor: "text-pink-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
  },
  {
    title: "Automation",
    description:
      "Streamline your business processes with intelligent automation solutions that increase efficiency and reduce manual work.",
    bgGradient: "from-gray-50 via-slate-50 to-zinc-50",
    darkAccent: "from-gray-600 to-slate-600",
    borderColor: "border-gray-300/60",
    textColor: "text-gray-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Compliances",
    description:
      "Ensure your business meets all regulatory requirements with our comprehensive compliance solutions and documentation support.",
    bgGradient: "from-violet-50 via-purple-50 to-fuchsia-50",
    darkAccent: "from-violet-600 to-fuchsia-600",
    borderColor: "border-violet-300/60",
    textColor: "text-violet-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ExpertiseSection() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, threshold: 0.2, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getBackgroundGradient = () => {
    if (hoveredCard !== null) {
      return `bg-gradient-to-br ${expertiseData[hoveredCard].bgGradient}`;
    }

  };

  const getCardStyles = (idx) => {
    const isHovered = hoveredCard === idx;
    const item = expertiseData[idx];

    if (isHovered) {
      return {
        border: item.borderColor,
        iconBg: `bg-gradient-to-br ${item.darkAccent}`,
        titleColor: item.textColor,
        underlineColor: `bg-gradient-to-r ${item.darkAccent}`,
        linkColor: item.textColor
      };
    }

    return {
      border: "border-gray-200/60 hover:border-indigo-300/60",
      iconBg: "bg-gradient-to-br from-indigo-500 to-cyan-500",
      titleColor: "text-gray-800 group-hover:text-indigo-700",
      underlineColor: "bg-gradient-to-r from-indigo-500 to-cyan-500",
      linkColor: "text-indigo-600 hover:text-indigo-800"
    };
  };

  return (
    <section className={`${getBackgroundGradient()} py-16 relative overflow-hidden transition-all duration-700 ease-in-out`}>
      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12"
          variants={headingVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Expertise
          </h2>
          <p className="text-base text-indigo-600 mb-4">
            End-to-End Digital Solutions for Startups & SMEs
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {expertiseData.map((item, idx) => {
            const cardStyles = getCardStyles(idx);
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl border ${cardStyles.border} relative group transition-all duration-500 shadow-lg hover:shadow-xl`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-6 relative">
                  <div className={`flex items-center justify-center w-14 h-14 ${cardStyles.iconBg} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {item.icon}
                  </div>

                  <h3 className={`text-lg font-bold ${cardStyles.titleColor} mb-2 transition-colors duration-300`}>
                    {item.title}
                  </h3>
                  <div className={`w-12 h-0.5 ${cardStyles.underlineColor} mb-3 rounded-full group-hover:w-16 transition-all duration-300`}></div>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    {item.description}
                  </p>

                  <div className={`flex items-center ${cardStyles.linkColor} transition-colors duration-300 cursor-pointer group/link`}>
                    <span className="text-sm font-semibold">Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <div className="w-16 h-16 border border-gray-300 rounded-full"></div>
                    <div className="absolute top-3 left-3 w-10 h-10 border border-gray-400 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

