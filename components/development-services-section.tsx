"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Server, Database, Palette, Zap } from "lucide-react"

export function DevelopmentServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      price: "Starting from ₹15,000",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Ready"],
      price: "Starting from ₹25,000",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Server,
      title: "Full-Stack Solutions",
      description: "Complete web applications with backend integration",
      features: ["MERN Stack", "Database Design", "API Development", "Cloud Deployment"],
      price: "Starting from ₹35,000",
      color: "from-purple-500 to-pink-600",
    },
  ]

  const additionalServices = [
    { icon: Database, title: "Database Design", price: "₹5,000+" },
    { icon: Palette, title: "UI/UX Design", price: "₹8,000+" },
    { icon: Zap, title: "Performance Optimization", price: "₹3,000+" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
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
            Development Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional website and mobile app development services for businesses and startups
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-700 pt-6">
                <div className="text-3xl font-bold text-green-400 mb-4">{service.price}</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                <p className="text-green-400 font-bold">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6">Contact us for personalized quotes and project discussions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Contact for Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-500 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-500/10 transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
