"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { Toaster, toast } from "sonner"   // ✅ use Sonner directly

export function ContactSection() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    setLoading(true)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
    setLoading(false)

    const data = await response.json()

    if (response.ok) {
      toast.success("✅ Message Sent! We’ll get back to you soon.", {
        className:
          "bg-white dark:bg-neutral-900 p-4 rounded-xl shadow-lg border border-border text-sm md:text-base",
      })
      form.reset()
    } else {
      toast.error(data.message || "❌ Something went wrong. Please try again later.", {
        className:
          "bg-red-500 text-white p-4 rounded-xl shadow-lg text-sm md:text-base",
      })
    }
  }

  return (
    <section id="contact" className="py-20 gradient-bg-3 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-overlay-soft opacity-70"></div>
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/15 blur-sm animate-pulse"></div>
      <div className="absolute bottom-24 right-16 w-20 h-20 rounded-full bg-gradient-to-br from-secondary/30 to-primary/25 blur-sm"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-accent/25 to-secondary/20 blur-sm animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-secondary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to pamper yourself? Book an appointment or get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-overlay-card backdrop-blur-md border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 🔑 Required Hidden Inputs for Web3Forms */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Contact Form Submission from LuxeNails" />
                <input type="hidden" name="from_name" value="LuxeNails Website" />
                <input type="hidden" name="replyto" value="email" />

                <Input name="name" placeholder="Full Name" className="bg-input border-border" required />
                <Input name="email" placeholder="Email" type="email" className="bg-input border-border" required />
                <Input name="phone" placeholder="Phone" type="tel" className="bg-input border-border" />
                <Textarea name="message" placeholder="Message" rows={4} className="bg-input border-border" required />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-accent"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="gradient-hover-card bg-gradient-to-br from-card/95 via-background/90 to-secondary/5 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-hover-card bg-gradient-to-br from-card/95 via-background/90 to-secondary/5 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@luxenails.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-hover-card bg-gradient-to-br from-card/95 via-background/90 to-secondary/5 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      123 Beauty Lane
                      <br />
                      Elegance City, EC 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 🔔 Toast renderer */}
      <Toaster position="bottom-center" richColors />
    </section>
  )
}
