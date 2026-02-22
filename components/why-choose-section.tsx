export function WhyChooseSection() {
  const reasons = [
    {
      title: "Web & Mobile Expertise",
      description: "3+ years building websites and mobile apps - from business sites to full platforms",
      icon: "💻",
    },
    {
      title: "Modern Tech Stack",
      description: "React, Next.js, React Native, Node.js - proven technologies for scalable solutions",
      icon: "⚡",
    },
    {
      title: "On-Time Delivery",
      description: "Clear timelines, regular updates, and projects delivered as promised",
      icon: "📅",
    },
    {
      title: "End-to-End Support",
      description: "From concept to launch and beyond - we stay with you through deployment",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Why Choose Us for Your Project?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional web and mobile development with quality results and dedicated support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl flex-shrink-0">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
