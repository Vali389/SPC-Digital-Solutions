"use client"

import { motion } from "framer-motion"
import { Code, Users, Lightbulb, Target } from "lucide-react"

export function TrainingApproachSection() {
  const approaches = [
    {
      icon: Code,
      title: "Hands-on Coding",
      description:
        "Learn by building real projects from day one. No theory-only sessions - every concept is immediately applied in practical coding exercises.",
    },
    {
      icon: Users,
      title: "Small Batch Training",
      description:
        "Maximum 15 students per batch to ensure personalized attention and mentorship for every individual learner.",
    },
    {
      icon: Lightbulb,
      title: "Industry-Relevant Curriculum",
      description: "Updated curriculum based on current market demands and latest technologies used by top companies.",
    },
    {
      icon: Target,
      title: "Job-Ready Skills",
      description:
        "Focus on building portfolio projects and interview preparation to make you industry-ready from day one.",
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
            My Training <span className="text-green-400">Approach</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that has helped hundreds of students transition into successful developers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300 group"
            >
              <div className="bg-green-400/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-400/20 transition-colors">
                <approach.icon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{approach.title}</h3>
              <p className="text-gray-300 leading-relaxed">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
