"use client"

import { motion } from "framer-motion"
import { Video, Clock, Calendar, Users, CheckCircle } from "lucide-react"

export function LiveClassesSection() {
  const features = [
    {
      icon: Video,
      title: "Interactive Live Sessions",
      description: "Real-time coding sessions with instant doubt resolution",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Morning, evening, and weekend batches available",
    },
    {
      icon: Calendar,
      title: "Regular Schedule",
      description: "Consistent 3 sessions per week for structured learning",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Maximum 15 students for personalized attention",
    },
  ]

  const benefits = [
    "Live coding demonstrations",
    "Instant doubt clearing",
    "Peer-to-peer learning",
    "Recorded sessions for revision",
    "Interactive Q&A sessions",
    "Real-time project guidance",
  ]

  return (
    <section className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-green-400">Live Classes</span> Available
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our interactive live sessions and learn alongside fellow developers in real-time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="bg-green-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-400/10 to-blue-400/10 p-8 rounded-2xl border border-green-400/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">What You Get in Live Classes</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-4 bg-green-400/10 rounded-lg border border-green-400/30"
            >
              <p className="text-green-400 font-semibold text-center">Next Batch Starts: January 15th, 2025</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
