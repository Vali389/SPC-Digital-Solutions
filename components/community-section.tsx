"use client"

import { motion } from "framer-motion"
import { Users, MessageCircle, Trophy, Heart } from "lucide-react"

export function CommunitySection() {
  const communityFeatures = [
    {
      icon: Users,
      title: "50+ Projects Delivered",
      description: "Websites and mobile apps built for businesses across industries - from startups to established brands.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Stay in touch via WhatsApp - quick responses, regular updates, and clear project communication.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "Tutoring platforms, e-commerce sites, business websites, and mobile apps - all delivered successfully.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Heart,
      title: "Post-Launch Support",
      description: "We don't disappear after launch. Get support, updates, and maintenance when you need it.",
      color: "from-red-500 to-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Let&apos;s Build Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a web or mobile project in mind? Get in touch and let&apos;s turn your idea into reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 mx-auto`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">Website or mobile app - let&apos;s discuss your requirements and get started!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
