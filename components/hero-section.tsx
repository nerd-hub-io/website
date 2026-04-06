"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Cloud, Zap, Brain, Database, Shield } from "lucide-react"

export function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleServicesClick = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg pt-28">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full animate-float blur-sm" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full animate-float blur-sm"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/5 rounded-full animate-float blur-sm"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-accent/15 to-primary/5 rounded-full animate-float blur-sm"
          style={{ animationDelay: "6s" }}
        />

        {/* Enhanced Circuit Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-primary to-transparent animate-circuit-flow" />
          <div
            className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-primary to-transparent animate-circuit-flow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-3/4 right-1/4 w-px h-24 bg-gradient-to-b from-accent to-transparent animate-circuit-flow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-3/4 right-1/4 w-24 h-px bg-gradient-to-r from-accent to-transparent animate-circuit-flow"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-px h-40 bg-gradient-to-b from-primary/50 to-transparent animate-circuit-flow"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-accent/50 to-transparent animate-circuit-flow"
            style={{ animationDelay: "5s" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-balance leading-tight">
            <span className="text-foreground drop-shadow-lg">NERD</span>
            <span className="text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text animate-shimmer">
              HUB
            </span>
          </h1>

          <div className="flex items-center justify-center space-x-3 mb-10">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
            <p className="text-2xl md:text-3xl text-muted-foreground font-bold tracking-wide">
              Innovation. Agility. Trust.
            </p>
            <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse" />
          </div>

          <p className="text-xl md:text-2xl text-foreground/80 mb-16 max-w-4xl mx-auto text-pretty leading-relaxed font-medium">
            Transform your digital landscape with cutting-edge solutions in DevOps, Cloud Architecture, API Management,
            and Artificial Intelligence. We deliver innovation that drives results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Button
              size="lg"
              onClick={handleServicesClick}
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-glow group text-lg"
            >
              Discover Our Solutions
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent/50 backdrop-blur-sm font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300">
                <Cpu className="h-8 w-8 text-primary animate-pulse" />
              </div>
              <span className="text-sm font-semibold text-foreground/70">DevOps</span>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 group-hover:from-accent/30 group-hover:to-primary/20 transition-all duration-300">
                <Cloud className="h-8 w-8 text-accent animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              <span className="text-sm font-semibold text-foreground/70">Cloud</span>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300">
                <Brain className="h-8 w-8 text-primary animate-pulse" style={{ animationDelay: "2s" }} />
              </div>
              <span className="text-sm font-semibold text-foreground/70">AI</span>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 group-hover:from-accent/30 group-hover:to-primary/20 transition-all duration-300">
                <Database className="h-8 w-8 text-accent animate-pulse" style={{ animationDelay: "3s" }} />
              </div>
              <span className="text-sm font-semibold text-foreground/70">Data</span>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300">
                <Shield className="h-8 w-8 text-primary animate-pulse" style={{ animationDelay: "4s" }} />
              </div>
              <span className="text-sm font-semibold text-foreground/70">Security</span>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 group-hover:from-accent/30 group-hover:to-primary/20 transition-all duration-300">
                <Zap className="h-8 w-8 text-accent animate-pulse" style={{ animationDelay: "5s" }} />
              </div>
              <span className="text-sm font-semibold text-foreground/70">Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
