"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Product() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white font-[Poppins] overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>

      {/* Header Section */}
      <header className="relative z-10 bg-white text-black flex justify-between items-center px-10 py-4 shadow-md">
        <div className="text-3xl font-bold tracking-wide text-gray-950">Quantrex</div>
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li><Link href="/" className="hover:text-blue-500 transition-all">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition-all">About</Link></li>
            <li><Link href="/company" className="hover:text-blue-500 transition-all">Company</Link></li>
            <li><Link href="/ourtechnology" className="hover:text-blue-500 transition-all">Our Tech</Link></li>
          </ul>
        </nav>
      </header>

      {/* Products Section */}
      <motion.section
        className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto"
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
            Revolutionizing the Future with Quantum AI
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            At Quantrex, we engineer next-gen quantum-powered AI solutions that redefine industries with unparalleled performance, security, and intelligence.
          </motion.p>

          <div className="mt-8 space-y-6">
            {[
              { title: "CLEANX", desc: "An AI-driven waste management system with real-time tracking" },
              { title: "QMedCard", desc: "A medical card storing comprehensive health records for instant access" },
              { title: "QuantumComm", desc: "An AI-powered communication system for the mining industry" }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h2 className="text-2xl font-semibold text-orange-500">{product.title}</h2>
                <p className="text-lg text-gray-300">{product.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
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

        {/* Right Image with Animation */}
        <motion.div
          className="mt-12 md:mt-55 ml-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src="/productsbg.jpg"
            alt="Quantum Products"
            width={500}
            height={300}
            className="rounded-lg shadow-lg border-4 border-blue-500"
          />
        </motion.div>
      </motion.section>

      {/* Footer Section */}
      <footer className="relative z-10 bg-gray-900 text-white py-6 px-10 mt-auto flex flex-col items-center">
        <p className="text-gray-400 text-lg font-medium">Quantrex 2025 © All Rights Reserved</p>
        <div className="mt-4 flex space-x-6">
          <a href="https://x.com/QUANTREX_AI" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/quantrex/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="https://www.youtube.com/@QUANTREX-AI" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-2xl hover:text-red-500 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/quantrex_ai/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-pink-500 transition duration-300" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61574577028547" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-2xl hover:text-blue-600 transition duration-300" />
          </a>
        </div>
      </footer>
    </main>
  );
}
