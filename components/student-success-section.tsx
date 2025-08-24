"use client"

import { motion } from "framer-motion"
import { Trophy, TrendingUp, Award, Star } from "lucide-react"

export function StudentSuccessSection() {
  const stats = [
    {
      icon: Trophy,
      number: "200+",
      label: "Students Trained",
      description: "Successfully completed MERN stack training",
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Placement Rate",
      description: "Students placed in top companies",
    },
    {
      icon: Award,
      number: "50+",
      label: "Projects Built",
      description: "Real-world applications developed",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Student Rating",
      description: "Average feedback score",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer at TCS",
      text: "Vali's training transformed my career. The hands-on approach and live classes made complex concepts easy to understand.",
    },
    {
      name: "Rahul Kumar",
      role: "React Developer at Infosys",
      text: "The best investment I made for my career. Got placed within 2 months of completing the course.",
    },
    {
      name: "Sneha Patel",
      role: "MERN Stack Developer at Wipro",
      text: "Excellent mentorship and practical projects. Vali sir's guidance helped me land my dream job.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Student <span className="text-green-400">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real students who transformed their careers with our training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="bg-green-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-green-400 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
