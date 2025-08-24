import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "Keynote Speaker",
      image: "/keynote-speaker-presentation.png",
    },
    {
      title: "Education",
      image: "/financial-education-classroom.png",
    },
    {
      title: "Collaboration",
      image: "/business-collaboration-meeting.png",
    },
    {
      title: "Blog",
      image: "/financial-blog-writing.png",
    },
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">HERE'S WHAT WE OFFER</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
                <Button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-full">EXPLORE</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
