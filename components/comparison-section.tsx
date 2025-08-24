"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const features = [
    "Live Interactive Classes",
    "Recorded Session Access",
    "1-on-1 Doubt Resolution",
    "Real-time Project Building",
    "Industry Mentor Support",
    "Job Placement Assistance",
    "Certificate of Completion",
    "Lifetime Community Access",
    "Free Revision Classes",
    "Mobile App Development",
    "AWS Cloud Training",
    "Interview Preparation",
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
            Why Choose <span className="text-green-400">Vali Tech Hub?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare our comprehensive training program with others in the market.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-800/80">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-400">Features</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-400">Vali Tech Hub</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-400">Others</h3>
              </div>
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="grid grid-cols-3 gap-4 p-4 border-t border-gray-700/50 hover:bg-gray-800/30 transition-colors duration-300"
              >
                <div className="text-gray-300">{feature}</div>
                <div className="text-center">
                  <Check className="w-5 h-5 text-green-400 mx-auto" />
                </div>
                <div className="text-center">
                  <X className="w-5 h-5 text-red-400 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
