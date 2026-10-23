"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Do I need any prior programming experience?",
    answer:
      "No prior experience is required! Our course is designed for complete beginners. We start with the basics of HTML, CSS, and JavaScript before moving to advanced MERN stack concepts.",
  },
  {
    question: "What is the duration of the course?",
    answer:
      "The complete MERN stack course is 20 weeks long with 3-4 hours of classes per week. This includes theory, hands-on practice, projects, and career guidance.",
  },
  {
    question: "Do you provide job placement assistance?",
    answer:
      "Yes! We provide comprehensive career support including resume building, interview preparation, portfolio development, and connections with our hiring partners.",
  },
  {
    question: "Can I attend classes online?",
    answer:
      "Yes, we offer both online and offline classes. Online students get access to live sessions, recorded lectures, and one-on-one mentorship sessions.",
  },
  {
    question: "What projects will I build during the course?",
    answer:
      "You'll build 5+ real-world projects including an e-commerce website, social media app, task management system, and a final capstone project of your choice.",
  },
  {
    question: "Is there any EMI option for the course fee?",
    answer:
      "Yes, we offer flexible payment options including EMI. We also provide free classes for students from economically weaker sections.",
  },
  {
    question: "What technologies will I learn?",
    answer:
      "You'll master MongoDB, Express.js, React.js, Node.js, plus additional technologies like AWS, Git, HTML5, CSS3, JavaScript ES6+, and deployment tools.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes, you'll receive a completion certificate and project certificates. We also help you showcase your work on professional platforms like LinkedIn and GitHub.",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-400/15 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-green-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-500/20 text-green-400 hover:bg-green-500/30 border-green-500/30">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about our MERN stack training program
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Collapsible>
                  <Card className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
                    <CollapsibleTrigger className="w-full" onClick={() => toggleItem(index)}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-left">
                            <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                              <HelpCircle className="h-5 w-5 text-green-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                              openItems.includes(index) ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <div className="ml-14 pt-2 border-t border-slate-700">
                          <p className="text-gray-300 leading-relaxed pt-4">{faq.answer}</p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="bg-gradient-to-r from-green-600 to-green-500 text-white max-w-2xl mx-auto border-0 shadow-xl shadow-green-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="mb-6 text-green-100">
                Feel free to reach out to us directly. We're here to help you make the right decision for your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:9014084396"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
                >
                  Call: 9014084396
                </a>
                <a
                  href="mailto:contact@spcdigitalsolutions.com"
                  className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors shadow-lg"
                >
                  Email Us
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
