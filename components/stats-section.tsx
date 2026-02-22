export function StatsSection() {
  const stats = [
    { number: "3+", label: "Years Experience", description: "Web & Mobile Development" },
    { number: "50+", label: "Projects Delivered", description: "Websites & Mobile Apps" },
    { number: "100+", label: "Projects Completed", description: "Client Success Stories" },
    { number: "100%", label: "Client Focus", description: "Quality & On-Time Delivery" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Success by Numbers</h2>
          <p className="text-xl text-muted-foreground">Proven track record of delivering results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
              <div className="text-5xl font-bold text-accent mb-4">{stat.number}</div>
              <div className="text-xl font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
