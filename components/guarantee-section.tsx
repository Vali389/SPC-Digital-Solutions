"use client"

import { motion } from "framer-motion"
import { Shield, RefreshCw, Award, Users } from "lucide-react"

export function GuaranteeSection() {
  const guarantees = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "100% Job Guarantee",
      description: "Get placed within 6 months or get full refund",
      highlight: "Money Back Promise",
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: "Lifetime Support",
      description: "Access to all future updates and community support",
      highlight: "Forever Learning",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Industry Certification",
      description: "Recognized certificate to boost your career prospects",
      highlight: "Career Boost",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Small Batch Size",
      description: "Maximum 15 students per batch for personalized attention",
      highlight: "Personal Attention",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-900/20 to-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-green-400">Guarantees</span> to You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We stand behind our training with solid guarantees that ensure your success and satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {guarantee.icon}
                </div>
                <div className="inline-block bg-green-400/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {guarantee.highlight}
                </div>
                <h3 className="text-xl font-semibold mb-3">{guarantee.title}</h3>
                <p className="text-gray-400">{guarantee.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-xl p-8 border border-green-400/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your <span className="text-green-400">Journey?</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful developers who transformed their careers with our comprehensive MERN stack
              training program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors duration-300">
                Enroll Now - ₹10,000
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400/10 transition-colors duration-300">
                Apply for Free Classes
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
