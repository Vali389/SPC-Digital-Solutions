import { Button } from "@/components/ui/button"

export function MentorSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Photo collage background */}
          <div className="relative mb-12">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 opacity-30">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="aspect-square bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>

          <div className="text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">A highly admired</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Stock Market Mentor</h3>

            <div className="mb-8">
              <span className="text-green-500 font-bold text-xl">asmita</span>
              <span className="text-white font-bold text-xl">patel</span>
            </div>

            <p className="text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              A woman who is on a mission to uplift the lives of people. Asmita Patel opens the door to financial
              freedom for thousands of people by teaching them stock market and investing early in assets. As a
              responsible and mindful mentor, Asmita is a bestselling finance author and professional trading coach and
              mentor as a trader. She has been trading for more than 8 years and has been mentoring for over 5 years.
              She is also of India's top trading mentors and is a powerful speaker.
            </p>

            <Button className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-full font-semibold">
              Know More About Asmita
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
