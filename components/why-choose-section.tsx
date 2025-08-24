export function WhyChooseSection() {
  const reasons = [
    {
      title: "Hands-on Learning",
      description: "Real-time projects and practical experience with industry-standard tools",
      icon: "💻",
    },
    {
      title: "Expert Mentorship",
      description: "3+ years of professional experience in MERN stack development",
      icon: "👨‍🏫",
    },
    {
      title: "Affordable Pricing",
      description: "Quality education at ₹10,000 with free classes for underprivileged students",
      icon: "💰",
    },
    {
      title: "Complete Support",
      description: "From basics to advanced concepts with dedicated tutors and guidance",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Why Choose Vali's Training Center?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with personalized learning and real-world application
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
