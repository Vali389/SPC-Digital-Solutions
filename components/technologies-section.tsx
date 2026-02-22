export function TechnologiesSection() {
  const technologies = [
    { name: "React.js", icon: "⚛️", level: 95 },
    { name: "React Native", icon: "📱", level: 90 },
    { name: "Next.js", icon: "▲", level: 92 },
    { name: "Node.js", icon: "🟢", level: 90 },
    { name: "Express.js", icon: "🚀", level: 90 },
    { name: "MongoDB", icon: "🍃", level: 88 },
    { name: "TypeScript", icon: "🔷", level: 88 },
    { name: "MySQL", icon: "🐬", level: 85 },
    { name: "JavaScript", icon: "💛", level: 95 },
    { name: "AWS", icon: "☁️", level: 80 },
    { name: "Tailwind CSS", icon: "🎨", level: 90 },
    { name: "REST APIs", icon: "🔌", level: 92 },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span className="text-foreground">Technology</span>
            <span className="text-accent"> Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building responsive websites and cross-platform mobile apps with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-lg mb-3">{tech.name}</h3>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div
                    className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground">{tech.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
