import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    name: "Essential",
    price: "$45",
    description: "Perfect for regular maintenance",
    features: ["Classic Manicure", "Basic Polish", "Cuticle Care", "Hand Massage"],
  },
  {
    name: "Premium",
    price: "$75",
    description: "Our most popular package",
    features: ["Gel Manicure", "Nail Art (Simple)", "Extended Massage", "Premium Polish", "Aftercare Kit"],
    popular: true,
  },
  {
    name: "Luxury",
    price: "$120",
    description: "The ultimate nail experience",
    features: ["Gel Extensions", "Custom Nail Art", "Full Spa Treatment", "Premium Products", "Complimentary Drink"],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background relative">
      <div className="absolute top-16 left-16 w-20 h-20 rounded-full bg-gradient-to-br from-primary/25 to-accent/15 blur-sm animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-gradient-to-br from-secondary/30 to-primary/20 blur-sm"></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-secondary/25 blur-sm animate-bounce"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Pricing Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your nail care needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative gradient-hover-card bg-gradient-to-br from-card/95 via-background/90 to-secondary/5 backdrop-blur-sm ${
                plan.popular
                  ? "ring-2 ring-primary/30 shadow-2xl scale-105 bg-gradient-to-br from-primary/5 via-accent/3 to-secondary/8"
                  : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary via-accent to-primary shadow-lg">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-card-foreground">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-card-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full transition-all duration-500 ${
                    plan.popular
                      ? "bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent shadow-lg hover:shadow-xl"
                      : "hover:bg-gradient-to-r hover:from-secondary/20 hover:to-muted/20"
                  }`}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
