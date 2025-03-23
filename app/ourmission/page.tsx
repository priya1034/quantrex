"use client";
import Link from "next/link";
import Image from "next/image";

export default function Mission() {
  return (
    <main className="bg-black text-white min-h-screen font-[Poppins]">
      {/* Header Section */}
      <header className="bg-white text-black flex justify-between items-center px-10 py-4 shadow-md">
        {/* Logo Placeholder */}
        <div className="text-2xl font-bold">
          <span className="text-blue-500">Quantrex</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link href="/product" className="hover:text-blue-500">Product</Link></li>
            <li><Link href="/company" className="hover:text-blue-500">Company</Link></li>
            <li><Link href="/blogs" className="hover:text-blue-500">Blogs</Link></li>
            <li><Link href="/resources" className="hover:text-blue-500">Resources</Link></li>
            <li><Link href="/news" className="hover:text-blue-500">News</Link></li>
          </ul>
        </nav>
      </header>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-2xl md:text-2xl font-bold text-blue-500 leading-tight">
            Our Mission
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            At Quantrex, our mission is to accelerate the future of technology by pioneering advancements in Quantum Computing, Artificial Intelligence, and High-Performance Computing. We aim to empower industries with cutting-edge solutions that enhance computational efficiency, optimize data processing, and unlock new possibilities in scientific research and business applications.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            By fostering innovation, collaboration, and sustainability, we strive to build transformative solutions that shape a smarter, more efficient world.
          </p>
          <blockquote className="mt-4 italic text-gray-400 text-lg">
            &quot;Quantum computing will transform the world, enabling us to solve problems that were previously impossible, and to understand the universe in ways we never thought possible.&quot;
            <br /> — Peter Shor
          </blockquote>
          <div className="mt-6">
            <Link href="/ourtechnology">
              <button className="border border-blue-500 px-8 py-4 rounded-lg text-lg hover:bg-orange-500 hover:text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <Image
            src="/mission.png"
            alt="Our Mission"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
