import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Vali",
      role: "Lead Instructor & Founder",
      experience: "3+ Years",
      specialization: "Full Stack Development",
      image: "/vali-instructor-photo.png",
    },
    {
      name: "Francis",
      role: "Full Stack Developer",
      experience: "4+ Years",
      specialization: "MERN Stack & Mobile Apps",
      image: "/professional-developer-portrait.png",
    },
    {
      name: "Shaik Hajira",
      role: "Course Coordinator",
      experience: "2+ Years",
      specialization: "Student Tracking & Support",
      image: "/female-developer-portrait.png",
    },
  ]

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry professionals with years of real-world experience in MERN stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-500/20 group-hover:border-green-500/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-green-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-2">{member.experience}</p>
                <p className="text-gray-300 text-sm">{member.specialization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
