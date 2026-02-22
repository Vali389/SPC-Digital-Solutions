import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      title: "Responsive Web Design",
      description: "Websites that look great and work perfectly on desktop, tablet, and mobile devices",
      icon: "🌐",
    },
    {
      title: "Cross-Platform Mobile Apps",
      description: "Single codebase for iOS and Android - faster delivery, lower cost",
      icon: "📱",
    },
    {
      title: "Modern Tech Stack",
      description: "React, Next.js, Node.js, React Native - industry-standard technologies",
      icon: "⚡",
    },
    {
      title: "Fast & Scalable",
      description: "Optimized performance and architecture that grows with your business",
      icon: "🚀",
    },
    {
      title: "End-to-End Development",
      description: "From design to deployment - complete solutions for web and mobile",
      icon: "🛠️",
    },
    {
      title: "Client-Focused",
      description: "Clear communication, on-time delivery, and support after launch",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Why Choose Us?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional web and mobile development with quality, reliability, and results that speak for themselves
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
