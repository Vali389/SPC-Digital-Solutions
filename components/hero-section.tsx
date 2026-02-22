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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Vali&apos;s Tech Hub
            <span className="block text-accent text-2xl md:text-3xl mt-2">Pvt Limited</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build custom websites and mobile apps that help your business grow — e-commerce, tutoring platforms, business catalogs, and more.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Websites
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Mobile Apps
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              E-Commerce
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Business Solutions
            </span>
          </div>

          <a
            href="/contact"
            className="inline-block mt-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
