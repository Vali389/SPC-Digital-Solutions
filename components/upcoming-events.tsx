import { Button } from "@/components/ui/button"

export function UpcomingEvents() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events</h2>
            <div className="text-gray-400 mb-6">
              <h3 className="text-xl text-white mb-2">Coming Soon</h3>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Positivity Options Masterclass</h3>
                <Button className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-full text-sm">
                  BOOK
                </Button>
              </div>
              <div className="text-gray-400 text-sm space-y-1">
                <p>• 2 Hours</p>
                <p>• Positivity</p>
                <p>• Understanding Options Trading, Butterfly Options trading & Positional Futures</p>
                <p>• Understanding Options Buying</p>
                <p>• Understanding Options Selling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
