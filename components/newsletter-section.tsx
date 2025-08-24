import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Latest Tech Trends & Course Updates
          </h2>
          <p className="text-gray-300 mb-8">
            Get exclusive access to coding tips, industry insights, and be the first to know about new courses and
            workshops.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Input placeholder="Name" className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400" />
            <Input placeholder="Phone" className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400" />
            <Input placeholder="Email" className="flex-1 bg-gray-800 border-gray-600 text-white placeholder-gray-400" />
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2">Subscribe Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
