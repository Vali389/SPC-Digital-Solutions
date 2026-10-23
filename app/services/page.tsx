import { Header } from "@/components/header"
import { ServicesOverview } from "@/components/services-overview"
import { DevelopmentServicesSection } from "@/components/development-services-section"
import { MobileWebDevelopmentSection } from "@/components/mobile-web-development-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { ComparisonSection } from "@/components/comparison-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-24 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 text-white">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital engineering solutions — from custom web development and mobile applications to enterprise cloud infrastructure.
          </p>
        </div>
      </div>
      <ServicesOverview />
      <DevelopmentServicesSection />
      <MobileWebDevelopmentSection />
      <TechnologiesSection />
      <ProjectsShowcase />
      <ComparisonSection />
      <WhyChooseSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
