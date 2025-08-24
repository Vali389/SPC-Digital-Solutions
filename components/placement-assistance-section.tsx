"use client"

import { motion } from "framer-motion"
import { Briefcase, FileText, MessageSquare, TrendingUp, Users, Zap } from "lucide-react"

export function PlacementAssistanceSection() {
  const assistanceFeatures = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Resume Building",
      description: "Professional resume creation and optimization for tech roles",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Interview Preparation",
      description: "Mock interviews and technical question practice sessions",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Industry Connections",
      description: "Direct connections with hiring partners and recruiters",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Job Referrals",
      description: "Active job referrals to top companies and startups",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Guidance",
      description: "Personalized career counseling and growth planning",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Portfolio Review",
      description: "Professional portfolio optimization and project showcase",
    },
  ]

  const stats = [
    { value: "85%", label: "Placement Rate" },
    { value: "₹4.5L", label: "Average Package" },
    { value: "50+", label: "Hiring Partners" },
    { value: "100%", label: "Interview Support" },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-green-400">Placement</span> Assistance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just teach you to code - we help you land your dream job with comprehensive placement support
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assistanceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group text-center"
            >
              <div className="text-green-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-2xl p-8 border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Tech Career?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful students who have landed their dream jobs with our comprehensive placement
              assistance program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:9014084396"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-300 transition-colors duration-300"
              >
                Call Now: 9014084396
              </motion.a>
              <motion.a
                href="mailto:meeravalisk89@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
              >
                Email Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
