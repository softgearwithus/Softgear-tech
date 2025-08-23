import React, { useState } from "react";
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
import { FaJava, FaMobileAlt } from "react-icons/fa";

const TechnologiesWeUse = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const techStack = {
    Frontend: [
      { name: "Next.js", icon: <SiNextdotjs size={28} /> },
      { name: "React.js", icon: <SiReact size={28} color="#61DAFB" /> },
      { name: "Vue.js", icon: <SiVuedotjs size={28} color="#42B883" /> },
      { name: "WordPress", icon: <SiWordpress size={28} color="#21759B" /> },
      { name: "Framer", icon: <SiFramer size={28} color="#0055FF" /> },
      { name: "GSAP", icon: <SiGreensock size={28} color="#88CE02" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs size={28} color="#3C873A" /> },
      { name: "Express.js", icon: <SiExpress size={28} /> },
      { name: "MongoDB", icon: <SiMongodb size={28} color="#4DB33D" /> },
      { name: "Java", icon: <FaJava size={28} color="#E76F00" /> },
      { name: "Python", icon: <SiPython size={28} color="#3776AB" /> },
    ],
    Mobile: [
      { name: "React Native", icon: <SiReactquery size={28} color="#61DAFB" /> },
      { name: "Flutter", icon: <SiFlutter size={28} color="#02569B" /> },
      { name: "Android", icon: <FaMobileAlt size={28} color="#3DDC84" /> },
    ],
    "AI & ML": [
      { name: "TensorFlow", icon: <SiTensorflow size={28} color="#FF6F00" /> },
      { name: "PyTorch", icon: <SiPytorch size={28} color="#EE4C2C" /> },
      { name: "Python AI", icon: <SiPython size={28} color="#3776AB" /> },
    ],
  
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
        Technologies We Use
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(techStack).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border hover:bg-blue-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tech Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {techStack[activeTab].map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-3 border rounded-xl px-5 py-4 shadow-sm bg-white hover:shadow-lg transition"
          >
            {tech.icon}
            <span className="font-medium text-gray-800">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesWeUse;
