export function HeroSection() {
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

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/15 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>

          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/25 rounded-full blur-md animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-accent/20 rounded-full blur-lg animate-bounce delay-700"></div>

          <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-40 left-40 w-3 h-3 bg-accent rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent rounded-full animate-ping delay-500"></div>

          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-pulse delay-500"></div>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--accent)/0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
        </div>
      </div>

      <div className="relative z-20 text-center max-w-7xl mx-auto px-4 pt-24">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-wide font-serif animate-fade-in">
            <span className="text-white">Full</span>
            <span className="text-accent">Stack</span>
            <span className="text-white">Developer</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wider">VALI MEERA</h2>
            <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-accent tracking-wider">
              MERN • Mobile Apps • Web Development
            </h3>
          </div>

          <div className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            3+ Years Experience • Expert Training • Real-World Projects • Client Solutions
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
              <div className="text-sm text-gray-300">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
              <div className="text-sm text-gray-300">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">3+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
              <div className="text-sm text-gray-300">Job Ready</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-accent/25">
            Start Your Journey
          </button>
          <button className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
