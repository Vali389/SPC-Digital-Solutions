import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-24">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-wide font-serif">
              <span className="text-white">Vali&apos;s Tech Hub</span>
              <span className="text-accent"> Pvt Limited</span>
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
                WEB & MOBILE DEVELOPMENT
              </h2>
              <h3 className="text-lg md:text-2xl font-bold text-accent tracking-wider">
                Building Digital Solutions for Businesses
              </h3>
            </div>

            <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Vali&apos;s Tech Hub Pvt Limited is a technology company specializing in web development and mobile app development. 
                We help businesses transform their ideas into powerful digital solutions.
              </p>
              <p>
                Founded with a vision to deliver quality software development services, we have completed 50+ projects 
                including websites, e-commerce platforms, tutoring systems, business catalogs, and mobile applications 
                for clients across India and internationally.
              </p>
              <p>
                Our expertise spans React, Next.js, React Native, Node.js, and modern full-stack technologies. 
                We combine technical excellence with client-focused delivery to ensure every project succeeds.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold px-8 py-3 rounded-xl text-lg transition-all duration-300 hover:scale-105"
            >
              Our Services
            </Link>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-500"></div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Vali&apos;s Tech Hub Pvt Limited</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Web Development • Mobile App Development • E-Commerce • Business Websites
          </p>
          <a href="mailto:meeravalisk89@gmail.com" className="text-accent hover:underline font-medium">
            meeravalisk89@gmail.com
          </a>
          <div className="mt-8 text-muted-foreground text-sm">© 2024 Vali&apos;s Tech Hub Pvt Limited. All Rights Reserved.</div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
