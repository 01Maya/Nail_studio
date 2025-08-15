import { Button } from "@/components/ui/button"
import { Calendar, Eye } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg-1">
      <div className="absolute inset-0 gradient-overlay-soft"></div>
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-nail-salon.png"
          alt="Luxury nail salon interior"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 opacity-10 bg-black text-sidebar-foreground"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text-primary">Luxe Nails Studio</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Where elegance meets artistry. Experience premium nail care in our serene, luxury environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20 transition-all duration-500 bg-transparent backdrop-blur-sm border-primary/30"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
