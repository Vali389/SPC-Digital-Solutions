import { Header } from "@/components/header"
import { AboutHeroSection } from "@/components/about-hero-section"
import { AboutSection } from "@/components/about-section"
import { ProfileSection } from "@/components/profile-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <AboutHeroSection />
      <AboutSection />
      <ProfileSection />
      <MissionVisionSection />
      <SkillsSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
