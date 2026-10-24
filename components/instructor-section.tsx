"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Code2, Users } from "lucide-react"

export function InstructorSection() {
  const achievements = [
    { icon: <Code2 className="w-6 h-6" />, label: "3+ Years Experience", value: "Professional Development" },
    { icon: <Users className="w-6 h-6" />, label: "500+ Students", value: "Successfully Trained" },
    { icon: <Award className="w-6 h-6" />, label: "50+ Projects", value: "Delivered for Clients" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Live Classes", value: "Interactive Learning" },
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
            Meet the <span className="text-green-400">Founders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical leadership from the Founders of SPC Digital Solutions who have delivered 100+ digital projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img
                src="/female-developer-portrait.png"
                alt="Sarah - Founder of SPC Digital Solutions"
                className="w-full h-full rounded-full object-cover border-4 border-green-400/30 relative z-10"
              />
            </div>
            <h3 className="text-3xl font-bold mb-2">Sarah & Babu</h3>
            <p className="text-green-400 text-xl mb-4">Founders of SPC Digital Solutions</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Founders of SPC Digital Solutions with 5+ years of combined experience in building scalable web applications,
              mobile apps, and enterprise cloud solutions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {["JavaScript", "React.js", "Node.js", "MongoDB", "React Native", "AWS"].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm border border-green-400/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 text-center group"
              >
                <div className="text-green-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{achievement.label}</div>
                <div className="text-gray-300 text-sm">{achievement.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
