export default function Services() {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-16">
        <h1 className="text-4xl font-bold text-center">Our Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { title: "Quantum Computing", desc: "Consultation & Application Development." },
            { title: "IT & Research", desc: "Cutting-edge IT services & experimental research." },
            { title: "Waste Management Tech", desc: "AI-driven waste tracking & recycling solutions." },
            { title: "AI in Mining", desc: "Automation & safety analysis for mining operations." },
            { title: "Healthcare", desc: "Medical card services & AI-powered diagnostics." },
          ].map((service, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="text-gray-400 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  