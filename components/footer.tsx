import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: ["BPM Orchestrateur", "API Management", "IA et Data", "Conseil DevOps"],
    Entreprise: ["À propos", "Notre équipe", "Carrières", "Blog"],
    Support: ["Documentation", "Centre d'aide", "Contact", "Status"],
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/orgs/nerd-hub-io", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/nerdhub", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/images/nerdhub-logo.png"
                alt="NerdHub Logo"
                width={120}
                height={60}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 text-pretty">
              Accompagnons votre transformation digitale avec des solutions innovantes en DevOps, Cloud, API Management
              et Intelligence Artificielle.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-muted-foreground">Innovation. Agility. Trust.</span>
              <div className="w-2 h-2 bg-primary rounded-full" />
            </div>
            <p className="text-muted-foreground text-sm">© {currentYear} NerdHub. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
