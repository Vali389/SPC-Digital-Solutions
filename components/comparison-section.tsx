"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const features = [
    "Clean, Modular & Scalable Architecture",
    "Cross-Platform iOS & Android Native Performance",
    "Direct Communication with Founding Engineers",
    "Production-Ready Cloud Infrastructure & AWS",
    "100% Complete IP & Source Code Ownership",
    "Comprehensive QA & Automated Testing",
    "Transparent Weekly Milestone Demonstrations",
    "Complimentary Post-Launch Warranty & Support",
    "Enterprise-Grade Security & Encryption",
    "Modern, Responsive UI/UX Design System",
    "SEO, Core Web Vitals & Speed Optimization",
    "Dedicated Post-Delivery Maintenance Plans",
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
            Why Partner with <span className="text-green-400">SPC Digital Solutions</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare our dedicated engineering approach with traditional software agencies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-800/80">
              <div className="text-left font-semibold text-gray-400">Features & Deliverables</div>
              <div className="text-center font-bold text-green-400">SPC Digital Solutions</div>
              <div className="text-center font-semibold text-gray-400">Traditional Agencies</div>
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="grid grid-cols-3 gap-4 p-4 border-t border-gray-700/50 hover:bg-gray-800/30 transition-colors duration-300 items-center"
              >
                <div className="text-gray-300 text-sm font-medium">{feature}</div>
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
