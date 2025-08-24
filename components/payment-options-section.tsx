"use client"

import { motion } from "framer-motion"
import { CreditCard, Banknote, Smartphone, Calendar } from "lucide-react"

export function PaymentOptionsSection() {
  const paymentOptions = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Credit/Debit Cards",
      description: "Secure payment with all major cards",
      features: ["Instant enrollment", "EMI options available", "100% secure"],
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "Bank Transfer",
      description: "Direct bank transfer with receipt",
      features: ["No processing fees", "Quick verification", "Bank statement proof"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "UPI/Digital Wallets",
      description: "Pay instantly with UPI or wallets",
      features: ["PhonePe, GPay, Paytm", "Instant confirmation", "Cashback offers"],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Installment Plans",
      description: "Flexible payment in installments",
      features: ["3-6 month plans", "No interest charges", "Easy monthly payments"],
    },
  ]

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Flexible <span className="text-green-400">Payment Options</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the payment method that works best for you. We offer multiple secure options to make learning
            accessible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paymentOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group"
            >
              <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-400 mb-4">{option.description}</p>
              <ul className="space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
