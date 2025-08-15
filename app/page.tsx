"use client"

import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function NailStudioPage() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/15 via-secondary/10 to-muted/5 rounded-full blur-2xl float-animation"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-secondary/12 via-muted/8 to-primary/6 rounded-full blur-xl float-animation-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-gradient-to-br from-accent/10 via-primary/8 to-muted/12 rounded-full blur-3xl float-animation"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-muted/15 via-secondary/10 to-accent/8 rounded-full blur-xl float-animation-delayed"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-primary/8 via-accent/12 to-secondary/10 rounded-full blur-2xl float-animation"></div>
      </div>

      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
