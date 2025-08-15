import { Users, Award, Heart, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 gradient-bg-2 relative">
      <div className="absolute inset-0 gradient-overlay-soft opacity-60"></div>

      <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-primary/30 to-secondary/40 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-32 right-32 w-12 h-12 bg-gradient-to-br from-secondary/25 to-accent/35 rounded-full blur-sm animate-bounce"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/30 rounded-full blur-sm"></div>
      <div className="absolute bottom-40 left-32 w-8 h-8 bg-gradient-to-br from-primary/40 to-secondary/30 rounded-full blur-sm animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-14 h-14 bg-gradient-to-br from-secondary/35 to-accent/25 rounded-full blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text-primary">About Luxe Nails Studio</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a passion for beauty and wellness, Luxe Nails Studio has been serving our community for over
              8 years. We believe that nail care is not just about beauty—it's about self-care, confidence, and taking
              time for yourself.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified nail technicians combines traditional techniques with the latest trends to create
              stunning results that reflect your unique style.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center bg-primary/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  <div className="text-3xl font-bold text-primary">500+</div>
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center bg-primary/5 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-primary mr-2" />
                  <div className="text-3xl font-bold text-primary">8+</div>
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Personalized care for every client</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Premium products and techniques</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">Certified professional technicians</span>
              </div>
            </div>
          </div>
          <div className="animate-fade-in-right">
            <img
              src="/nail-technician-salon.png"
              alt="Professional nail technician at work in luxury salon"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
