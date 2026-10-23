"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Award, HeadphonesIcon, Laptop, ShieldCheck } from "lucide-react"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Laptop,
      title: "End-to-End Delivery",
      description: "From product discovery and UI/UX design to full-stack engineering and cloud deployment.",
    },
    {
      icon: Clock,
      title: "Agile & Transparent",
      description: "Structured sprint cycles, regular milestone demos, and open communication throughout your project.",
    },
    {
      icon: Award,
      title: "Battle-Tested Tech Stack",
      description: "Expertise in Next.js, React, React Native, Node.js, TypeScript, and AWS cloud solutions.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Dedicated Support",
      description: "Round-the-clock technical assistance, proactive monitoring, and post-launch maintenance.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Grade Security",
      description: "Robust data encryption, secure authentication, and industry best practices baked into every line of code.",
    },
    {
      icon: CheckCircle,
      title: "Proven Business Impact",
      description: "100+ digital applications successfully launched with measurable results and high user engagement.",
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
            Why Choose <span className="text-green-400">SPC Digital Solutions</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our client-centric digital engineering and delivery excellence
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
                <h3 className="text-xl font-semibold ml-4 text-white">{reason.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
