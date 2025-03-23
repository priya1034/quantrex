import Link from "next/link";

export default function WhyUs() {
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

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-2xl md:text-2xl font-bold text-blue-500 leading-tight">
            Why Choose Quantrex?
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            At Quantrex, we are redefining the future with AI-Quantum solutions, ensuring efficiency, security, and industry-leading innovations.
          </p>
          
          <ul className="mt-6 space-y-3 text-lg text-gray-300">
            <li><strong className="text-white">Faster & More Efficient</strong> – Our AI-Quantum solutions outperform traditional AI and classical computing models.</li>
            <li><strong className="text-white">Future-Proof Security</strong> – Integrated post-quantum cryptography ensures long-term data protection.</li>
            <li><strong className="text-white">Industry-Specific Optimization</strong> – Tailored solutions for finance, logistics, pharmaceuticals, cybersecurity, and beyond.</li>
            <li><strong className="text-white">Enterprise-Ready Quantum Computing</strong> – Access Quantum Computing as a Service (QCaaS) for seamless deployment.</li>
            <li><strong className="text-white">Quantum Cloud Solutions</strong> – Scalable, secure, real-time quantum computing for enterprises.</li>
          </ul>
          
          <div className="mt-6">
            <Link href="/technology">
              <button className="border border-blue-500 px-8 py-4 rounded-lg text-lg hover:bg-orange-500 hover:text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img src="/whyus.png" alt="Why Choose Us" className="w-[500px] rounded-lg shadow-lg"/>
        </div>
      </section>
    </main>
  );
}