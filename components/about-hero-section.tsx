import Link from "next/link"

export function AboutHeroSection() {
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
            <span className="text-white">About </span>
            <span className="text-accent">SPC Digital Solutions</span>
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
              ENTERPRISE WEB & MOBILE ENGINEERING
            </h2>
            <h3 className="text-lg md:text-2xl font-bold text-accent tracking-wider">
              Transforming Ideas into High-Impact Digital Reality
            </h3>
          </div>

          <div className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
            Delivering cutting-edge full-stack web applications, scalable mobile solutions, and enterprise software designed to empower modern businesses.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/services"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
