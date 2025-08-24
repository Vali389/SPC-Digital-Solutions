"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Users, Rocket, CheckCircle, Clock } from "lucide-react"

const methodologySteps = [
  {
    icon: BookOpen,
    title: "Theory Foundation",
    description: "Start with solid fundamentals and core concepts",
    duration: "Week 1-3",
    features: ["Interactive lectures", "Concept mapping", "Quick assessments"],
  },
  {
    icon: Code,
    title: "Hands-on Practice",
    description: "Apply knowledge through guided coding exercises",
    duration: "Week 4-8",
    features: ["Live coding sessions", "Debugging practice", "Code reviews"],
  },
  {
    icon: Users,
    title: "Collaborative Projects",
    description: "Work on team projects to simulate real work environment",
    duration: "Week 9-15",
    features: ["Team collaboration", "Git workflows", "Agile methodology"],
  },
  {
    icon: Rocket,
    title: "Real-world Deployment",
    description: "Deploy your projects and build a professional portfolio",
    duration: "Week 16-20",
    features: ["Cloud deployment", "Portfolio building", "Interview prep"],
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
          <Badge className="mb-4 bg-green-600 text-white hover:bg-green-700">Learning Methodology</Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Structured Learning Path
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our proven 4-step methodology ensures you master each concept before moving forward
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
              <h3 className="text-2xl font-bold mb-4 text-white">20-Week Intensive Program</h3>
              <p className="text-slate-300 leading-relaxed">
                Complete transformation from beginner to job-ready developer with personalized mentorship, real-world
                projects, and career guidance throughout your journey.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
