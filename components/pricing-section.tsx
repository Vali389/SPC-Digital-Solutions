import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function PricingSection() {
  const plans = [
    {
      name: "Starter Web Presence",
      description: "Ideal for startups and small businesses needing a modern, fast website",
      price: "₹15,000",
      featured: false,
      features: [
        "Responsive Modern Website (5-7 Pages)",
        "SEO Optimization & Fast Load Speed",
        "Mobile-First Responsive Layout",
        "Contact Forms & WhatsApp Integration",
        "Domain & Cloud Hosting Setup",
        "30 Days Post-Launch Support",
      ],
      cta: "Get Started",
    },
    {
      name: "Custom Web Application",
      description: "Complete full-stack platform with database, authentication & APIs",
      price: "₹35,000",
      featured: true,
      features: [
        "Full-Stack Web App (React / Next.js + Node)",
        "Database Architecture (MongoDB / PostgreSQL)",
        "User Authentication & Role-Based Access",
        "Admin Dashboard & Content Management",
        "Payment Gateway Integration",
        "REST / GraphQL APIs & Cloud Deployment",
        "60 Days Dedicated Technical Support",
      ],
      cta: "Request Proposal",
    },
    {
      name: "Mobile & Enterprise Suite",
      description: "Cross-platform mobile apps for iOS & Android + enterprise backend",
      price: "₹55,000+",
      featured: false,
      features: [
        "Cross-Platform Mobile App (React Native)",
        "Native Performance for iOS & Android",
        "Scalable Cloud Infrastructure on AWS",
        "Push Notifications & Real-Time Sync",
        "App Store & Google Play Store Publishing",
        "Comprehensive QA & Automated Testing",
        "90 Days Premium Maintenance & Updates",
      ],
      cta: "Consult Our Team",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Transparent Development Packages</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear, value-driven pricing tailored for high-quality engineering and timely delivery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden flex flex-col justify-between ${
                plan.featured ? "border-accent shadow-xl shadow-accent/10 md:-translate-y-2" : "border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-bold tracking-wider rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-serif text-white">{plan.name}</CardTitle>
                  <CardDescription className="min-h-[40px] mt-2">{plan.description}</CardDescription>
                  <div className="text-4xl font-bold text-accent mt-6">{plan.price}</div>
                  <div className="text-xs text-muted-foreground mt-1">Milestone-based delivery</div>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-sm text-gray-300">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-1.5 shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
              <div className="p-6 pt-0">
                <Link href="/contact" className="w-full block">
                  <Button
                    className={`w-full ${
                      plan.featured
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
