"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, TrendingUp, Award } from "lucide-react"

const successStories = [
  {
    icon: Building2,
    title: "E-Commerce Platform",
    client: "Local Retail Business",
    description:
      "Built a complete MERN stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    results: ["300% increase in online sales", "50+ concurrent users", "Mobile-responsive design"],
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    icon: Users,
    title: "Social Learning App",
    client: "Educational Startup",
    description:
      "Developed a mobile-first learning platform with real-time chat, progress tracking, and gamification features.",
    results: ["1000+ active users", "95% user retention", "Cross-platform compatibility"],
    tech: ["React Native", "Express.js", "Socket.io", "AWS"],
  },
  {
    icon: TrendingUp,
    title: "Business Analytics Dashboard",
    client: "Marketing Agency",
    description:
      "Created a comprehensive analytics dashboard with data visualization, reporting, and client management system.",
    results: ["Real-time data insights", "40% faster reporting", "Multi-client architecture"],
    tech: ["Next.js", "Python", "PostgreSQL", "Chart.js"],
  },
]

export function ClientSuccessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-28 h-28 bg-green-500/10 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-16 left-16 w-36 h-36 bg-green-400/8 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-green-500/12 rounded-full blur-lg animate-pulse delay-1200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/30">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Real Projects, Real Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Websites and mobile apps built for businesses - from tutoring platforms to e-commerce and more
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-500/20 rounded-xl mr-4">
                      <story.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{story.title}</h3>
                      <p className="text-sm text-gray-400">{story.client}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{story.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-green-400" />
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {story.tech.map((tech, idx) => (
                      <Badge key={idx} className="text-xs bg-green-500/20 text-green-400 hover:bg-green-500/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
