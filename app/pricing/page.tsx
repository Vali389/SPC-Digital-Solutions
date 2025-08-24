import { Header } from "@/components/header"
import { PricingHeroSection } from "@/components/pricing-hero-section"
import { PricingSection } from "@/components/pricing-section"
import { DevelopmentServicesSection } from "@/components/development-services-section"
import { FeaturesSection } from "@/components/features-section"
import { PaymentOptionsSection } from "@/components/payment-options-section"
import { ComparisonSection } from "@/components/comparison-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PricingHeroSection />
      <PricingSection />
      <DevelopmentServicesSection />
      <FeaturesSection />
      <PaymentOptionsSection />
      <ComparisonSection />
      <GuaranteeSection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
