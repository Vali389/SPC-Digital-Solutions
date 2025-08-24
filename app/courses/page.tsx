import { Header } from "@/components/header"
import { CoursesHeroSection } from "@/components/courses-hero-section"
import { CoursesSection } from "@/components/courses-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Courses() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <CoursesHeroSection />
      <CoursesSection />
      <CurriculumSection />
      <FeaturesSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
