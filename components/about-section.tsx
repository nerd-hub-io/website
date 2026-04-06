import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous intégrons les dernières avancées technologiques pour créer des solutions d'avant-garde.",
    },
    {
      icon: Target,
      title: "Agilité",
      description: "Notre approche agile nous permet de nous adapter rapidement aux besoins changeants de nos clients.",
    },
    {
      icon: Users,
      title: "Confiance",
      description: "Nous construisons des relations durables basées sur la transparence et la fiabilité.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-card-foreground">
            À propos de <span className="text-primary">NerdHub</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Créée en 2024, NerdHub est une entreprise innovante spécialisée dans le conseil technologique, le
            développement logiciel et la commercialisation de solutions SaaS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-primary transition-colors duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">Notre Mission</h3>
              <p className="text-muted-foreground text-lg mb-6 text-pretty">
                Accompagner les entreprises dans leur transformation digitale grâce à des solutions modernes, fiables et
                évolutives, en intégrant les dernières avancées en DevOps, Cloud, API Management et Intelligence
                Artificielle.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Conseil et accompagnement technologique</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground">Développement d'applications sur mesure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">Solutions SaaS innovantes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">2024</div>
                  <div className="text-muted-foreground">Année de création</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
