import { Header } from "@/components/header"
import { AboutHeroSection } from "@/components/about-hero-section"
import { AboutSection } from "@/components/about-section"
import { ProfileSection } from "@/components/profile-section"
import { TrainingApproachSection } from "@/components/training-approach-section"
import { LiveClassesSection } from "@/components/live-classes-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TechnologiesExpertiseSection } from "@/components/technologies-expertise-section"
import { SkillsSection } from "@/components/skills-section"
import { TeamSection } from "@/components/team-section"
import { AchievementsSection } from "@/components/achievements-section"
import { LearningResourcesSection } from "@/components/learning-resources-section"
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
      <TrainingApproachSection />
      <LiveClassesSection />
      <WhyChooseUsSection />
      <TechnologiesExpertiseSection />
      <SkillsSection />
      <TeamSection />
      <AchievementsSection />
      <LearningResourcesSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
