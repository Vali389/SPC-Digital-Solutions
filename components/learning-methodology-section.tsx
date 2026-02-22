"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Users, Rocket, CheckCircle, Clock } from "lucide-react"

const methodologySteps = [
  {
    icon: BookOpen,
    title: "Discovery & Planning",
    description: "Understand your requirements and plan the project scope",
    duration: "Phase 1",
    features: ["Requirements gathering", "Tech stack selection", "Timeline & milestones"],
  },
  {
    icon: Code,
    title: "Design & Development",
    description: "Build your web or mobile app with modern technologies",
    duration: "Phase 2",
    features: ["UI/UX design", "Frontend & backend", "API integration"],
  },
  {
    icon: Users,
    title: "Testing & Feedback",
    description: "Ensure quality with testing and your feedback",
    duration: "Phase 3",
    features: ["Quality assurance", "Your review", "Iterations"],
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Deploy to production and support you after launch",
    duration: "Phase 4",
    features: ["Deployment", "Training", "Ongoing support"],
  },
]

export function LearningMethodologySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-600 text-white hover:bg-green-700">Our Process</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            How We Build Your Project
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From idea to launch - a proven process for delivering quality web and mobile applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card className="h-full bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-600/20 rounded-xl">
                      <step.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <Badge variant="outline" className="text-xs border-green-400 text-green-400">
                      {step.duration}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">{step.description}</p>

                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-400 flex items-center">
                        <CheckCircle className="h-3 w-3 mr-2 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {index < methodologySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-green-600/10 border-green-400/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Clock className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Build Your Project?</h3>
              <p className="text-slate-300 leading-relaxed">
                Whether you need a website, mobile app, or both - we deliver quality solutions on time. 
                Get in touch to discuss your project and get a quote.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
