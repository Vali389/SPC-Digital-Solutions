import { Trophy, Award, Users, Code } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      number: "500+",
      title: "Students Trained",
      description: "Successfully mentored over 500 students in MERN stack development",
    },
    {
      icon: Award,
      number: "85%",
      title: "Placement Rate",
      description: "High placement success rate with top companies",
    },
    {
      icon: Users,
      number: "50+",
      title: "Projects Delivered",
      description: "Completed diverse web and mobile applications for clients",
    },
    {
      icon: Code,
      number: "3+",
      title: "Years Experience",
      description: "Professional development and training experience",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proud milestones that reflect our commitment to excellence in tech education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-green-500/20 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                {achievement.number}
              </h3>
              <h4 className="text-xl font-semibold text-white mb-3">{achievement.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
