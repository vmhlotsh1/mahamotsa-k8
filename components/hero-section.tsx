"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-8 border border-accent/30">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">Excellence as Defined Since 2005</span>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance leading-[1.1] tracking-tight">
          Unforgettable
          <br />
          <span className="text-gradient">Culinary Experiences</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed font-light">
          Delivering exceptional catering rooted in love, quality, and customer satisfaction.
          <span className="text-foreground font-medium"> Proudly serving Gauteng</span> with passion, one plate at a
          time.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
          >
            Explore Our Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-7 border-2 border-foreground/20 hover:bg-foreground/5 hover:border-primary transition-all duration-300 bg-transparent"
          >
            Get in Touch
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-24 pt-12 border-t border-border/50">
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground tracking-wide">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground tracking-wide">Events Catered</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground tracking-wide">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
