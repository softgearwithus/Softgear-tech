import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const SuccessStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stories = [
    {
      category: "E-Commerce",
      title: "Suscel",
      description: "Revolutionary e-commerce platform transforming online shopping experience",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob3BwaW5nfGVufDB8fDB8fHww",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      results: ["300% increase in sales", "50K+ active users"],
    },
    {
      category: "Home Services",
      title: "Bizzio",
      description: "Connecting homeowners with trusted service professionals seamlessly",
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D",
      gradient: "from-indigo-600 to-blue-600",
      bgGradient: "from-indigo-50 to-blue-50",
      results: ["10K+ bookings", "4.9/5 rating"],
    },
    {
      category: "Ed-Tech",
      title: "Involvvely",
      description: "Interactive learning platform revolutionizing digital education",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D",
      gradient: "from-sky-600 to-blue-600",
      bgGradient: "from-sky-50 to-blue-50",
      results: ["25K+ students", "95% completion rate"],
    },
    {
      category: "Social",
      title: "Re-Pli",
      description: "Next-generation social platform fostering meaningful connections",
      image: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsfGVufDB8fDB8fHww",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      results: ["100K+ users", "80% engagement"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
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

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 py-20 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our Success
            <br />
            <span className="text-blue-600">Stories</span>
          </h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            variants={descriptionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Creating the future you want - tailored to your business needs with proven results and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${story.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${story.gradient} shadow-lg`}>
                  {story.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 flex items-end justify-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors">
                      <FaExternalLinkAlt className="text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {story.description}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-4">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${story.gradient} mr-2`}></div>
                      {result}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-500"></div>
                  <button className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 text-blue-600 hover:text-blue-700">
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-8 right-8 w-16 h-16 border border-gray-300 rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 border border-gray-300 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join our growing list of successful clients and transform your business with our innovative digital solutions.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <FaArrowRight className="inline ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
