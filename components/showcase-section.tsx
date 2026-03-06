"use client"

import { Sparkles } from "lucide-react"

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">Our Work</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-8 text-balance leading-tight">
            Crafted with <span className="text-primary">Passion</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Our resilience and passion for food drive us to exceed expectations with every dish we create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src="/professional-catering-buffet-setup-elegant-present.jpg"
              alt="Professional catering setup"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8 text-primary-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-bold mb-3">Professional Setup</h3>
              <p className="text-base opacity-90">Elegant presentation for every event</p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src="/gourmet-plated-food-dish-fine-dining.jpg"
              alt="Gourmet dish"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8 text-accent-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-3xl font-bold mb-3">Culinary Excellence</h3>
              <p className="text-base opacity-90">Dishes that leave lasting impressions</p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer md:col-span-2 shadow-xl hover:shadow-2xl transition-all duration-500">
            <img
              src="/elegant-event-dining-table-setup-wedding-reception.jpg"
              alt="Event setup"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8 text-primary-foreground transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-4xl font-bold mb-3">Memorable Events</h3>
              <p className="text-lg opacity-90">Creating unforgettable experiences across Gauteng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
