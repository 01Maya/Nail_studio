const galleryImages = [
  { src: "/pastel-pink-gold-manicure.png", alt: "Elegant pastel pink manicure" },
  { src: "/nail lavender.jpg", alt: "Lavender gel extensions" },
  { src: "/floral-cream-pink-nails.png", alt: "Floral nail art design" },
  { src: "/luxury-pastel-pedicure.png", alt: "Luxury pastel pedicure" },
  { src: "/nude cream gel.jpg", alt: "Nude cream gel nails" },
  { src: "/pastel-rainbow-ombre-nails.png", alt: "Pastel rainbow ombre" },
  { src: "/minimalist-white-gold-nails.png", alt: "Minimalist gold accent nails" },
  { src: "/soft-pink-french-pearls.png", alt: "Pearl French manicure" },
  { src: "/pastel-marble-nails.png", alt: "Pastel marble nails" },
  { src: "/floer pattern nail.jpg", alt: "Dried flower nail art" },
  { src: "/peach cream nail.jpg", alt: "Peach cream gradient" },
  { src: "/lace nail pattern.jpg", alt: "Lace pattern nail art" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 gradient-bg-1 relative">
      <div className="absolute inset-0 gradient-overlay-soft opacity-40"></div>
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-sm animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 rounded-full bg-gradient-to-br from-secondary/25 to-primary/15 blur-sm animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-secondary/30 blur-md opacity-60"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text-primary">Our Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning nail art and satisfied clients.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:scale-105 shimmer-effect break-inside-avoid mb-4"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-secondary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center">
                <p className="text-white text-sm font-medium p-4 text-center">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
