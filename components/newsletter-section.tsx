import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Get Access to your Free Stock Market Mastery Now!
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Input placeholder="Name" className="flex-1 bg-gray-100 border-gray-300" />
            <Input placeholder="Phone" className="flex-1 bg-gray-100 border-gray-300" />
            <Input placeholder="Email" className="flex-1 bg-gray-100 border-gray-300" />
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-2">Get Instant Access</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
