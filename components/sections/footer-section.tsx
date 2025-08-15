import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-card via-background to-secondary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text-primary mb-4">Luxe Nails Studio</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your premier destination for luxury nail care and artistic expression. Experience elegance, quality, and
              relaxation.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Gallery", "Pricing"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mon - Fri: 9AM - 7PM</li>
              <li>Saturday: 9AM - 6PM</li>
              <li>Sunday: 10AM - 5PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Luxe Nails Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
