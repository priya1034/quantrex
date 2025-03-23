"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Company() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white font-[Poppins] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 animate-pulse"></div>

      <header className="relative z-10 bg-white text-black flex justify-between items-center px-10 py-4 shadow-md">
        <div className="text-3xl font-bold tracking-wide">Quantrex</div>
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li><Link href="/" className="hover:text-blue-500 transition duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition duration-300">About</Link></li>
            <li><Link href="/company" className="text-gray-950 transition duration-300 underline">Company</Link></li>
            <li><Link href="/ourtechnology" className="hover:text-blue-500 transition duration-300">Our Tech</Link></li>
          </ul>
        </nav>
      </header>

      <motion.section 
        className="relative z-10 text-center md:text-left px-10 py-20 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-blue-400 leading-tight tracking-wide"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering Industries with Quantum-Driven Innovation
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Quantrex is at the forefront of computational disruption, seamlessly integrating Quantum Computing, AI-driven automation, and High-Performance Computing to revolutionize industries and redefine the frontiers of innovation.
        </motion.p>
        <motion.p 
          className="mt-4 italic text-gray-400 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          The quantum revolution isn’t on the horizon—it’s already reshaping the world.
        </motion.p>
      </motion.section>

      {/* Meet Our Founders Section */}
      <motion.section className="relative z-10 px-10 py-20 bg-gray-900">
        <h2 className="text-4xl font-semibold text-blue-500 text-center">Meet Our Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-6xl mx-auto">
          {[
            {
              name: "Athul VP",
              role: "Founder & CEO",
              description: "AI and Data Science expert skilled in advanced algorithms, predictive modeling, and automation. Holds a B.Tech in Information Technology with certifications in Google Cloud, Data Science, and AI Tools. Innovator in AI-enhanced image processing and automation solutions."
            },
            {
              name: "Priya Dharshini J",
              role: "Co-Founder & CTO",
              description: "Quantum Computing specialist with expertise in AI, ML, and fault-tolerant quantum algorithms. Holds a B.Tech in Information Technology and has published research in Intellectual Property of India on Decision-Making AI models."
            }
          ].map((founder, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg shadow-lg text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mt-4 text-blue-400">{founder.name}</h3>
              <p className="text-gray-400">{founder.role}</p>
              <p className="mt-4 text-gray-300 text-left">{founder.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Previous Projects Section */}
      <motion.section className="relative z-10 px-10 py-20 bg-gray-900">
        <h2 className="text-4xl font-semibold text-blue-500 text-center">A Glimpse into Our Past Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
          {[
            {
              title: "Lunar Imaging Enhancement Using AI and Quantum Computing (SIH)",
              description: "Enhances low-light lunar images using AI-based denoising and Variational Quantum Image Processing. Improves clarity for landing site selection and surface mapping.",
            },
            {
              title: "AI-Driven Smart Traffic Management System (SIH)",
              description: "Uses AI, IoT, and Quantum Optimization to manage traffic congestion dynamically. Enhances vehicle flow, prioritizes emergency vehicles, and reduces urban pollution.",
            },
            {
              title: "IoT-Based LPG Gas Leakage Detection and Alert System",
              description: "Detects gas leaks using IoT sensors and AI anomaly detection. Sends real-time alerts and automatically shuts off gas valves to prevent fire hazards.",
            },
            {
              title: "AI and Quantum Computing-Based Plant Health Monitoring",
              description: "Monitors soil and plant health with IoT sensors and AI-driven disease detection. Uses Quantum Machine Learning for optimized irrigation and fertilizer schedules.",
            },
            {
              title: "Automatic Irrigation System Using IoT and AI (Patent Pub: 2023)",
              description: "Employs AI and IoT to regulate water usage based on real-time soil and weather conditions. Improves crop yield while conserving water resources.",
            },
            {
              title: "Smart Home Monitoring and Automation System",
              description: "Integrates AI, IoT, and cloud computing to automate home security and energy management. Features motion detection, appliance automation, and remote monitoring.",
            }
          ].map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg shadow-lg text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mt-4 text-blue-400">{project.title}</h3>
              <p className="mt-4 text-gray-300 text-left">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Footer Section */}
      <footer className="relative z-10 bg-gray-900 text-white py-6 px-10 mt-auto flex flex-col items-center">
        {/* Centered Copyright Text */}
        <p className="text-gray-400 text-lg font-medium">Quantrex 2025 © All Rights Reserved</p>

        {/* Social Media Icons */}
        <div className="mt-4 flex space-x-6">
          <a href="https://x.com/QUANTREX_AI" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-2xl hover:text-blue-400 transition duration-300"/>
          </a>
          <a href="https://www.linkedin.com/in/quantrex/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-blue-400 transition duration-300"/>
          </a>
          <a href="https://www.youtube.com/@QUANTREX-AI" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-2xl hover:text-red-500 transition duration-300"/>
          </a>
          <a href="https://www.instagram.com/quantrex_ai/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-pink-500 transition duration-300"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61574577028547" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-2xl hover:text-blue-600 transition duration-300"/>
          </a>
        </div>
      </footer>

    </main>
  );
}
