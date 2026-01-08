import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";


const Whatwedo = () => {
    const [open, setOpen] = useState(false);
 const [formData, setFormData] = useState({
  idea: "",
  description: "",
  email: "",
  phoneNumber: "",
});


const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await fetch("https://softgear-tech-backend-x43r.vercel.app/api/getstart/idea", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Idea submitted successfully");
    setOpen(false);
  } catch (err) {
    console.error(err);
    alert("Submission failed");
  }
};

  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const steps = [
    {
      id: 1,
      title: "Share Your Idea",
      description:
        "Got a vision? Bring it to us—big or small, we're ready to listen.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      details:
        "We listen carefully to understand your goals, challenges, and aspirations. Every great journey starts with a single idea.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Explore & Analyze",
      description:
        "We study your idea, validate it, and explore how it can be turned into a real product.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      details:
        "Deep dive into feasibility, technical requirements, and competitive landscape to validate your concept.",
      color: "from-blue-400 to-purple-500",
    },
    {
      id: 3,
      title: "Product-Market Fit",
      description:
        "Through deep research, we make sure your idea connects with the right audience and solves real problems.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      details:
        "Understanding your target audience and validating market demand through comprehensive research and analysis.",
      color: "from-green-400 to-teal-500",
    },
    {
      id: 4,
      title: "Build With Tech",
      description:
        "From apps and websites to AI-powered solutions, we craft the technology to make your vision real.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      details:
        "Custom development approach tailored to your specific needs using cutting-edge technologies and frameworks.",
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 5,
      title: "Launch & Scale",
      description:
        "We take your product live and help it grow—making sure it's ready to succeed in the real world.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
      details:
        "Quality assurance, testing, seamless deployment, and ongoing support to ensure your product thrives.",
      color: "from-emerald-400 to-cyan-500",
    },
  ];

  // Update current step based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      if (progress < 0.15) {
        setCurrentStep(0); // Hero section
      } else if (progress < 0.3) {
        setCurrentStep(1);
      } else if (progress < 0.45) {
        setCurrentStep(2);
      } else if (progress < 0.6) {
        setCurrentStep(3);
      } else if (progress < 0.75) {
        setCurrentStep(4);
      } else if (progress < 0.9) {
        setCurrentStep(5);
      } else {
        setCurrentStep(6); // CTA section
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper function to get responsive radius
  const getResponsiveRadius = (baseRadius) => {
    if (windowWidth < 640) return baseRadius * 0.6;
    if (windowWidth < 1024) return baseRadius * 0.8;
    return baseRadius;
  };

  // Helper function to get responsive orbital radius
  const getOrbitalRadius = () => {
    if (windowWidth < 640) return 60;
    if (windowWidth < 1024) return 80;
    return 100;
  };

  return (
    <div ref={containerRef} className="relative">
      <Navbar className="fixed top-0 left-0 right-0 z-50" />

      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#111d39] via-[#1b378a] to-green-800 -z-10">
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles - Reduced for mobile */}
        {[...Array(windowWidth < 768 ? 8 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content Container with Fixed Height */}
      <div className="h-[700vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Hero Section */}
            {currentStep === 0 && (
              <motion.div
                key="hero"
                className="w-full h-full px-3 sm:px-6 lg:px-12 py-4 sm:py-6 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Mobile Layout - Simplified */}
                <div className="block lg:hidden h-full">
                  <div className="flex flex-col h-full justify-center items-center max-w-sm mx-auto space-y-6 py-8">
                    {/* Mobile Badge */}
                    <motion.div
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-4 py-2 border border-blue-400/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-lg">🚀</span>
                      <span className="text-sm font-medium text-blue-200">
                        What We Do
                      </span>
                    </motion.div>

                    {/* Mobile Heading */}
                    <motion.div
                      className="text-center space-y-2"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h1 className="text-3xl font-black text-white leading-tight">
                        Transform Your
                        <motion.span
                          className="block bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                          animate={{
                            backgroundPosition: [
                              "0% 50%",
                              "100% 50%",
                              "0% 50%",
                            ],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          Ideas
                        </motion.span>
                        Into Reality
                      </h1>
                    </motion.div>

                    {/* Mobile Description */}
                    <motion.p
                      className="text-base text-gray-300 text-center leading-relaxed px-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      From concept to launch, we make dreams come true
                    </motion.p>

                    {/* Mobile CTA Buttons */}
                    <motion.div
                      className="flex flex-col w-full space-y-3 px-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <motion.button
                        onClick={() => setOpen(true)}
                        className="border-2 border-white/40 hover:border-white/60 text-white px-4 sm:px-6 md:px-8 py-3 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Portfolio
                      </motion.button>

                    
                      <motion.button
                        className="border-2 border-white/30 text-white px-8 py-3.5 rounded-xl font-semibold text-base hover:border-white/60 hover:bg-white/10 transition-all duration-300 w-full"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                      </motion.button>
                    </motion.div>

                    {/* Mobile Idea Cards */}
                    <motion.div
                      className="grid grid-cols-2 gap-3 w-full px-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <motion.div
                        className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-xl p-4 border border-blue-400/30 text-center"
                        whileHover={{ scale: 1.02, y: -3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl mb-2">💡</div>
                        <h3 className="text-sm font-bold text-white mb-1">
                          Got an Idea?
                        </h3>
                        <p className="text-gray-300 text-xs">Share with us</p>
                      </motion.div>
                      <motion.div
                        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-4 border border-purple-400/30 text-center"
                        whileHover={{ scale: 1.02, y: -3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl mb-2">🎯</div>
                        <h3 className="text-sm font-bold text-white mb-1">
                          Have a Vision?
                        </h3>
                        <p className="text-gray-300 text-xs">Let's build it</p>
                      </motion.div>
                    </motion.div>

                    {/* Mobile Scroll Indicator */}
                    <motion.div
                      className="flex flex-col items-center space-y-3 text-gray-300 pt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <motion.div
                        className="w-10 h-10 border-2 border-purple-400/70 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg shadow-lg"
                        animate={{
                          borderColor: [
                            "rgba(147, 51, 234, 0.7)",
                            "rgba(59, 130, 246, 0.7)",
                            "rgba(16, 185, 129, 0.7)",
                            "rgba(147, 51, 234, 0.7)",
                          ],
                          y: [0, -3, 0],
                        }}
                        transition={{
                          borderColor: { duration: 3, repeat: Infinity },
                          y: { duration: 1.5, repeat: Infinity },
                        }}
                      >
                        <motion.svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </motion.svg>
                      </motion.div>
                      <motion.span
                        className="text-sm font-medium text-white bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent text-center"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Scroll to explore
                      </motion.span>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop Layout - Keep full animations */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 h-full items-center max-w-7xl mx-auto">
                  {/* Left Side - Content */}
                  <motion.div
                    className="space-y-8 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Badge */}
                    <motion.div
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-4 py-2 border border-blue-400/30"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-xl">🚀</span>
                      <span className="text-sm font-medium text-blue-200">
                        What We Do
                      </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h1 className="text-6xl xl:text-7xl font-black text-white leading-tight">
                        Transform Your
                        <motion.span
                          className="block bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                          animate={{
                            backgroundPosition: [
                              "0% 50%",
                              "100% 50%",
                              "0% 50%",
                            ],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          Ideas
                        </motion.span>
                        Into Reality
                      </h1>
                    </motion.div>

                    {/* Idea/Vision Cards */}
                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <motion.div
                        className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-3xl mb-3">💡</div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          Got an Idea?
                        </h3>
                        <p className="text-gray-300 text-sm">
                          Share your vision with us
                        </p>
                      </motion.div>
                      <motion.div
                        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="text-3xl mb-3">🎯</div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          Have a Vision?
                        </h3>
                        <p className="text-gray-300 text-sm">
                          Let's make it happen together
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <p className="text-xl text-gray-300">
                        From concept to launch, we make dreams come true
                      </p>
                      <div className="flex flex-row gap-4">
                   <motion.button
  onClick={() => setOpen(true)}
  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
  Start Your Journey
</motion.button>
{open && (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="relative bg-white rounded-2xl w-full max-w-lg p-6"
      initial={{ scale: 0.8, y: 40 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      {/* Close */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-4 text-2xl font-bold"
      >
        ×
      </button>

      {/* FORM */}
      <h2 className="text-2xl font-bold mb-4">Share Your Project Idea</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>

        <input
  type="text"
  name="idea"
  value={formData.idea}
  onChange={handleChange}
  placeholder="Project Idea"
  className="w-full border rounded-lg px-4 py-2"
/>

<textarea
  name="description"
  value={formData.description}
  onChange={handleChange}
  placeholder="Description"
  className="w-full border rounded-lg px-4 py-2"
/>

<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email"
  className="w-full border rounded-lg px-4 py-2"
/>

<input
  type="tel"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={handleChange}
  placeholder="Phone Number"
  className="w-full border rounded-lg px-4 py-2"
/>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-bold"
        >
          Submit
        </button>
      </form>
    </motion.div>
  </motion.div>
)}

                        <motion.button
                          className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right Side - Visual Elements */}
                  <motion.div
                    className="relative h-full flex flex-col items-center justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {/* Animation Container */}
                    <div className="relative mb-8">
                      {/* Central Orb */}
                      <motion.div
                        className="relative w-80 h-80 bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-pink-500/30 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                        animate={{
                          rotate: 360,
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          scale: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      >
                        {/* Inner Glow */}
                        <motion.div
                          className="absolute inset-8 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full blur-xl"
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Center Icon */}
                        <motion.div
                          className="relative z-10 text-6xl"
                          animate={{
                            rotate: -360,
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: {
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            },
                            scale: { duration: 2, repeat: Infinity },
                          }}
                        >
                          ✨
                        </motion.div>
                      </motion.div>

                      {/* Orbiting Elements */}
                      {[
                        {
                          icon: "🚀",
                          delay: 0,
                          radius: 90,
                          color: "from-blue-400 to-cyan-400",
                        },
                        {
                          icon: "💡",
                          delay: 1,
                          radius: 80,
                          color: "from-yellow-400 to-orange-400",
                        },
                        {
                          icon: "⚡",
                          delay: 2,
                          radius: 100,
                          color: "from-purple-400 to-pink-400",
                        },
                        {
                          icon: "🎯",
                          delay: 3,
                          radius: 85,
                          color: "from-green-400 to-teal-400",
                        },
                        {
                          icon: "🔧",
                          delay: 4,
                          radius: 95,
                          color: "from-indigo-400 to-blue-400",
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-2xl shadow-lg border border-white/20 backdrop-blur-sm`}
                          style={{
                            top: "50%",
                            left: "50%",
                          }}
                          animate={{
                            rotate: 360,
                            x: Math.cos((i * 72 * Math.PI) / 180) * item.radius,
                            y: Math.sin((i * 72 * Math.PI) / 180) * item.radius,
                          }}
                          transition={{
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: item.delay,
                          }}
                          whileHover={{ scale: 1.2 }}
                        >
                          {item.icon}
                        </motion.div>
                      ))}

                      {/* Floating Particles */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white/40 rounded-full"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}

                      {/* Background Glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                      className="flex flex-col items-center space-y-4 text-gray-300 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      <motion.div
                        className="w-16 h-16 border-3 border-purple-400/70 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg shadow-lg"
                        animate={{
                          borderColor: [
                            "rgba(147, 51, 234, 0.7)",
                            "rgba(59, 130, 246, 0.7)",
                            "rgba(16, 185, 129, 0.7)",
                            "rgba(147, 51, 234, 0.7)",
                          ],
                          boxShadow: [
                            "0 0 20px rgba(147, 51, 234, 0.3)",
                            "0 0 25px rgba(59, 130, 246, 0.3)",
                            "0 0 20px rgba(16, 185, 129, 0.3)",
                            "0 0 20px rgba(147, 51, 234, 0.3)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={3}
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </motion.svg>
                      </motion.div>
                      <motion.span
                        className="text-base font-bold text-white bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent text-center"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Scroll to explore our process
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step Cards */}
            {steps.map(
              (step) =>
                currentStep === step.id && (
                  <motion.div
                    key={`step-${step.id}`}
                    className="max-w-6xl mx-auto px-3 sm:px-6 py-2 sm:py-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center h-full">
                      {/* Left Side - Content Card */}
                      <motion.div
                        className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl order-2 lg:order-1 w-full"
                        whileHover={{
                          scale: windowWidth < 768 ? 1.01 : 1.02,
                          y: windowWidth < 768 ? -5 : -10,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-row items-center mb-3 sm:mb-6">
                          <div
                            className={`w-10 h-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-3 sm:mr-4 shadow-lg flex-shrink-0`}
                          >
                            <div className="w-5 h-5 sm:w-8 sm:h-8">
                              {step.icon}
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-xs sm:text-sm text-gray-400 font-medium block">
                              Step {step.id}
                            </span>
                            <h2 className="text-base sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                              {step.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-sm sm:text-lg text-blue-100 mb-3 sm:mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        <p className="text-xs sm:text-base text-gray-300 mb-4 sm:mb-8 leading-relaxed">
                          {step.details}
                        </p>

                        {/* Progress indicator */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                            <span>Progress</span>
                            <span>
                              {Math.round((step.id / steps.length) * 100)}%
                            </span>
                          </div>
                          <div className="h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${step.color} rounded-full relative`}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: step.id / steps.length }}
                              transition={{ duration: 1, delay: 0.3 }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Right Side - Visual Elements */}
                      <motion.div
                        className="relative order-1 lg:order-2 h-32 sm:h-80 lg:h-auto w-full flex items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {/* Large Step Number */}
                        <motion.div
                          className={`text-[6rem] sm:text-[12rem] md:text-[14rem] lg:text-[16rem] font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20 leading-none text-center`}
                          animate={
                            windowWidth < 768 ? {} : { rotate: [0, 5, -5, 0] }
                          }
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          {step.id.toString().padStart(2, "0")}
                        </motion.div>

                        {/* Floating Icon */}
                        <motion.div
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl`}
                          animate={
                            windowWidth < 768
                              ? {
                                  scale: [1, 1.05, 1],
                                }
                              : {
                                  y: [0, -20, 0],
                                  rotate: [0, 10, -10, 0],
                                }
                          }
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          whileHover={{ scale: windowWidth < 768 ? 1.05 : 1.1 }}
                        >
                          <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16">
                            {step.icon}
                          </div>
                        </motion.div>

                        {/* Orbiting Elements - Simplified for mobile */}
                        {windowWidth >= 640 &&
                          [...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 sm:w-4 sm:h-4 bg-white/40 rounded-full"
                              style={{
                                top: "50%",
                                left: "50%",
                              }}
                              animate={
                                windowWidth < 768
                                  ? {
                                      x:
                                        Math.cos((i * 120 * Math.PI) / 180) *
                                        40,
                                      y:
                                        Math.sin((i * 120 * Math.PI) / 180) *
                                        40,
                                      scale: [0.5, 1, 0.5],
                                    }
                                  : {
                                      rotate: 360,
                                      x:
                                        Math.cos((i * 120 * Math.PI) / 180) *
                                        getOrbitalRadius(),
                                      y:
                                        Math.sin((i * 120 * Math.PI) / 180) *
                                        getOrbitalRadius(),
                                    }
                              }
                              transition={
                                windowWidth < 768
                                  ? {
                                      scale: {
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                      },
                                    }
                                  : {
                                      duration: 4 + i,
                                      repeat: Infinity,
                                      ease: "linear",
                                    }
                              }
                            />
                          ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )
            )}

            {/* CTA Section */}
            {currentStep === 6 && (
              <motion.div
                key="cta"
                className="text-center text-white px-3 sm:px-6 max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 border border-white/20 shadow-2xl"
                  whileHover={{ scale: windowWidth < 768 ? 1.01 : 1.02 }}
                >
                  <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-6">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-4 sm:mb-8">
                    Let's transform your idea into reality together
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                    <motion.button
                      className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-2xl font-bold text-sm sm:text-lg transition-all duration-700 group overflow-hidden"
                      whileHover={{
                        scale: windowWidth < 768 ? 1.02 : 1.05,
                        y: -3,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-lg sm:rounded-2xl"></div>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <span className="text-lg sm:text-2xl">💬</span>
                        <span  onClick={() =>
                window.open(
                  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2Bf-9ScNlGD-6362H41iT0ImAMV_PhOyVJ-D2i-_sJq4QD7Bs9_LUPIu8XsetEMKFfnTBLiAuW?gv=true",
                  "_blank"
                )
              } className="font-extrabold text-white">
                          Let's Talk
                        </span>
                      </span>
                    </motion.button>

                    <motion.button
                      className="border-2 border-white/40 hover:border-white/60 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg transition duration-300 backdrop-blur-sm hover:bg-white/10"
                      whileHover={{
                        scale: windowWidth < 768 ? 1.02 : 1.05,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Our Work
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
