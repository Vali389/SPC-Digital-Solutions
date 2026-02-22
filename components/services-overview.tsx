export function ServicesOverview() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies - from business sites to complex web platforms",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android - native performance with React Native",
      icon: "📱",
    },
    {
      title: "E-Commerce & Business Websites",
      description: "Online stores, product catalogs, and business websites that drive growth and sales",
      icon: "🛒",
    },
    {
      title: "Full-Stack Solutions",
      description: "End-to-end development - frontend, backend, database, and deployment for web and mobile",
      icon: "⚡",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Mobile & Web Development</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building custom websites and mobile apps that transform businesses and reach users everywhere
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
