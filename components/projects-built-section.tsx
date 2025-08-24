"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function ProjectsBuiltSection() {
  const projects = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-Commerce Platform",
      description: "Full-stack online store with payment integration, admin dashboard, and inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Media App",
      description: "Real-time chat application with user authentication, post sharing, and notifications",
      tech: ["React Native", "Socket.io", "Express", "JWT"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Task Management System",
      description: "Project management tool with team collaboration, file sharing, and progress tracking",
      tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Learning Management System",
      description: "Online education platform with video streaming, quizzes, and progress analytics",
      tech: ["MERN Stack", "Video.js", "Chart.js", "Cloudinary"],
    },
  ]

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Real Projects You'll <span className="text-green-400">Build</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gain hands-on experience by building industry-standard applications that you can showcase in your portfolio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm border border-green-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
