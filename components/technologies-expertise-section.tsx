"use client"

import { motion } from "framer-motion"
import { Database, Globe, Smartphone } from "lucide-react"

export function TechnologiesExpertiseSection() {
  const technologies = [
    { name: "HTML5", level: 95, color: "bg-orange-500" },
    { name: "CSS3", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 92, color: "bg-yellow-500" },
    { name: "React.js", level: 88, color: "bg-cyan-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "MongoDB", level: 80, color: "bg-green-600" },
    { name: "Express.js", level: 87, color: "bg-gray-600" },
    { name: "Python", level: 75, color: "bg-blue-600" },
    { name: "MySQL", level: 82, color: "bg-blue-700" },
    { name: "AWS", level: 70, color: "bg-orange-600" },
    { name: "C++", level: 78, color: "bg-purple-600" },
    { name: "NestJS", level: 72, color: "bg-red-600" },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack MERN application with payment integration, admin panel, and real-time inventory management. Features include user authentication, product catalog, shopping cart, order tracking, and comprehensive analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      icon: <Globe className="w-8 h-8" />,
      features: ["Payment Gateway", "Admin Dashboard", "Real-time Updates", "Mobile Responsive"],
      duration: "3 months",
      complexity: "Advanced",
    },
    {
      title: "Social Media App",
      description:
        "Instagram-like application with real-time chat, story features, and advanced user interactions. Includes photo/video sharing, live messaging, user profiles, and engagement analytics.",
      tech: ["React", "Socket.io", "Express", "AWS", "Redis"],
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Real-time Chat", "Story Features", "Media Upload", "Push Notifications"],
      duration: "4 months",
      complexity: "Expert",
    },
    {
      title: "Learning Management System",
      description:
        "Complete LMS with video streaming, progress tracking, and interactive assignments. Built for educational institutions with course management, student analytics, and certification system.",
      tech: ["Next.js", "Python", "MySQL", "AWS", "Docker"],
      icon: <Database className="w-8 h-8" />,
      features: ["Video Streaming", "Progress Tracking", "Certificates", "Quiz System"],
      duration: "5 months",
      complexity: "Expert",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black/30 via-gray-900/20 to-green-900/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-green-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastery across the full technology stack with hands-on project experience
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Technology Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{tech.name}</span>
                  <span className="text-green-400 font-bold">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`h-3 rounded-full ${tech.color} shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">
              Featured Development <span className="text-green-400">Projects</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real-world applications built with modern technologies and best practices
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-800/60 to-gray-900/40 rounded-2xl p-8 border border-gray-700/50 hover:border-green-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/10 hover:-translate-y-2"
              >
                {/* Project Icon and Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-green-400/20 rounded-xl text-green-400 group-hover:bg-green-400/30 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{project.duration}</div>
                    <div
                      className={`text-xs px-2 py-1 rounded-full ${
                        project.complexity === "Expert"
                          ? "bg-red-500/20 text-red-400"
                          : project.complexity === "Advanced"
                            ? "bg-orange-500/20 text-orange-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {project.complexity}
                    </div>
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="text-2xl font-bold mb-4 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                  {project.title}
                </h4>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">{project.description}</p>

                {/* Key Features */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-200 mb-3">Key Features:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-green-400/15 text-green-400 rounded-lg text-xs font-medium border border-green-400/20 hover:bg-green-400/25 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
