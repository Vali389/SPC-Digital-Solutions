import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your coding journey? Contact us today and take the first step towards your tech career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xl">📞</span>
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-muted-foreground">+91 9014084396</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xl">✉️</span>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">meeravalisk89@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xl">🎓</span>
                </div>
                <div>
                  <div className="font-semibold">Specialization</div>
                  <div className="text-muted-foreground">MERN Stack Development</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent text-xl">⏰</span>
                </div>
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-muted-foreground">Within 24 hours</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-serif">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <span className="mr-2">📱</span>
                Call Now: +91 9014084396
              </Button>

              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <span className="mr-2">✉️</span>
                Send Email
              </Button>

              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <span className="mr-2">💬</span>
                WhatsApp Chat
              </Button>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <h4 className="font-semibold text-accent mb-2">Free Consultation</h4>
                <p className="text-sm text-muted-foreground">
                  Not sure which course is right for you? Book a free 15-minute consultation to discuss your goals and
                  get personalized recommendations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
