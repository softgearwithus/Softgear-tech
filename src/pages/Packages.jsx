import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import {
  FaRocket,
  FaStore,
  FaLightbulb,
  FaGlobe,
  FaWhatsapp,
  FaChartLine,
  FaCog,
  FaShoppingCart,
  FaUserTie,
  FaFileContract,
  FaMobile,
  FaPalette,
  FaSearch,
  FaBuilding
} from "react-icons/fa";

const Packages = () => {
  const [activeCategory, setActiveCategory] = useState("Business Starter");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const packageCategories = {
    "Business Starter": {
      icon: <FaRocket className="text-2xl" />,
      subtitle: "For businesses with zero online presence",
      description: "Perfect for small businesses taking their first step into the digital world",
      gradient: "from-blue-500 to-purple-600",
      hoverGradient: "from-blue-700 to-purple-800",
      accentColor: "blue",
      packages: [
        {
          name: "Basic Package",
          subtitle: "Essential Digital Presence",
          price: "Starting at ₹15,000",
          description: "Get your business online with essential tools and professional setup.",
          features: [
            { icon: <FaGlobe />, text: "GMB Listing & Optimization" },
            { icon: <FaGlobe />, text: "Basic Landing Page" },
            { icon: <FaWhatsapp />, text: "WhatsApp Business Setup" },
            { icon: <FaPalette />, text: "Graphics Design (10 per month)" },
          ],
          popular: false,
        },
        {
          name: "Medium Package",
          subtitle: "Complete Business Website",
          price: "Starting at ₹35,000",
          description: "Full business website with professional design and functionality.",
          features: [
            { icon: <FaGlobe />, text: "Full Business Website (4-5 pages)" },
            { icon: <FaBuilding />, text: "GMB Setup & Optimization" },
            { icon: <FaPalette />, text: "Professional Graphics Design" },
            { icon: <FaChartLine />, text: "Basic SEO Setup" },
          ],
          popular: true,
        },
        {
          name: "Advanced Package",
          subtitle: "Website + Admin Control",
          price: "Starting at ₹55,000",
          description: "Complete website solution with admin panel and marketing automation.",
          features: [
            { icon: <FaGlobe />, text: "Website + Admin Panel" },
            { icon: <FaPalette />, text: "Advanced Graphics Package" },
            { icon: <FaWhatsapp />, text: "WhatsApp Marketing Setup" },
            { icon: <FaCog />, text: "Content Management System" },
          ],
          popular: false,
        },
      ]
    },
    "E-Commerce": {
      icon: <FaStore className="text-2xl" />,
      subtitle: "For small businesses & women entrepreneurs",
      description: "Complete e-commerce solutions to start selling online instantly",
      gradient: "from-green-500 to-teal-600",
      hoverGradient: "from-green-700 to-teal-800",
      accentColor: "green",
      packages: [
        {
          name: "Shopify Starter",
          subtitle: "Complete E-commerce Setup",
          price: "Starting at ₹45,000",
          description: "Full Shopify store setup with SEO and marketing materials.",
          features: [
            { icon: <FaShoppingCart />, text: "Shopify E-commerce Setup" },
            { icon: <FaPalette />, text: "Product Graphics & Branding" },
            { icon: <FaSearch />, text: "SEO Optimization for Shopify" },
            { icon: <FaChartLine />, text: "Sales Analytics Setup" },
          ],
          popular: true,
        },
      ]
    },
    "Startup Dreams": {
      icon: <FaLightbulb className="text-2xl" />,
      subtitle: "For new ideas & dreams",
      description: "From concept to reality - complete startup ecosystem support",
      gradient: "from-orange-500 to-red-600",
      hoverGradient: "from-orange-700 to-red-800",
      accentColor: "orange",
      packages: [
        {
          name: "Dream to Reality",
          subtitle: "Complete Startup Package",
          price: "",
          description: "End-to-end startup solution from idea validation to launch.",
          features: [
            { icon: <FaUserTie />, text: "Business Consultancy" },
            { icon: <FaFileContract />, text: "Company Registration" },
            { icon: <FaLightbulb />, text: "Idea Research & Validation" },
            { icon: <FaMobile />, text: "MVP Development (App/Website)" },
          ],
          popular: true,
        },
      ]
    },
    "Website Types": {
      icon: <FaGlobe className="text-2xl" />,
      subtitle: "Different website solutions",
      description: "Choose from various website types based on your business needs",
      gradient: "from-indigo-500 to-purple-600",
      hoverGradient: "from-indigo-700 to-purple-800",
      accentColor: "indigo",
      packages: [
        {
          name: "Landing Page",
          subtitle: "Single Page Solution",
          price: "Starting at ₹12,000",
          description: "Professional single-page website for focused marketing campaigns.",
          features: [
            { icon: <FaGlobe />, text: "Responsive Landing Page Design" },
            { icon: <FaChartLine />, text: "Conversion Optimization" },
            { icon: <FaPalette />, text: "Custom Graphics" },
            { icon: <FaSearch />, text: "Basic SEO" },
          ],
          popular: false,
        },
        {
          name: "Corporate Website",
          subtitle: "Full Business Solution",
          price: "Starting at ₹65,000",
          description: "Complete corporate website with admin panel and advanced features.",
          features: [
            { icon: <FaBuilding />, text: "Multi-page Corporate Design" },
            { icon: <FaCog />, text: "Admin Panel Access" },
            { icon: <FaChartLine />, text: "Analytics Integration" },
            { icon: <FaSearch />, text: "Advanced SEO Package" },
          ],
          popular: true,
        },
      ]
    }
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

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 py-20 relative overflow-hidden" ref={ref}>
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            variants={headingVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Our
              <br />
              <span className="text-blue-600">Packages</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              At <strong className="text-blue-600">Softgear Technologies Pvt. Ltd.</strong>, we design flexible
              and result-driven packages tailored to empower startups, SMEs, and
              enterprises. Choose the package that fits your business journey.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {Object.keys(packageCategories).map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeCategory === category
                  ? `bg-gradient-to-r ${packageCategories[category].gradient} text-white shadow-lg`
                  : "bg-white/80 text-gray-700 border border-gray-200/50 hover:bg-blue-50 hover:border-blue-300/50 backdrop-blur-sm"
                  }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="mr-2">{packageCategories[category].icon}</span>
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Category Info */}
          <motion.div
            className="text-center mb-12"
            key={`category-info-${activeCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              {packageCategories[activeCategory].subtitle}
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              {packageCategories[activeCategory].description}
            </p>
          </motion.div>

          {/* Packages Grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            key={`packages-grid-${activeCategory}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            {packageCategories[activeCategory].packages.map((pkg, index) => (
              <motion.div
                key={`${activeCategory}-${pkg.name}-${index}`}
                variants={cardVariants}
                className={`group bg-white/95 hover:bg-gradient-to-br hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 backdrop-blur-md rounded-3xl p-8 border border-gray-200/60 hover:shadow-2xl hover:shadow-gray-500/30 transition-all duration-700 hover:-translate-y-3 relative overflow-hidden hover:border-gray-500/60 ${pkg.popular ? `ring-2 ring-${packageCategories[activeCategory].accentColor}-500/30 hover:ring-gray-400/50` : ''
                  }`}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(75, 85, 99, 0.4)",
                  rotateY: 2,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Animated background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-0 group-hover:opacity-90 transition-opacity duration-700 rounded-3xl`}></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className={`absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-all duration-1000 delay-100`}></div>
                  <div className={`absolute bottom-6 left-6 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-all duration-1000 delay-300`}></div>
                  <div className={`absolute top-1/2 left-4 w-1 h-1 bg-gray-400 rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-all duration-1000 delay-500`}></div>
                </div>

                {pkg.popular && (
                  <div className={`absolute top-0 right-0 bg-gradient-to-r ${packageCategories[activeCategory].gradient} group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-gray-200 group-hover:text-gray-800 text-white px-6 py-2 text-xs font-bold rounded-bl-2xl transition-all duration-500 shadow-lg group-hover:shadow-xl transform group-hover:scale-110 z-20`}>
                    <span className="relative z-10">POPULAR</span>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-gray-800/10 transition-all duration-300 rounded-bl-2xl"></div>
                  </div>
                )}

                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-100 mb-3 transition-all duration-500 transform group-hover:scale-105 group-hover:translate-x-1">
                    {pkg.name}
                  </h3>
                  <p className={`text-sm font-semibold text-${packageCategories[activeCategory].accentColor}-600 group-hover:text-gray-300 mb-3 transition-all duration-500 transform group-hover:translate-x-1`}>
                    {pkg.subtitle}
                  </p>
                  <p className={`text-3xl font-bold bg-gradient-to-r ${packageCategories[activeCategory].gradient} group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-gray-300 bg-clip-text text-transparent mb-4 transition-all duration-500 transform group-hover:scale-110 group-hover:translate-x-1`}>
                    {pkg.price}
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-all duration-500 transform group-hover:translate-x-1">
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-5 mb-10 relative z-10">
                  {pkg.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start group-hover:translate-x-2 transition-all duration-500"
                      style={{ transitionDelay: `${i * 50}ms` }}
                      whileHover={{ x: 4 }}
                    >
                      <div className={`text-${packageCategories[activeCategory].accentColor}-600 group-hover:text-gray-100 mr-4 mt-1 p-2 rounded-xl bg-${packageCategories[activeCategory].accentColor}-50 group-hover:bg-gray-600/30 group-hover:shadow-lg transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-200 font-medium transition-all duration-500 flex-1 leading-relaxed">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-5 px-8 bg-gradient-to-r ${packageCategories[activeCategory].gradient} group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-gray-300 group-hover:text-gray-800 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group/btn z-20`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 transition-all duration-300 group-hover/btn:tracking-wider">Get Started</span>
                  <div className="absolute inset-0 bg-white/10 group-hover/btn:bg-gray-800/10 transition-all duration-300 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 group-hover:via-gray-100/30 to-transparent transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out"></div>
                </motion.button>

                {/* Corner accent */}
                <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 rounded-full blur-xl`}></div>

                {/* Additional dark overlay for smoother transition */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-800/5 to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-10 border border-gray-200/60 max-w-5xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto group-hover:text-gray-700 transition-colors duration-300">
                Can't find the perfect package? We offer custom solutions tailored to your specific needs.
                Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transition-all duration-500 relative overflow-hidden group/cta"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Schedule Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 ease-out"></div>
                </motion.button>
                <motion.button
                  className="border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 px-10 py-5 rounded-2xl font-bold hover:bg-blue-50 hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </div>
              <div className="flex justify-center mt-8 space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Packages;
