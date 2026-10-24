import { Link } from "react-router-dom"

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
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-accent/20"></div>
      </div>

      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 pt-24">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wide font-serif animate-fade-in">
            <span className="text-white">Predictable</span>
            <span className="text-accent"> Pricing</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              SOFTWARE & APP DEVELOPMENT SERVICES
            </h2>
            <h3 className="text-lg md:text-2xl font-bold text-accent tracking-wider">
              High-Caliber Engineering • Transparent Quotes • Fixed Milestones
            </h3>
          </div>

          <div className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Professional web and mobile application development with transparent scoping, clear milestones, and dedicated post-launch support.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center p-4 rounded-xl bg-slate-900/60 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-accent">₹15,000+</div>
              <div className="text-sm text-gray-300 mt-1">Custom Websites</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-900/60 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-accent">₹35,000+</div>
              <div className="text-sm text-gray-300 mt-1">Full-Stack Web Apps</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-900/60 border border-border">
              <div className="text-2xl md:text-3xl font-bold text-accent">₹55,000+</div>
              <div className="text-sm text-gray-300 mt-1">Cross-Platform Mobile Apps</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}
