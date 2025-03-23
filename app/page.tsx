"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white font-[Poppins] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 animate-pulse"></div>

      {/* Header */}
      <header className="relative z-10 bg-white text-black flex justify-between items-center px-10 py-4 shadow-md">
        <div className="text-3xl font-bold tracking-wide">Quantrex</div>
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li><Link href="/home" className="text-gray-950 transition duration-300 underline">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition duration-300">About</Link></li>
            <li><Link href="/company" className="hover:text-blue-500 transition duration-300">Company</Link></li>
            <li><Link href="/ourtechnology" className="hover:text-blue-500 transition duration-300">Technology</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 py-24 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-2xl text-center md:text-left">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-blue-400 leading-tight tracking-wide"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Quantum-Powered AI  
            Revolutionizing Industries
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            At Quantrex, we are at the vanguard of computational evolution, harnessing the synergistic potential of Quantum Computing, Artificial Intelligence, and High-Performance Computing. By leveraging quantum superposition, entanglement, and quantum parallelism, we transcend classical computational constraints—accelerating complex problem-solving in exponential time scales.
          </motion.p>
          <motion.p 
            className="mt-4 italic text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Quantum mechanics isn’t the future. It’s now.
          </motion.p>
          <motion.div 
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link href="/ourtechnology">
              <motion.button 
                className="border border-blue-500 px-8 py-4 rounded-lg text-lg font-medium tracking-wide hover:bg-orange-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Explore Our Tech
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button 
                className="border border-blue-500 px-8 py-4 rounded-lg text-lg font-medium tracking-wide hover:bg-orange-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img src="/homebg.jpg" alt="Quantum Simulation" className="w-[500px] rounded-lg shadow-lg border-4 border-blue-500"/>
        </motion.div>
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
