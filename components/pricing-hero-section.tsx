export function PricingHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://video.wixstatic.com/video/a1f0da_224c14fca9004e9bbfa8e90de5b70e0d/480p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/30 to-accent/20"></div>
      </div>

      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 pt-24">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-wide font-serif animate-fade-in">
            <span className="text-white">Affordable</span>
            <span className="text-accent">Excellence</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              TRAINING & DEVELOPMENT SERVICES
            </h2>
            <h3 className="text-lg md:text-2xl font-bold text-accent tracking-wider">
              Quality Education • Fair Pricing • Free Classes for Underprivileged
            </h3>
          </div>

          <div className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Professional training courses and custom development services designed to fit every budget
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">₹10,000</div>
              <div className="text-sm text-gray-300">Complete MERN Course</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">FREE</div>
              <div className="text-sm text-gray-300">For Underprivileged</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">Custom</div>
              <div className="text-sm text-gray-300">Development Projects</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105">
            Choose Plan
          </button>
          <button className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  )
}
