"use client"

import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "MD Irfan",
    role: "Hyderabad",
    project: "BrainBreeze Tutors - Online Tutoring Platform",
    content:
      "Vali developed our complete online tutoring platform from scratch and the result exceeded all our expectations. The platform includes live classes, student dashboards, payment integration, and a beautiful admin panel. His attention to detail and commitment to delivering quality work is outstanding. BrainBreeze Tutors is now serving hundreds of students. Highly recommended for any development project!",
    rating: 5,
  },
  {
    name: "MD Raise Yaman",
    role: "Client",
    project: "Tiles Business Website",
    content:
      "We needed a professional website to showcase our tiles catalog and reach more customers. Vali delivered exactly that and more. The website features a stunning product gallery, easy navigation, contact forms, and is fully responsive. The project was completed on time with great communication throughout. Our online presence has grown significantly since the launch. Will definitely work together again for future projects!",
    rating: 5,
  },
  {
    name: "MD Farooq",
    role: "Hyderabad",
    project: "Pipes Business Website",
    content:
      "Vali's expertise in MERN stack and Spring Boot is impressive. He built our pipes business website with a modern design, product catalog, inquiry system, and smooth performance. The website has helped us attract new customers and streamline our business operations. Professional, responsive, and always available to address our needs. Our pipes business is running smoothly online. Great developer and a pleasure to work with!",
    rating: 5,
  },
  {
    name: "Roshan",
    role: "China",
    project: "Web & Mobile Solution",
    content:
      "Working with Vali across different time zones was seamless. He built both our web application and mobile app with exceptional quality. The solutions are fast, user-friendly, and have transformed how we serve our customers. His technical skills combined with his professionalism make him stand out. The mobile app and web solution he built for us has been a game-changer for our business. I would recommend him to anyone looking for reliable development services.",
    rating: 5,
  },
  {
    name: "Khaja",
    role: "Client",
    project: "Interiors Business Website",
    content:
      "Vali developed our interiors business website and did an excellent job. The website showcases our interior design portfolio, services, and has helped us attract new clients. Clean design, easy to navigate, and professional. Very satisfied with the work and would recommend to others looking for a quality website.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  })

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-20 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our clients who trust us with their projects
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 -ml-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_50%] min-w-0 pl-6">
                  <Card className="h-full hover:shadow-lg transition-shadow">
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
                        <div className="text-sm text-accent">{testimonial.project}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background shadow-lg border hover:bg-muted transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background shadow-lg border hover:bg-muted transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
