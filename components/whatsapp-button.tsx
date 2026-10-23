"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = "919014084396"
    const message = encodeURIComponent("Hello SPC Digital Solutions! I would like to discuss a project.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="relative cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleWhatsAppClick}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>

        {/* Floating WhatsApp Action Button */}
        <div className="relative w-14 h-14 bg-gradient-to-tr from-green-600 to-green-400 rounded-full flex items-center justify-center border-2 border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-16 right-0 bg-gray-900/95 backdrop-blur-md text-white p-3 rounded-xl shadow-2xl border border-green-500/30 whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="text-sm font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
              SPC Digital Solutions
            </div>
            <p className="text-xs text-gray-300 mt-0.5">Chat with our engineering team</p>
          </div>
        )}
      </div>
    </div>
  )
}
