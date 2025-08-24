export function JourneySection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose your <span className="text-green-500">Journey</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-green-500 text-black px-8 py-4 rounded-lg mb-4">
              <h3 className="text-2xl font-bold">TRADER'S</h3>
              <h3 className="text-2xl font-bold">PREMIER</h3>
              <h3 className="text-2xl font-bold">LEAGUE</h3>
            </div>
            <p className="text-green-500 font-semibold">A JOURNEY FOR CHAMPIONS</p>
          </div>

          <div className="text-center">
            <div className="bg-green-500 text-black px-8 py-4 rounded-lg mb-4">
              <h3 className="text-2xl font-bold italic">The</h3>
              <h3 className="text-2xl font-bold">Freedom</h3>
              <h3 className="text-2xl font-bold">PROJECT</h3>
            </div>
            <p className="text-green-500 font-semibold">with Asmita Patel</p>
          </div>
        </div>
      </div>
    </section>
  )
}
