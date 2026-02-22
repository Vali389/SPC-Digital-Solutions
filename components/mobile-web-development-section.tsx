"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Zap, Layers } from "lucide-react"

export function MobileWebDevelopmentSection() {
  const offerings = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications - business sites, portfolios, dashboards, e-commerce, and complex web platforms. Built with React, Next.js for fast, responsive, and SEO-friendly results.",
      items: ["Business Websites", "E-Commerce", "Web Apps", "Dashboards"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile apps for iOS and Android using React Native. One codebase, two platforms - faster development and lower cost without compromising quality.",
      items: ["iOS & Android", "React Native", "Native Performance", "App Store Ready"],
    },
    {
      icon: Zap,
      title: "Full-Stack Solutions",
      description: "Complete development from frontend to backend - APIs, databases, authentication, and deployment. Web and mobile solutions that work together seamlessly.",
      items: ["REST APIs", "Database Design", "Cloud Deployment", "Integration"],
    },
    {
      icon: Layers,
      title: "What We Build",
      description: "Tutoring platforms, business websites, e-commerce stores, tiles & pipes catalogs, interiors portfolios, and custom web/mobile solutions for any industry.",
      items: ["Tutoring Platforms", "Product Catalogs", "Business Sites", "Custom Apps"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Mobile & Web <span className="text-accent">Development</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We build websites and mobile apps that help businesses grow, reach customers, and succeed online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-accent/20">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm rounded-full bg-accent/20 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
