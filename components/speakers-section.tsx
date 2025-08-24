export function SpeakersSection() {
  const speakers = [
    { name: "Vivaan Lath Jain", title: "Former Cricketer" },
    { name: "Dr Jagat Patel", title: "Cardiologist" },
    { name: "Satyajeet Sehgal", title: "Satyajeet Sehgal" },
    { name: "Jatin Gala", title: "Former Cricketer" },
    { name: "Akanksha Gala", title: "Akanksha Gala" },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Past <span className="text-green-500">Speakers</span> at our Events
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 mx-auto"></div>
              <h3 className="text-white font-semibold text-sm">{speaker.name}</h3>
              <p className="text-gray-400 text-xs">{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
