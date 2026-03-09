import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ShowcaseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

<footer className="mt-20 border-t border-[#d9c3a3]/30 bg-[#f7f2eb] text-[#2b1d0e]">
  <div className="mx-auto max-w-7xl px-6 py-12">
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="/#contact" className="transition hover:text-[#c89b5a]">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/#services" className="transition hover:text-[#c89b5a]">
              Our Services
            </a>
          </li>
          <li>
            <a href="/#about" className="transition hover:text-[#c89b5a]">
              About Us
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Legal</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href="/paia-manual.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#c89b5a]"
            >
              PAIA Manual
            </a>
          </li>
          <li>
            <a
              href="/privacy-notice.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#c89b5a]"
            >
              Privacy Notice
            </a>
          </li>
          <li>
            <a
              href="/form-2-request-for-access.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#c89b5a]"
            >
              Form 2: Request for Access
            </a>
          </li>
          <li>
            <a
              href="/form-3-outcome-and-fees.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#c89b5a]"
            >
              Form 3: Outcome & Fees
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">About</h3>
        <ul className="space-y-3 text-sm">
          <li>21 Brindley Street CE2, Vanderbijlpark, 1911</li>
          <li>
            <a href="tel:0169811446" className="transition hover:text-[#c89b5a]">
              016 981 1446
            </a>
          </li>
          <li>
            <a
              href="mailto:admin@mahamotsa.co.za"
              className="transition hover:text-[#c89b5a]"
            >
              admin@mahamotsa.co.za
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
        <div className="flex gap-4 text-sm">
          <a href="#" className="transition hover:text-[#c89b5a]">Facebook</a>
          <a href="#" className="transition hover:text-[#c89b5a]">Instagram</a>
          <a href="#" className="transition hover:text-[#c89b5a]">WhatsApp</a>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-[#d9c3a3]/30 pt-6 text-xs text-[#6b5b4d]">
      © {new Date().getFullYear()} Mahamotsa Trading Enterprise. All rights reserved.
    </div>
  </div>
</footer>