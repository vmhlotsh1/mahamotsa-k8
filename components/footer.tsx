import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="Mahamotsa Logo" fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Mahamotsa</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Delivering unforgettable culinary experiences rooted in love, quality, and customer satisfaction across
              Gauteng since 2005.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@mahamotsa.co.za"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#showcase"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Gauteng, South Africa</li>
              <li>+27 XX XXX XXXX</li>
              <li>info@mahamotsa.co.za</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Mahamotsa Trading Enterprise. All rights reserved. | Excellence as Defined
          </p>
        </div>
      </div>
    </footer>
  )
}
