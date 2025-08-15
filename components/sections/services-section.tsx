import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Palette, Clock, Star } from "lucide-react"

const services = [
  {
    title: "Classic Manicure",
    description: "Traditional nail care with cuticle treatment and polish application",
    image: "/pastel-pink-manicure.png",
    duration: "45 min",
    price: "$35",
    icon: Sparkles,
  },
  {
    title: "Gel Extensions",
    description: "Long-lasting gel extensions with custom shaping and design",
    image: "/glossy-gel-extensions.png",
    duration: "90 min",
    price: "$65",
    icon: Star,
  },
  {
    title: "Nail Art Design",
    description: "Custom artistic designs tailored to your personal style",
    image: "/floral-pastel-nails.png",
    duration: "60 min",
    price: "$45",
    icon: Palette,
  },
  {
    title: "Luxury Pedicure",
    description: "Complete foot care with massage and premium polish",
    image: "/luxury-pastel-pedicure.png",
    duration: "75 min",
    price: "$55",
    icon: Sparkles,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium nail care services, each designed to pamper and perfect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group gradient-hover-card bg-gradient-to-br from-card/95 via-background/90 to-secondary/5 border-primary/10 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm p-2 rounded-full">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className="w-5 h-5 text-primary" />
                    <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
