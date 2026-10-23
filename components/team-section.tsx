import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah",
      role: "Founder",
      experience: "6+ Years Experience",
      specialization: "Digital Strategy, System Architecture & Executive Leadership",
      image: "/female-developer-portrait.png",
    },
    {
      name: "Babu",
      role: "Co-Founder",
      experience: "5+ Years Experience",
      specialization: "Full-Stack Development, Cloud Infrastructure & Mobile Solutions",
      image: "/professional-developer-portrait.png",
    },
  ]

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Our Leadership
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the visionaries leading SPC Digital Solutions to deliver industry-leading software and digital products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group shadow-xl"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-green-500/30 group-hover:border-green-500/70 transition-all duration-300 shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300 pointer-events-none"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-green-400 font-semibold text-lg mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-3 font-medium">{member.experience}</p>
                <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">{member.specialization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
