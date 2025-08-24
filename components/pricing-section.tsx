import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Simple, Affordable Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quality education shouldn't break the bank. We believe in making tech education accessible to all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif">Complete MERN Stack Course</CardTitle>
              <CardDescription>Full curriculum with hands-on projects</CardDescription>
              <div className="text-4xl font-bold text-accent mt-4">₹10,000</div>
              <div className="text-sm text-muted-foreground">One-time payment</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Complete MERN Stack Curriculum
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  10+ Real-world Projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Personal Mentorship
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Job Placement Assistance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Lifetime Course Access
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Certificate of Completion
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Enroll Now</Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-accent">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-sm font-semibold">
              FREE
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif">Free Classes</CardTitle>
              <CardDescription>For underprivileged students</CardDescription>
              <div className="text-4xl font-bold text-accent mt-4">₹0</div>
              <div className="text-sm text-muted-foreground">No cost, just dedication</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Basic Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  HTML, CSS, JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Group Learning Sessions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Basic Projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Community Support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Pathway to Paid Course
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                Apply for Free Classes
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="text-accent font-semibold">Note:</span> Free classes are available for students who
            demonstrate financial need. We believe everyone deserves a chance to learn and grow in tech.
          </p>
        </div>
      </div>
    </section>
  )
}
