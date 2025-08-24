"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, TrendingUp, Globe, Zap, IndianRupee, Users } from "lucide-react"

const careerPaths = [
  {
    title: "Full Stack Developer",
    salary: "₹4-8 LPA",
    growth: "High Demand",
    description: "Build complete web applications from frontend to backend",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    companies: ["Startups", "Product Companies", "Service Companies"],
  },
  {
    title: "Frontend Developer",
    salary: "₹3-6 LPA",
    growth: "Excellent Growth",
    description: "Create beautiful and interactive user interfaces",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    companies: ["Design Studios", "E-commerce", "SaaS Companies"],
  },
  {
    title: "Backend Developer",
    salary: "₹4-7 LPA",
    growth: "Strong Market",
    description: "Build robust server-side applications and APIs",
    skills: ["Node.js", "Express", "MongoDB", "AWS"],
    companies: ["Fintech", "Healthcare", "Enterprise"],
  },
  {
    title: "Mobile App Developer",
    salary: "₹5-9 LPA",
    growth: "Rapidly Growing",
    description: "Develop cross-platform mobile applications",
    skills: ["React Native", "JavaScript", "Mobile UI/UX"],
    companies: ["App Studios", "Startups", "Consulting"],
  },
]

const industryStats = [
  { icon: Briefcase, label: "Job Openings", value: "50,000+", description: "Active MERN positions" },
  { icon: TrendingUp, label: "Salary Growth", value: "25%", description: "Year over year increase" },
  { icon: Globe, label: "Remote Opportunities", value: "70%", description: "Companies offer remote work" },
  { icon: Users, label: "Our Alumni Placed", value: "150+", description: "Successfully placed students" },
]

export function CareerOpportunitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-24 left-24 w-32 h-32 bg-green-500/8 rounded-full blur-xl animate-pulse delay-200"></div>
        <div className="absolute bottom-24 right-24 w-28 h-28 bg-green-400/12 rounded-full blur-lg animate-pulse delay-800"></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-1400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/30">
            Career Opportunities
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Your Future Awaits
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the exciting career paths available after mastering MERN stack development
          </p>
        </motion.div>

        {/* Industry Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {industryStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-3 bg-green-500/20 rounded-xl w-fit mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="font-semibold text-gray-300 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Career Paths */}
        <div className="grid md:grid-cols-2 gap-8">
          {careerPaths.map((career, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{career.title}</h3>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                          <IndianRupee className="h-3 w-3 mr-1" />
                          {career.salary}
                        </Badge>
                        <Badge className="border-green-500/30 text-green-400 bg-green-500/10 hover:bg-green-500/20">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {career.growth}
                        </Badge>
                      </div>
                    </div>
                    <Zap className="h-8 w-8 text-green-400" />
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{career.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Key Skills Required:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, idx) => (
                        <Badge key={idx} className="text-xs bg-green-500/20 text-green-400 hover:bg-green-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Hiring Companies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((company, idx) => (
                        <span key={idx} className="text-sm text-gray-300 bg-slate-700/50 px-3 py-1 rounded-full">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-green-600 to-green-500 text-white max-w-2xl mx-auto border-0 shadow-xl shadow-green-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-6 text-green-100">
                Join our comprehensive MERN stack program and transform your career in just 20 weeks
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 shadow-lg">
                Enroll Now - ₹10,000 Only
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
