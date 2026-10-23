import { Header } from "@/components/header"
import { AboutHeroSection } from "@/components/about-hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesExpertiseSection } from "@/components/technologies-expertise-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TeamSection } from "@/components/team-section"
import { AchievementsSection } from "@/components/achievements-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <AboutHeroSection />
      <AboutSection />
      <TechnologiesExpertiseSection />
      <SkillsSection />
      <ProjectsShowcase />
      <WhyChooseUsSection />
      <TeamSection />
      <AchievementsSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
