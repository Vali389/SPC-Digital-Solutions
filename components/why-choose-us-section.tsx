"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Clock, Award, HeadphonesIcon, Laptop } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Maximum 15 students per batch for personalized attention and better learning outcomes.",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Weekend and evening batches available to accommodate working professionals and students.",
    },
    {
      icon: Award,
      title: "Industry Experience",
      description: "Learn from 3+ years of real-world development experience in MERN stack projects.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Get your doubts cleared anytime through WhatsApp, email, or dedicated support channels.",
    },
    {
      icon: Laptop,
      title: "Hands-on Projects",
      description: "Build 5+ real-world projects including e-commerce, social media, and business applications.",
    },
    {
      icon: CheckCircle,
      title: "Job Assistance",
      description: "Resume building, interview preparation, and job placement assistance for all students.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-green-400">Vali Tech Hub</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our personalized approach to MERN stack training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                  <reason.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold ml-4">{reason.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
