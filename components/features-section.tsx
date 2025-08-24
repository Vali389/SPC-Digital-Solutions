import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      title: "Hands-On Projects",
      description: "Build real-world applications that you can showcase in your portfolio",
      icon: "🚀",
    },
    {
      title: "Industry Experience",
      description: "Learn from 3+ years of practical development experience in the field",
      icon: "💼",
    },
    {
      title: "Personal Mentorship",
      description: "Get one-on-one guidance and support throughout your learning journey",
      icon: "👨‍🏫",
    },
    {
      title: "Job-Ready Skills",
      description: "Master the technologies and practices used in modern development teams",
      icon: "⚡",
    },
    {
      title: "Flexible Learning",
      description: "Learn at your own pace with recorded sessions and live doubt-clearing",
      icon: "🎯",
    },
    {
      title: "Community Support",
      description: "Join a community of learners and get help from peers and tutors",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Why Choose Us?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide more than just coding lessons - we prepare you for a successful career in tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
