import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Frontend Developer at TCS",
      content:
        "Vali's teaching style is exceptional. The hands-on projects helped me land my first job in tech. The free classes initiative shows his genuine care for students.",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      role: "Full-Stack Developer",
      content:
        "Best investment I made for my career. The MERN stack course was comprehensive and practical. Now I'm building my own startup!",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      role: "Software Engineer at Infosys",
      content:
        "Coming from a non-tech background, I was worried about learning to code. Vali made it so easy to understand. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Student Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our graduates who are now working in top tech companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-accent">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
