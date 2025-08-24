export function IndustryPartnersSection() {
  const partners = [
    { name: "TCS", logo: "/generic-tech-logo.png" },
    { name: "Infosys", logo: "/infosys-logo.png" },
    { name: "Wipro", logo: "/wipro-logo.png" },
    { name: "Accenture", logo: "/accenture-logo.png" },
    { name: "Cognizant", logo: "/cognizant-logo.png" },
    { name: "HCL", logo: "/generic-tech-logo.png" },
  ]

  const startups = [
    { name: "TechStart", logo: "/abstract-startup-logo.png" },
    { name: "InnovateLab", logo: "/innovation-startup-logo.png" },
    { name: "CodeCraft", logo: "/coding-startup-logo.png" },
    { name: "DevSolutions", logo: "/development-startup-logo.png" },
  ]

  return (
    <section className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Industry Partners & Placement Companies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our students get placed in top companies and innovative startups
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-white mb-8">Top MNCs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center text-white mb-8">Growing Startups</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {startups.map((startup, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 group border border-green-500/20"
              >
                <img
                  src={startup.logo || "/placeholder.svg"}
                  alt={startup.name}
                  className="max-h-10 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            <span className="text-green-400 font-semibold">85%</span> of our students get placed within
            <span className="text-green-400 font-semibold"> 3 months</span> of course completion
          </p>
        </div>
      </div>
    </section>
  )
}
