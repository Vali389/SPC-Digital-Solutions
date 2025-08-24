import { Header } from "@/components/header"
import { ContactHeroSection } from "@/components/contact-hero-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ContactHeroSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
