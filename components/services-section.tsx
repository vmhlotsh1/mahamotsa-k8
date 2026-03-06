import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, PartyPopper, SparklesIcon } from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Corporate Events",
    description:
      "Professional catering for business meetings, conferences, and corporate gatherings with sophisticated menu options that impress.",
    color: "primary",
  },
  {
    icon: PartyPopper,
    title: "Private Celebrations",
    description:
      "Personalized catering for weddings, birthdays, anniversaries, and intimate family gatherings that create lasting memories.",
    color: "accent",
  },
  {
    icon: SparklesIcon,
    title: "Special Occasions",
    description:
      "Memorable dining experiences for graduations, religious ceremonies, and milestone celebrations that deserve excellence.",
    color: "primary",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6 border border-accent/30">
            <SparklesIcon className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">What We Offer</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-8 text-balance leading-tight">
            Catering for Every <span className="text-gradient">Occasion</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            From intimate gatherings to grand celebrations, we bring culinary excellence to every occasion across
            Gauteng.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card overflow-hidden"
              >
                <CardContent className="p-10 relative">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-${service.color}/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`}
                  />

                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-${service.color} to-${service.color}/70 text-${service.color}-foreground mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
