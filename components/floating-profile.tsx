"use client"

import { useState } from "react"

export function FloatingProfile() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Profile Circle */}
      <div className="relative cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        {/* Green Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 blur-md animate-pulse"></div>

        {/* Profile Image */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-green-500 shadow-lg hover:scale-110 transition-all duration-300">
          <img
            src="/vali-instructor-photo.png"
            alt="Vali - MERN Stack Developer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 animate-bounce">
          <span className="block w-full h-full rounded-full bg-green-400 animate-ping"></span>
        </div>
      </div>

      {/* Expanded Text Card */}
      {isExpanded && (
        <div className="absolute bottom-20 left-0 bg-gray-900/95 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 min-w-[280px] shadow-xl animate-in slide-in-from-bottom-2 duration-300">
          <div className="text-center">
            <h3 className="text-green-400 font-bold text-lg mb-1">You!</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Always curious,
              <br />
              interactive & ready to
              <br />
              celebrate <span className="text-green-400 font-semibold">win moments!</span>
            </p>
          </div>

          {/* Arrow pointing to profile */}
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-gray-900 border-r border-b border-green-500/30 transform rotate-45"></div>
        </div>
      )}
    </div>
  )
}
