"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo.png" alt="Mahamotsa Logo" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">Mahamotsa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="#about"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 tracking-wide"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 tracking-wide"
            >
              Services
            </Link>
            <Link
              href="#showcase"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 tracking-wide"
            >
              Showcase
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 tracking-wide"
            >
              Contact
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-6">
              <Link
                href="#about"
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#showcase"
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Showcase
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full shadow-lg">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
