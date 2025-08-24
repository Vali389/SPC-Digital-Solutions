export function CurriculumSection() {
  const modules = [
    {
      title: "Frontend Fundamentals",
      duration: "4 Weeks",
      topics: [
        "HTML5 & Semantic Markup",
        "CSS3 & Flexbox/Grid",
        "JavaScript ES6+ Features",
        "DOM Manipulation",
        "Responsive Design",
      ],
    },
    {
      title: "React.js Mastery",
      duration: "6 Weeks",
      topics: [
        "Components & JSX",
        "State & Props Management",
        "Hooks (useState, useEffect, Custom)",
        "Context API & State Management",
        "React Router & Navigation",
      ],
    },
    {
      title: "Backend with Node.js",
      duration: "5 Weeks",
      topics: [
        "Node.js Fundamentals",
        "Express.js Framework",
        "RESTful API Development",
        "Middleware & Authentication",
        "File Upload & Validation",
      ],
    },
    {
      title: "Database & MongoDB",
      duration: "3 Weeks",
      topics: [
        "MongoDB Basics & CRUD",
        "Mongoose ODM",
        "Database Design Patterns",
        "Aggregation Pipeline",
        "Performance Optimization",
      ],
    },
    {
      title: "Full Stack Integration",
      duration: "4 Weeks",
      topics: [
        "Frontend-Backend Connection",
        "JWT Authentication",
        "Error Handling",
        "Testing Strategies",
        "Performance Optimization",
      ],
    },
    {
      title: "Deployment & AWS",
      duration: "3 Weeks",
      topics: [
        "Git & Version Control",
        "AWS EC2 & S3 Setup",
        "Domain & SSL Configuration",
        "CI/CD Basics",
        "Production Best Practices",
      ],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Complete Curriculum</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            25 weeks of comprehensive MERN stack training with hands-on projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                  {index + 1}
                </div>
                <span className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">{module.duration}</span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-6">{module.title}</h3>

              <ul className="space-y-3">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">What You'll Build</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="text-muted-foreground">• E-commerce Website</p>
                <p className="text-muted-foreground">• Social Media App</p>
                <p className="text-muted-foreground">• Task Management Tool</p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">• Blog Platform</p>
                <p className="text-muted-foreground">• Chat Application</p>
                <p className="text-muted-foreground">• Portfolio Website</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
