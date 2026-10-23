import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Engineering Digital Excellence
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Welcome to <span className="text-accent font-semibold">SPC Digital Solutions</span>. 
                Led by <span className="text-accent font-semibold">Sarah</span> (Founder) and{" "}
                <span className="text-accent font-semibold">Babu</span> (Co-Founder), we are a technology and digital engineering firm dedicated to building next-generation digital products.
              </p>
              <p>
                We specialize in custom web applications, cross-platform mobile apps for iOS and Android, enterprise cloud architecture, and modern UI/UX design. Our team partners with businesses of all sizes — from high-growth startups to established enterprises.
              </p>
              <p>
                At SPC Digital Solutions, we emphasize <span className="text-accent font-semibold">agile engineering, clean code architecture, and scalable performance</span>. We don't just write code — we solve complex technical challenges and engineer solutions that accelerate business growth.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-xs text-muted-foreground mt-1">Years Industry Exp</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">100+</div>
                  <div className="text-xs text-muted-foreground mt-1">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-xs text-muted-foreground mt-1">Global Clients</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">99.8%</div>
                  <div className="text-xs text-muted-foreground mt-1">Satisfaction Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src="/business-collaboration-meeting.png"
                alt="SPC Digital Solutions Team and Strategy Meeting"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
