import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CoursesSection() {
  const courses = [
    {
      title: "HTML & CSS Fundamentals",
      description: "Master the building blocks of web development with semantic HTML and modern CSS techniques.",
      duration: "4 weeks",
      level: "Beginner",
      topics: ["HTML5 Semantics", "CSS Grid & Flexbox", "Responsive Design", "CSS Animations"],
    },
    {
      title: "JavaScript Mastery",
      description: "Deep dive into JavaScript ES6+, DOM manipulation, and modern programming concepts.",
      duration: "6 weeks",
      level: "Intermediate",
      topics: ["ES6+ Features", "Async/Await", "DOM Manipulation", "API Integration"],
    },
    {
      title: "React.js Development",
      description: "Build dynamic user interfaces with React hooks, state management, and component architecture.",
      duration: "8 weeks",
      level: "Intermediate",
      topics: ["React Hooks", "State Management", "Component Design", "React Router"],
    },
    {
      title: "Node.js & Express",
      description: "Create robust backend applications with Node.js, Express, and RESTful API development.",
      duration: "6 weeks",
      level: "Intermediate",
      topics: ["Express Framework", "REST APIs", "Authentication", "Database Integration"],
    },
    {
      title: "MongoDB & Database Design",
      description: "Learn NoSQL database design, MongoDB operations, and data modeling best practices.",
      duration: "4 weeks",
      level: "Intermediate",
      topics: ["MongoDB Operations", "Data Modeling", "Aggregation", "Database Security"],
    },
    {
      title: "Full-Stack MERN Projects",
      description: "Build complete applications combining MongoDB, Express, React, and Node.js.",
      duration: "10 weeks",
      level: "Advanced",
      topics: ["Project Architecture", "Deployment", "Testing", "Performance Optimization"],
    },
  ]

  return (
    <section id="courses" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Our Courses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive curriculum designed to take you from beginner to full-stack developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-serif">{course.title}</CardTitle>
                  <span className="text-sm bg-accent/10 text-accent px-2 py-1 rounded">{course.level}</span>
                </div>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-accent">Duration: {course.duration}</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Topics Covered:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
