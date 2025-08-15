"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely love this place! The attention to detail is incredible and the atmosphere is so relaxing.",
    service: "Gel Extensions",
  },
  {
    name: "Emily Chen",
    rating: 5,
    text: "Best nail art in the city! The artists are so talented and creative. I always leave feeling pampered.",
    service: "Nail Art Design",
  },
  {
    name: "Maria Rodriguez",
    rating: 5,
    text: "The luxury pedicure is heavenly. Such a peaceful environment and professional service.",
    service: "Luxury Pedicure",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 gradient-bg-2 relative">
      <div className="absolute inset-0 gradient-overlay-soft opacity-50"></div>
      <div className="absolute top-24 right-24 w-18 h-18 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 blur-sm animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-14 h-14 rounded-full bg-gradient-to-br from-secondary/25 to-accent/15 blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-primary">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from our satisfied clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-overlay-card backdrop-blur-md border-primary/20 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-xl text-card-foreground mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-primary font-semibold">{testimonials[currentTestimonial].name}</div>
              <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].service}</div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
