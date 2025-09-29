import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaRocket, FaLightbulb, FaUsers, FaGlobeAsia, FaHeart, FaCode, FaCogs, FaChartLine } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Aboutus = () => {
    const heroRef = useRef(null);
    const missionRef = useRef(null);
    const teamRef = useRef(null);
    const visionRef = useRef(null);

    const heroInView = useInView(heroRef, { once: true, threshold: 0.2 });
    const missionInView = useInView(missionRef, { once: true, threshold: 0.1 });
    const teamInView = useInView(teamRef, { once: true, threshold: 0.1 });
    const visionInView = useInView(visionRef, { once: true, threshold: 0.1 });

    // Enhanced animation variants for smoother page flow
    const pageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }
        }
    };

    const floatingVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };

    const teamMembers = [
        {
            name: "Divish Gupta",
            role: "CEO & Founder",
            description: "Visionary leader driving innovation and growth",
            icon: <FaRocket className="text-4xl text-blue-600" />,
            gradient: "from-blue-600 to-purple-600"
        },
        {
            name: "Masud Alom",
            role: "CTO",
            description: "Technology architect shaping our technical excellence",
            icon: <FaCode className="text-4xl text-cyan-600" />,
            gradient: "from-cyan-600 to-blue-600"
        },
        {
            name: "Ayush Pathiana",
            role: "COO",
            description: "Operations expert ensuring seamless execution",
            icon: <FaCogs className="text-4xl text-green-600" />,
            gradient: "from-green-600 to-teal-600"
        }
    ];

    const values = [
        {
            icon: <FaLightbulb className="text-4xl text-yellow-500" />,
            title: "Innovation",
            description: "Cutting-edge solutions for modern challenges"
        },
        {
            icon: <FaUsers className="text-4xl text-blue-500" />,
            title: "Collaboration",
            description: "Building communities that thrive together"
        },
        {
            icon: <FaHeart className="text-4xl text-red-500" />,
            title: "Impact",
            description: "Creating meaningful change in business operations"
        },
        {
            icon: <FaChartLine className="text-4xl text-green-500" />,
            title: "Growth",
            description: "Empowering businesses to reach their full potential"
        }
    ];

    return (
        <>
            <Navbar />
            <motion.div
                className="bg-gradient-to-br from-[#111d39] via-[#1b378a] to-green-800 min-h-screen"
                variants={pageVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Hero Section */}
                <motion.section
                    ref={heroRef}
                    className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                >
                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <motion.div
                            variants={cardVariants}
                            className="text-white"
                        >
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
                                variants={cardVariants}
                            >
                                About{" "}
                                <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                                    Softgear
                                </span>
                                <br />
                                Technologies
                            </motion.h1>

                            <motion.p
                                variants={cardVariants}
                                className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed"
                            >
                                Empowering Indian SMEs through technology with{" "}
                                <span className="text-teal-300 font-semibold">passion, innovation,</span> and{" "}
                                <span className="text-green-300 font-semibold">meaningful impact</span>
                            </motion.p>

                            <motion.div
                                variants={cardVariants}
                                className="bg-gradient-to-r from-white/10 to-blue-100/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 inline-block"
                            >
                                <p className="text-lg text-gray-200 font-medium">
                                    "From dreams to reality, we make it happen"
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Floating elements with enhanced animations */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            variants={floatingVariants}
                            animate={heroInView ? {
                                rotate: 360,
                                ...floatingVariants.visible
                            } : floatingVariants.hidden}
                            transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                ...floatingVariants.visible.transition
                            }}
                            className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"
                        />
                        <motion.div
                            variants={floatingVariants}
                            animate={heroInView ? {
                                rotate: -360,
                                ...floatingVariants.visible
                            } : floatingVariants.hidden}
                            transition={{
                                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                                ...floatingVariants.visible.transition,
                                delay: 0.7
                            }}
                            className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"
                        />
                        <motion.div
                            variants={floatingVariants}
                            animate={heroInView ? {
                                y: [-10, 10, -10],
                                ...floatingVariants.visible
                            } : floatingVariants.hidden}
                            transition={{
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                ...floatingVariants.visible.transition,
                                delay: 0.9
                            }}
                            className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full"
                        />
                    </div>
                </motion.section>

                {/* Mission & Vision Section */}
                <motion.section
                    ref={missionRef}
                    className="bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 py-20"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={missionInView ? "visible" : "hidden"}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
                        >
                            {/* Mission Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl p-8 border border-gray-200/50 backdrop-blur-sm shadow-lg group hover:shadow-xl transition-all duration-500"
                            >
                                <motion.div
                                    className="flex items-center mb-6"
                                    variants={cardVariants}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaRocket className="text-5xl text-blue-600 mr-4" />
                                    </motion.div>
                                    <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                                </motion.div>
                                <motion.p
                                    className="text-gray-700 text-lg leading-relaxed mb-4"
                                    variants={cardVariants}
                                >
                                    At Softgear Technologies Pvt Ltd, we are driven by a single vision:{" "}
                                    <span className="font-semibold text-blue-600">empowering Indian SMEs through technology</span>.
                                    We believe that technology can transform the way businesses operate, grow, and connect with their communities.
                                </motion.p>
                                <motion.p
                                    className="text-gray-700 text-lg leading-relaxed"
                                    variants={cardVariants}
                                >
                                    From idea to execution, we build stunning, practical solutions that address real challenges faced by SMEs,
                                    helping them streamline operations, increase efficiency, and unlock new opportunities.
                                </motion.p>
                            </motion.div>

                            {/* Vision Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-gradient-to-br from-white/90 to-green-50/90 rounded-3xl p-8 border border-gray-200/50 backdrop-blur-sm shadow-lg group hover:shadow-xl transition-all duration-500"
                            >
                                <motion.div
                                    className="flex items-center mb-6"
                                    variants={cardVariants}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaGlobeAsia className="text-5xl text-green-600 mr-4" />
                                    </motion.div>
                                    <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                                </motion.div>
                                <motion.p
                                    className="text-gray-700 text-lg leading-relaxed mb-4"
                                    variants={cardVariants}
                                >
                                    We envision a future where Indian SMEs are{" "}
                                    <span className="font-semibold text-green-600">connected, supported, and thriving together</span>.
                                    By fostering collaboration, innovation, and growth, we aim to create a community where businesses can learn from each other.
                                </motion.p>
                                <motion.p
                                    className="text-gray-700 text-lg leading-relaxed"
                                    variants={cardVariants}
                                >
                                    Every solution we create is designed to add real value and make a tangible difference in people's lives,
                                    inspiring entrepreneurship and supporting startup dreams.
                                </motion.p>
                            </motion.div>
                        </motion.div>

                        {/* Values Grid */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 group"
                                >
                                    <div className="text-center">
                                        <motion.div
                                            className="mb-4 group-hover:scale-110 transition-transform duration-300"
                                            whileHover={{ rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {value.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                                        <p className="text-gray-600 text-sm">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Team Section */}
                <motion.section
                    ref={teamRef}
                    className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={teamInView ? "visible" : "hidden"}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            variants={cardVariants}
                            className="text-center mb-16"
                        >
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold text-white mb-6"
                                variants={cardVariants}
                            >
                                Meet Our{" "}
                                <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                                    Leadership
                                </span>
                            </motion.h2>
                            <motion.p
                                className="text-xl text-gray-300 max-w-3xl mx-auto"
                                variants={cardVariants}
                            >
                                Founded by visionary leaders who bring together a shared passion for innovation,
                                problem-solving, and creating meaningful impact in the business world.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.03,
                                        rotateY: 5,
                                        transition: { duration: 0.4 }
                                    }}
                                    className="group relative"
                                >
                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                                        {/* Background gradient on hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                                        <div className="relative z-10 text-center">
                                            <motion.div
                                                className="mb-6 group-hover:scale-110 transition-transform duration-300"
                                                whileHover={{
                                                    scale: 1.2,
                                                    rotate: [0, -5, 5, 0],
                                                    transition: { duration: 0.5 }
                                                }}
                                            >
                                                {member.icon}
                                            </motion.div>

                                            <motion.h3
                                                className="text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300"
                                                variants={cardVariants}
                                            >
                                                {member.name}
                                            </motion.h3>

                                            <motion.h4
                                                className="text-lg font-semibold text-blue-300 mb-4"
                                                variants={cardVariants}
                                            >
                                                {member.role}
                                            </motion.h4>

                                            <motion.p
                                                className="text-gray-300 leading-relaxed"
                                                variants={cardVariants}
                                            >
                                                {member.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Philosophy Section */}
                <motion.section
                    ref={visionRef}
                    className="bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 py-20"
                    variants={sectionVariants}
                    initial="hidden"
                    animate={visionInView ? "visible" : "hidden"}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            variants={cardVariants}
                            className="text-center mb-16"
                        >
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                                variants={cardVariants}
                            >
                                Our{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Philosophy
                                </span>
                            </motion.h2>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >
                            <motion.div variants={cardVariants} className="space-y-6">
                                <motion.div
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                                        transition: { duration: 0.3 }
                                    }}
                                    variants={cardVariants}
                                >
                                    <h3 className="text-2xl font-bold mb-4">Beyond Software Development</h3>
                                    <p className="text-lg leading-relaxed">
                                        Our mission goes beyond software development. We strive to inspire entrepreneurship,
                                        encouraging people to dream of building their own startups and supporting them with
                                        the tools and guidance they need to succeed.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-3xl text-white"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
                                        transition: { duration: 0.3 }
                                    }}
                                    variants={cardVariants}
                                >
                                    <h3 className="text-2xl font-bold mb-4">Turning Visions into Reality</h3>
                                    <p className="text-lg leading-relaxed">
                                        At Softgear, we don't just deliver software - we turn visions into reality.
                                        Every line of code, every product feature, and every project we undertake is a step
                                        toward making that vision a reality.
                                    </p>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl p-8 border border-gray-200/50 backdrop-blur-sm shadow-xl"
                            >
                                <motion.h3
                                    className="text-3xl font-bold text-gray-800 mb-6 text-center"
                                    variants={cardVariants}
                                >
                                    Our Commitment
                                </motion.h3>
                                <motion.div className="space-y-4" variants={containerVariants}>
                                    {[
                                        {
                                            emoji: "🎯",
                                            title: "Practical Solutions",
                                            desc: "Address real challenges faced by SMEs"
                                        },
                                        {
                                            emoji: "🚀",
                                            title: "Growth Enablement",
                                            desc: "Streamline operations and increase efficiency"
                                        },
                                        {
                                            emoji: "💝",
                                            title: "Real Value",
                                            desc: "Make tangible difference in people's lives"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center space-x-4"
                                            variants={cardVariants}
                                            whileHover={{ x: 5, transition: { duration: 0.3 } }}
                                        >
                                            <motion.div
                                                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 10,
                                                    transition: { duration: 0.3 }
                                                }}
                                            >
                                                <span className="text-2xl">{item.emoji}</span>
                                            </motion.div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                                                <p className="text-gray-600">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>
            </motion.div>
        </>
    );
};

export default Aboutus;