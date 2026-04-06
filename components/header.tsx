"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#solutions", label: "Solutions" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 relative overflow-hidden ${
        isScrolled ? "glass-effect shadow-xl" : "bg-background/80 backdrop-blur-sm"
      }`}
      style={{ position: "fixed" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-10 w-8 h-8 bg-gradient-to-br from-emerald-400/30 to-teal-500/20 rounded-full animate-float blur-sm" />
        <div
          className="absolute top-4 right-20 w-6 h-6 bg-gradient-to-br from-green-400/25 to-emerald-500/15 rounded-full animate-float blur-sm"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1 left-1/3 w-10 h-10 bg-gradient-to-br from-teal-400/20 to-green-500/10 rounded-full animate-float blur-sm"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-3 right-1/4 w-7 h-7 bg-gradient-to-br from-emerald-500/25 to-teal-400/15 rounded-full animate-float blur-sm"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-2 left-2/3 w-5 h-5 bg-gradient-to-br from-green-500/30 to-emerald-400/20 rounded-full animate-float blur-sm"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/nerdhub-logo-transparent.png"
              alt="NerdHub Logo"
              width={200}
              height={100}
              className="h-16 md:h-20 w-auto drop-shadow-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg relative group drop-shadow-sm"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-secondary/20 transition-colors drop-shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/20 bg-background/90 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col space-y-4 pt-4 px-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-lg text-left p-2 rounded hover:bg-secondary/20"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
