import { Header } from "@/components/header"
import { PricingHeroSection } from "@/components/pricing-hero-section"
import { PricingSection } from "@/components/pricing-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PricingHeroSection />
      <PricingSection />
      <FeaturesSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
