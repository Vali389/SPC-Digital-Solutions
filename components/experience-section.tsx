export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior MERN Stack Developer",
      company: "Freelance & Contract Work",
      period: "2021 - Present",
      description:
        "Developed 100+ websites and mobile applications using React, Node.js, MongoDB, and Express. Specialized in full-stack solutions for various industries.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "React Native"],
    },
    {
      title: "Full Stack Developer & Trainer",
      company: "Vali's Training Center",
      period: "2022 - Present",
      description:
        "Training 500+ students in MERN stack development while continuing to build real-world projects. Providing hands-on experience and mentorship.",
      technologies: ["Teaching", "Mentoring", "Project Management", "AWS", "DevOps"],
    },
    {
      title: "Web Developer",
      company: "Various Startups",
      period: "2021 - 2022",
      description:
        "Built responsive websites and web applications for startups and small businesses. Focused on modern UI/UX and performance optimization.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            3+ years of hands-on development and teaching experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-lg text-accent font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
