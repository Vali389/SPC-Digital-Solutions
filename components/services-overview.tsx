export function ServicesOverview() {
  const services = [
    {
      title: "MERN Stack Training",
      description: "Complete full-stack development bootcamp with hands-on projects",
      icon: "🎓",
    },
    {
      title: "Website Development",
      description: "Custom websites built with modern technologies and best practices",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android",
      icon: "📱",
    },
    {
      title: "AWS Cloud Training",
      description: "Learn cloud computing and deployment with Amazon Web Services",
      icon: "☁️",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">What I Offer</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From training the next generation of developers to building cutting-edge applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
