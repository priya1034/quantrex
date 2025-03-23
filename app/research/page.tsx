export default function Research() {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-16">
        <h1 className="text-4xl font-bold text-center">Research & Innovations</h1>
        <p className="text-center text-gray-400 mt-4">
          Explore our cutting-edge research in quantum computing, AI, and sustainability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800">
            <h2 className="text-xl font-semibold">Quantum Algorithms for AI</h2>
            <p className="text-gray-400 mt-2">Research on quantum-enhanced AI models.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800">
            <h2 className="text-xl font-semibold">Sustainable Waste Management</h2>
            <p className="text-gray-400 mt-2">Using IoT to revolutionize waste tracking.</p>
          </div>
        </div>
      </main>
    );
  }
  