import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { MobileWebDevelopmentSection } from "@/components/mobile-web-development-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ClientSuccessSection } from "@/components/client-success-section"
import { LearningMethodologySection } from "@/components/learning-methodology-section"
import { CommunitySection } from "@/components/community-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <MobileWebDevelopmentSection />
      <TechnologiesSection />
      <FeaturesSection />
      <StatsSection />
      <ClientSuccessSection />
      <LearningMethodologySection />
      <TestimonialsSection />
      <CommunitySection />
      <WhyChooseSection />
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
