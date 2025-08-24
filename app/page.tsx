import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { ProfileSection } from "@/components/profile-section"
import { CoursesSection } from "@/components/courses-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <ProfileSection />
      <TechnologiesSection />
      <CoursesSection />
      <FeaturesSection />
      <ProjectsShowcase />
      <StatsSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
