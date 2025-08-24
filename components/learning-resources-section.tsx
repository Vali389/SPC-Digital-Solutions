import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Video, Code, Users } from "lucide-react"

export function LearningResourcesSection() {
  const resources = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Study Materials",
      description:
        "Access to detailed notes, documentation, and reference materials for all topics covered in the course.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Recorded Sessions",
      description:
        "All live classes are recorded and available for lifetime access, so you can revisit concepts anytime.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Practice Projects",
      description: "Hands-on coding exercises and mini-projects to reinforce learning and build your portfolio.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description:
        "Join our active student community for peer learning, doubt resolution, and networking opportunities.",
    },
  ]

  return (
    <section className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Learning Resources & Support
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to succeed in your MERN stack journey, from study materials to community support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="text-green-400 mb-4 flex justify-center group-hover:text-green-300 transition-colors duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
