export function ProjectsShowcase() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/modern-ecommerce-dashboard.png",
    },
    {
      title: "Mobile Banking App",
      description: "React Native app with secure authentication",
      tech: ["React Native", "Firebase", "Node.js"],
      image: "/mobile-banking-app.png",
    },
    {
      title: "Learning Management System",
      description: "Educational platform with video streaming",
      tech: ["Next.js", "PostgreSQL", "AWS"],
      image: "/online-learning-dashboard.png",
    },
    {
      title: "Real Estate Portal",
      description: "Property listing website with advanced search",
      tech: ["React", "Express", "MySQL"],
      image: "/real-estate-listings.png",
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span className="text-foreground">Featured</span>
            <span className="text-accent"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-impact web and mobile solutions engineered for businesses across diverse industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
