export function CoursesHeroSection() {
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
            <span className="text-white">Master</span>
            <span className="text-accent">MERN</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              COMPREHENSIVE FULL-STACK TRAINING
            </h2>
            <h3 className="text-lg md:text-2xl font-bold text-accent tracking-wider">
              HTML • CSS • JavaScript • React • Node.js • MongoDB • AWS
            </h3>
          </div>

          <div className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            From beginner to job-ready developer in 6 months with hands-on projects and industry mentorship
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">25</div>
              <div className="text-sm text-gray-300">Weeks Training</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
              <div className="text-sm text-gray-300">Live Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-gray-300">Placement</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105">
            Enroll Now
          </button>
          <button className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105">
            View Curriculum
          </button>
        </div>
      </div>
    </section>
  )
}
