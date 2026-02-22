import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Meet Your Instructor</h2>
            <div className="space-y-6 text-lg">
              <p>
                Hi, I&apos;m <span className="text-accent font-semibold">Vali</span>, Founder of Vali&apos;s Tech Hub Pvt Limited. 
                With <span className="text-accent font-semibold">3 years of industry experience</span>, I specialize in
                building modern web applications and mobile apps using cutting-edge technologies.
              </p>
              <p>
                My mission is to make quality tech education accessible to everyone. That's why I offer
                <span className="text-accent font-semibold"> free classes for underprivileged students</span>
                alongside our comprehensive paid courses.
              </p>
              <p>
                I believe in <span className="text-accent font-semibold">hands-on learning</span> with real-time
                projects that prepare you for the industry. My students don't just learn to code - they learn to think
                like developers and solve real-world problems.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Students Trained</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zMqAxT06hRsQ5kypqI0Oilpov6eNYJ.png"
                alt="Vali - Founder of Vali's Tech Hub Pvt Limited"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
