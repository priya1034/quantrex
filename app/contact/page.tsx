"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white font-[Poppins] overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
      
      {/* Header Section */}
      <header className="relative z-10 bg-white text-black flex justify-between items-center px-10 py-4 shadow-md">
        <div className="text-3xl font-bold tracking-wide">Quantrex</div>
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li><Link href="/" className="hover:text-blue-500 transition duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition duration-300">About</Link></li>
            <li><Link href="/company" className="hover:text-blue-500 transition duration-300">Company</Link></li>
            <li><Link href="/ourtechnology" className="hover:text-blue-500 transition duration-300">Our Tech</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link></li> {/* Added Contact link */}
          </ul>
        </nav>
      </header>
      
      {/* Contact Section */}
      <motion.section 
        className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <motion.h1 
            className="text-4xl font-bold text-blue-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Get in touch with us for any queries or collaborations.
          </motion.p>
          
          {/* WhatsApp Button */}
          <motion.div 
            className="mt-6 flex space-x-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a 
              href="https://wa.me/9445609495" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button 
                className="border border-green-500 px-8 py-4 rounded-lg text-lg font-medium tracking-wide hover:bg-green-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Chat on WhatsApp
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Contact Form - Integrated with FormSubmit */}
        <motion.div 
          className="mt-10 md:mt-0 max-w-lg w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <form 
            action="https://formsubmit.co/quantrex.ai@gmail.com" 
            method="POST"
            className="bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            {/* Hidden Inputs for extra settings */}
            <input type="hidden" name="_subject" value="New Contact Form Submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="mb-4">
              <label className="block text-gray-400 text-lg font-semibold">Name</label>
              <input 
                type="text" 
                name="name"
                required
                className="w-full p-3 mt-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-lg font-semibold">Email</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full p-3 mt-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-lg font-semibold">Message</label>
              <textarea 
                name="message"
                required
                className="w-full p-3 mt-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                rows={4}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <motion.button 
              type="submit"
              className="w-full border border-blue-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.button>
          </form>
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
