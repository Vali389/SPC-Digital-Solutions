export function PhilosophySection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-green-500">Philosophy</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-6xl md:text-8xl font-bold mb-8">
            <span className="text-green-500">Trade</span>
            <br />
            <span className="text-white">in</span>
            <span className="text-green-500">15</span>
            <span className="text-white">mins</span>
            <br />
            <span className="text-green-500">a</span>
            <span className="text-white">day.</span>
          </div>

          <div className="bg-black border border-green-500 inline-block px-6 py-2 rounded">
            <span className="text-white font-bold">NO</span>
            <span className="text-green-500 font-bold ml-2">INDICATORS</span>
            <br />
            <span className="text-white font-bold">NO</span>
            <span className="text-green-500 font-bold ml-2">PATTERNS</span>
            <br />
            <span className="text-white font-bold">NO</span>
            <span className="text-green-500 font-bold ml-2">GUIDELINES</span>
            <br />
            <span className="text-white font-bold">NO</span>
            <span className="text-green-500 font-bold ml-2">CHARTS</span>
            <br />
            <div className="bg-green-500 text-black px-4 py-1 rounded mt-2">
              <span className="font-bold">JUST PRICE ACTION</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Price Action Trading System</h3>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Highly Objective & Mechanical System</h3>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 transform rotate-45"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Trend-Following</h3>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 grid grid-cols-2 gap-1">
                <div className="bg-black rounded-sm"></div>
                <div className="bg-black rounded-sm"></div>
                <div className="bg-black rounded-sm"></div>
                <div className="bg-black rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-white font-semibold mb-2">Basic Maths</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
