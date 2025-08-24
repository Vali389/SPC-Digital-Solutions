import Image from "next/image"

export function ProfileSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="relative">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-accent/40 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-accent/80 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <Image
                      src="/vali-instructor-photo.png"
                      alt="Vali - MERN Stack Instructor"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl animate-pulse"></div>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-4xl font-bold font-serif text-foreground">You!</h2>
              <p className="text-xl text-muted-foreground max-w-md mx-auto leading-relaxed">
                Always curious, interactive & ready to celebrate{" "}
                <span className="text-accent font-semibold">win moments!</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <div className="text-lg font-medium text-foreground mb-1">Years Experience</div>
              <div className="text-sm text-muted-foreground">In MERN Stack Development</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-lg font-medium text-foreground mb-1">Students Trained</div>
              <div className="text-sm text-muted-foreground">Successful Career Transitions</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-lg font-medium text-foreground mb-1">Projects Delivered</div>
              <div className="text-sm text-muted-foreground">Websites & Mobile Apps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
