"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-accent via-accent to-accent/80 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-accent/25 transition-all duration-300 group-hover:scale-105">
            <span className="text-accent-foreground font-bold text-xl">V</span>
          </div>
          <div>
            <div className="text-foreground font-bold text-xl font-serif">Vali's Tech Hub</div>
            <div className="text-accent text-sm font-medium">#ValisTechHub</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                pathname === item.href
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                  : "text-foreground hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground p-3 rounded-xl hover:bg-accent/10 transition-all duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-accent/10 hover:text-accent"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
