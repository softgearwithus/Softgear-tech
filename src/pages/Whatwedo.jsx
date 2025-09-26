import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Navbar from "../components/Navbar"

const Whatwedo = () => {
    const containerRef = useRef(null)
    const [currentStep, setCurrentStep] = useState(0)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const steps = [
        {
            id: 1,
            title: "Share Your Idea",
            description: "Got a vision? Bring it to us—big or small, we're ready to listen.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            details: "We listen carefully to understand your goals, challenges, and aspirations. Every great journey starts with a single idea.",
            color: "from-yellow-400 to-orange-500"
        },
        {
            id: 2,
            title: "Explore & Analyze",
            description: "We study your idea, validate it, and explore how it can be turned into a real product.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            details: "Deep dive into feasibility, technical requirements, and competitive landscape to validate your concept.",
            color: "from-blue-400 to-purple-500"
        },
        {
            id: 3,
            title: "Product-Market Fit",
            description: "Through deep research, we make sure your idea connects with the right audience and solves real problems.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            details: "Understanding your target audience and validating market demand through comprehensive research and analysis.",
            color: "from-green-400 to-teal-500"
        },
        {
            id: 4,
            title: "Build With Tech",
            description: "From apps and websites to AI-powered solutions, we craft the technology to make your vision real.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            details: "Custom development approach tailored to your specific needs using cutting-edge technologies and frameworks.",
            color: "from-purple-400 to-pink-500"
        },
        {
            id: 5,
            title: "Launch & Scale",
            description: "We take your product live and help it grow—making sure it's ready to succeed in the real world.",
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            ),
            details: "Quality assurance, testing, seamless deployment, and ongoing support to ensure your product thrives.",
            color: "from-emerald-400 to-cyan-500"
        }
    ]

    // Update current step based on scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((progress) => {
            if (progress < 0.15) {
                setCurrentStep(0) // Hero section
            } else if (progress < 0.3) {
                setCurrentStep(1)
            } else if (progress < 0.45) {
                setCurrentStep(2)
            } else if (progress < 0.6) {
                setCurrentStep(3)
            } else if (progress < 0.75) {
                setCurrentStep(4)
            } else if (progress < 0.9) {
                setCurrentStep(5)
            } else {
                setCurrentStep(6) // CTA section
            }
        })
        return unsubscribe
    }, [scrollYProgress])

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
                            "radial-gradient(circle at 60% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
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
                                className="w-full h-full px-6 lg:px-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="grid lg:grid-cols-2 gap-12 h-full items-center max-w-7xl mx-auto">
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
                                            <span className="text-sm font-medium text-blue-200">What We Do</span>
                                        </motion.div>

                                        {/* Main Heading */}
                                        <motion.div
                                            className="space-y-4"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                                                Transform Your
                                                <motion.span
                                                    className="block bg-gradient-to-r from-teal-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                                                    animate={{
                                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
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
                                            className="grid sm:grid-cols-2 gap-4"
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                        >
                                            <motion.div
                                                className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30"
                                                whileHover={{ scale: 1.05, y: -5 }}
                                            >
                                                <div className="text-3xl mb-3">💡</div>
                                                <h3 className="text-lg font-bold text-white mb-2">Got an Idea?</h3>
                                                <p className="text-gray-300 text-sm">Share your vision with us</p>
                                            </motion.div>
                                            <motion.div
                                                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30"
                                                whileHover={{ scale: 1.05, y: -5 }}
                                            >
                                                <div className="text-3xl mb-3">🎯</div>
                                                <h3 className="text-lg font-bold text-white mb-2">Have a Vision?</h3>
                                                <p className="text-gray-300 text-sm">Let's make it happen together</p>
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
                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <motion.button
                                                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Start Your Journey
                                                </motion.button>
                                                <motion.button
                                                    className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Learn More
                                                </motion.button>
                                            </div>
                                        </motion.div>

                                        {/* Scroll Indicator */}
                                        <motion.div
                                            className="flex items-center space-x-3 text-gray-400"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.4 }}
                                        >
                                            <motion.div
                                                className="w-12 h-12 border-2 border-purple-400/50 rounded-full flex items-center justify-center"
                                                animate={{
                                                    borderColor: [
                                                        "rgba(147, 51, 234, 0.5)",
                                                        "rgba(59, 130, 246, 0.5)",
                                                        "rgba(16, 185, 129, 0.5)",
                                                        "rgba(147, 51, 234, 0.5)"
                                                    ]
                                                }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            >
                                                <motion.svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    animate={{ y: [0, 3, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                </motion.svg>
                                            </motion.div>
                                            <span className="text-sm font-medium">Scroll to explore our process</span>
                                        </motion.div>
                                    </motion.div>

                                    {/* Right Side - Visual Elements */}
                                    <motion.div
                                        className="relative h-full flex items-center justify-center"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                    >
                                        {/* Central Orb */}
                                        <motion.div
                                            className="relative w-80 h-80 bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-pink-500/30 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl"
                                            animate={{
                                                rotate: 360,
                                                scale: [1, 1.05, 1]
                                            }}
                                            transition={{
                                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                            }}
                                        >
                                            {/* Inner Glow */}
                                            <motion.div
                                                className="absolute inset-8 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full blur-xl"
                                                animate={{
                                                    opacity: [0.3, 0.8, 0.3]
                                                }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            />

                                            {/* Center Icon */}
                                            <motion.div
                                                className="relative z-10 text-6xl"
                                                animate={{
                                                    rotate: -360,
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                                    scale: { duration: 2, repeat: Infinity }
                                                }}
                                            >
                                                ✨
                                            </motion.div>
                                        </motion.div>

                                        {/* Orbiting Elements */}
                                        {[
                                            { icon: "🚀", delay: 0, radius: 150, color: "from-blue-400 to-cyan-400" },
                                            { icon: "💡", delay: 1, radius: 130, color: "from-yellow-400 to-orange-400" },
                                            { icon: "⚡", delay: 2, radius: 170, color: "from-purple-400 to-pink-400" },
                                            { icon: "🎯", delay: 3, radius: 140, color: "from-green-400 to-teal-400" },
                                            { icon: "🔧", delay: 4, radius: 160, color: "from-indigo-400 to-blue-400" }
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
                                                    delay: item.delay
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
                                                    scale: [0.5, 1, 0.5]
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
                                                opacity: [0.3, 0.6, 0.3]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step Cards */}
                        {steps.map((step) =>
                            currentStep === step.id && (
                                <motion.div
                                    key={`step-${step.id}`}
                                    className="max-w-6xl mx-auto px-6"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                                        {/* Left Side - Content Card */}
                                        <motion.div
                                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                                            whileHover={{ scale: 1.02, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="flex items-center mb-6">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-4 shadow-lg`}>
                                                    {step.icon}
                                                </div>
                                                <div>
                                                    <span className="text-sm text-gray-400 font-medium">Step {step.id}</span>
                                                    <h2 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h2>
                                                </div>
                                            </div>

                                            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                                                {step.description}
                                            </p>

                                            <p className="text-gray-300 mb-8 leading-relaxed">
                                                {step.details}
                                            </p>

                                            {/* Progress indicator */}
                                            <div className="space-y-3">
                                                <div className="flex justify-between text-sm text-gray-400">
                                                    <span>Progress</span>
                                                    <span>{Math.round((step.id / steps.length) * 100)}%</span>
                                                </div>
                                                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
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
                                            className="relative"
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                        >
                                            {/* Large Step Number */}
                                            <motion.div
                                                className={`text-[12rem] md:text-[16rem] font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-20 leading-none text-center`}
                                                animate={{ rotate: [0, 5, -5, 0] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                            >
                                                {step.id.toString().padStart(2, '0')}
                                            </motion.div>

                                            {/* Floating Icon */}
                                            <motion.div
                                                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl`}
                                                animate={{
                                                    y: [0, -20, 0],
                                                    rotate: [0, 10, -10, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <div className="w-16 h-16">
                                                    {step.icon}
                                                </div>
                                            </motion.div>

                                            {/* Orbiting Elements */}
                                            {[...Array(3)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="absolute w-4 h-4 bg-white/40 rounded-full"
                                                    style={{
                                                        top: "50%",
                                                        left: "50%",
                                                    }}
                                                    animate={{
                                                        rotate: 360,
                                                        x: Math.cos((i * 120 * Math.PI) / 180) * 100,
                                                        y: Math.sin((i * 120 * Math.PI) / 180) * 100,
                                                    }}
                                                    transition={{
                                                        duration: 4 + i,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                    }}
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
                                className="text-center text-white px-6 max-w-4xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <motion.div
                                    className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                                        Ready to Start Your Journey?
                                    </h2>
                                    <p className="text-xl md:text-2xl text-blue-100 mb-8">
                                        Let's transform your idea into reality together
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.button
                                            className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-700 group overflow-hidden"
                                            whileHover={{ scale: 1.05, y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-2xl"></div>
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                <span className="text-2xl">💬</span>
                                                <span className="font-extrabold text-white">Let's Talk</span>
                                            </span>
                                        </motion.button>

                                        <motion.button
                                            className="border-2 border-white/40 hover:border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg transition duration-300 backdrop-blur-sm hover:bg-white/10"
                                            whileHover={{ scale: 1.05, y: -2 }}
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
    )
}

export default Whatwedo