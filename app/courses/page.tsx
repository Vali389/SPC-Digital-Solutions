import { Header } from "@/components/header"
import { CoursesHeroSection } from "@/components/courses-hero-section"
import { CoursesSection } from "@/components/courses-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { FeaturesSection } from "@/components/features-section"
import { ProjectsBuiltSection } from "@/components/projects-built-section"
import { InstructorSection } from "@/components/instructor-section"
import { CertificationSection } from "@/components/certification-section"
import { PlacementAssistanceSection } from "@/components/placement-assistance-section"
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
      <ProjectsBuiltSection />
      <InstructorSection />
      <CertificationSection />
      <PlacementAssistanceSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
