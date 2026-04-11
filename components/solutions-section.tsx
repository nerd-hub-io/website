"use client"

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Workflow, Settings, Brain, ArrowRight, CheckCircle, Users, Zap, Shield, X } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/lib/i18n/context"

export function SolutionsSection() {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null)
  const { t } = useTranslation()

  const solutions = [
    {
      icon: Settings,
      ...t.solutions.items.apiManagement,
      technologies: ["OpenAPI 3.0", "GraphQL", "gRPC", "Kong", "Istio"],
    },
    {
      icon: Brain,
      ...t.solutions.items.ai,
      technologies: ["TensorFlow", "PyTorch", "Apache Spark", "MLflow", "Kubernetes"],
    },
    {
      icon: Workflow,
      ...t.solutions.items.bpm,
      technologies: ["BPMN 2.0", "REST API", "Microservices", "Docker", "Kubernetes"],
    },
  ]

  const openModal = (index: number) => {
    setSelectedSolution(index)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedSolution(null)
    document.body.style.overflow = "unset"
  }

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.solutions.title} <span className="text-primary">{t.solutions.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">{t.solutions.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-xl"
            >
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-pretty">{solution.description}</p>

                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
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
                  {t.solutions.learnMore}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedSolution !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    {React.createElement(solutions[selectedSolution].icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">{solutions[selectedSolution].title}</h3>
                </div>
                <Button onClick={closeModal} variant="ghost" size="sm" className="hover:bg-muted">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-6 space-y-8">
                <div className="bg-muted/50 rounded-lg p-6">
                  <p className="text-muted-foreground text-pretty leading-relaxed text-lg">
                    {solutions[selectedSolution].overview}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-card-foreground flex items-center">
                      <Zap className="h-5 w-5 text-primary mr-2" />
                      {t.solutions.keyBenefits}
                    </h4>
                    <ul className="space-y-3">
                      {solutions[selectedSolution].benefits.map((benefit, idx) => (
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
                      {t.solutions.useCases}
                    </h4>
                    <ul className="space-y-3">
                      {solutions[selectedSolution].useCases.map((useCase, idx) => (
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
                      {t.solutions.technologies}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {solutions[selectedSolution].technologies.map((tech, idx) => (
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
                    {t.solutions.requestDemo}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
