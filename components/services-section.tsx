"use client"

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, Zap, Shield, X, Code, Lightbulb } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/lib/i18n/context"

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const { t } = useTranslation()

  const services = [
    {
      icon: Lightbulb,
      ...t.services.items.consulting,
      technologies: ["Cloud Architecture", "DevOps", "Agile", "TOGAF", "ITIL"],
    },
    {
      icon: Code,
      ...t.services.items.development,
      technologies: ["React", "Node.js", "Python", "Java", "AWS", "Azure", "GCP"],
    },
  ]

  const openModal = (index: number) => {
    setSelectedService(index)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedService(null)
    document.body.style.overflow = "unset"
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.services.title} <span className="text-primary">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">{t.services.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-xl"
            >
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-pretty">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => openModal(index)}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group bg-transparent"
                >
                  {t.services.learnMore}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    {React.createElement(services[selectedService].icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">{services[selectedService].title}</h3>
                </div>
                <Button onClick={closeModal} variant="ghost" size="sm" className="hover:bg-muted">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-6 space-y-8">
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="text-muted-foreground text-pretty leading-relaxed text-lg">
                    {services[selectedService].overview}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground flex items-center">
                      <Zap className="h-5 w-5 text-primary mr-2" />
                      {t.services.keyBenefits}
                    </h4>
                    <ul className="space-y-3">
                      {services[selectedService].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      {t.services.useCases}
                    </h4>
                    <ul className="space-y-3">
                      {services[selectedService].useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      {t.services.technologies}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {services[selectedService].technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    onClick={() => {
                      closeModal()
                      setTimeout(() => {
                        const contactSection = document.getElementById("contact")
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                      }, 100)
                    }}
                    size="lg"
                    className="bg-primary hover:bg-accent text-primary-foreground"
                  >
                    {t.services.requestQuote}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{t.services.customProject}</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              {t.services.customProjectDescription}
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-accent text-primary-foreground animate-pulse-glow"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              {t.services.discussProject}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
