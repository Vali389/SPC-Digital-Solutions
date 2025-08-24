"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Lightbulb } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Mission & Vision
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering the next generation of developers with practical skills and real-world experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To democratize quality tech education by making MERN stack development accessible to everyone, regardless
              of their financial background. We believe in practical learning through real projects and providing
              ongoing support to help students succeed in their careers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>Quality education for all</span>
              </div>
              <div className="flex items-center text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>Hands-on project experience</span>
              </div>
              <div className="flex items-center text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>Career-focused training</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To create a thriving ecosystem of skilled developers who can build innovative solutions and contribute to
              India's digital transformation. We envision a future where quality tech education is accessible to
              everyone, creating opportunities for all.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Skilled developer ecosystem</span>
              </div>
              <div className="flex items-center text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Innovation through technology</span>
              </div>
              <div className="flex items-center text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span>Equal opportunities for all</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30"
          >
            <div className="flex items-center mb-4">
              <Heart className="w-8 h-8 text-purple-400 mr-3" />
              <h4 className="text-xl font-semibold text-white">Core Values</h4>
            </div>
            <p className="text-gray-300">
              Integrity, Excellence, Accessibility, and Community-driven learning form the foundation of everything we
              do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-500/30"
          >
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 text-orange-400 mr-3" />
              <h4 className="text-xl font-semibold text-white">Innovation Focus</h4>
            </div>
            <p className="text-gray-300">
              We constantly evolve our curriculum and teaching methods to stay ahead of industry trends and
              technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
