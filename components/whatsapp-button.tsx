"use client"

import { useState } from "react"

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Profile Image with Green Glow and Wave Animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-60 animate-pulse"></div>
          <img
            src="/vali-instructor-photo.png"
            alt="Vali"
            className="relative w-16 h-16 rounded-full object-cover border-2 border-green-400 shadow-lg transition-all duration-300 hover:scale-110 hover:animate-wave-hand"
          />
        </div>

        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm text-white p-3 rounded-lg shadow-xl border border-green-400/30 min-w-[200px] text-center">
          <h3 className="text-lg font-bold text-white mb-1">You!</h3>
          <p className="text-sm text-gray-300">
            Always curious, interactive & ready to celebrate{" "}
            <span className="text-green-400 font-semibold">win moments!</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave-hand {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(-22deg); }
          38% { transform: rotate(15deg); }
          53% { transform: rotate(-15deg); }
          70% { transform: rotate(8deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave-hand {
          animation: wave-hand 0.6s ease-in-out;
        }
      `}</style>
    </div>
  )
}
