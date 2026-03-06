import { Heart, Award, Users, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">Our Mission</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-8 text-balance leading-tight">
            Crafted with <span className="text-primary">Love</span> & <span className="text-accent">Passion</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed text-pretty font-light">
            At Mahamotsa Trading Enterprise, we are committed to delivering unforgettable culinary experiences rooted in
            love, quality, and customer satisfaction. As a proudly home-based business serving the Gauteng region, every
            dish we create is infused with care and crafted to leave a lasting impression. Our resilience and passion
            for food drive us to exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="group text-center p-8 rounded-2xl bg-background hover:bg-primary/5 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-primary/20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Heart className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Made with Love</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every dish is crafted with passion and care, ensuring each bite tells a story of dedication and quality.
            </p>
          </div>

          <div className="group text-center p-8 rounded-2xl bg-background hover:bg-accent/5 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-accent/20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/70 text-accent-foreground mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Quality First</h3>
            <p className="text-muted-foreground leading-relaxed">
              We source the finest ingredients and maintain the highest standards in every aspect of our service.
            </p>
          </div>

          <div className="group text-center p-8 rounded-2xl bg-background hover:bg-primary/5 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-primary/20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Customer Focused</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your satisfaction drives us. We work closely with you to exceed expectations at every event.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
