"use client"

import { motion } from "framer-motion"
import { Award, Download, Star, Verified } from "lucide-react"

export function CertificationSection() {
  const certificationFeatures = [
    {
      icon: <Verified className="w-6 h-6" />,
      title: "Industry Recognized",
      description: "Certificate valued by top companies and startups",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Skill Validation",
      description: "Proves your expertise in MERN stack development",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Digital & Physical",
      description: "Get both digital certificate and printed copy",
    },
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
            Get <span className="text-green-400">Certified</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Earn a professional certificate upon successful completion of the course and showcase your skills to
            employers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold">MERN Stack Developer Certificate</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-300">Student Name:</span>
                    <span className="font-semibold">Your Name Here</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-300">Course:</span>
                    <span className="font-semibold">Full Stack MERN Development</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                    <span className="text-gray-300">Duration:</span>
                    <span className="font-semibold">25 Weeks</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Instructor:</span>
                    <span className="font-semibold text-green-400">Vali</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                  <p className="text-green-400 text-sm text-center">
                    "This certifies that the above named student has successfully completed the comprehensive MERN Stack
                    Development course."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {certificationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className="text-green-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-xl p-6 border border-green-400/20"
            >
              <h4 className="text-xl font-semibold mb-3 text-green-400">Certificate Benefits</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Add to your LinkedIn profile and resume
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Showcase your skills to potential employers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Join our alumni network for career opportunities
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
