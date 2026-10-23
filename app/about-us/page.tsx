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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wide font-serif">
              <span className="text-white">SPC Digital Solutions</span>
              <span className="text-accent"> Pvt Limited</span>
            </h1>

            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-wider">
                ENTERPRISE WEB & MOBILE DEVELOPMENT
              </h2>
              <h3 className="text-lg md:text-2xl font-bold text-accent tracking-wider">
                Engineering Digital Products for Global Businesses
              </h3>
            </div>

            <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                SPC Digital Solutions Pvt Limited is a technology firm specializing in custom web applications, cross-platform mobile apps, and enterprise digital solutions.
                We help businesses transform their complex requirements into high-impact digital solutions.
              </p>
              <p>
                Led by Founder Sarah and Co-Founder Babu, we have successfully completed 100+ projects
                including web platforms, e-commerce systems, customer portals, business product catalogs, and iOS & Android mobile applications
                for clients across diverse global industries.
              </p>
              <p>
                Our engineering capabilities span Next.js, React, React Native, Node.js, TypeScript, and modern cloud architectures.
                We combine technical precision with client-centric delivery to ensure measurable business success.
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
              href="/services"
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
          <h3 className="text-3xl font-bold mb-8">SPC Digital Solutions Pvt Limited</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Web Development • Mobile App Development • Enterprise Cloud Solutions • UI/UX Design
          </p>
          <a href="mailto:contact@spcdigitalsolutions.com" className="text-accent hover:underline font-medium">
            contact@spcdigitalsolutions.com
          </a>
          <div className="mt-8 text-muted-foreground text-sm">© 2024 SPC Digital Solutions Pvt Limited. All Rights Reserved.</div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
