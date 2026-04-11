export type Language = "fr" | "en"

export const translations = {
  fr: {
    // Header
    nav: {
      about: "À propos",
      solutions: "Solutions",
      services: "Services",
      contact: "Contact",
    },

    // Hero
    hero: {
      tagline: "Innovation. Agility. Trust.",
      description:
        "Transformez votre paysage numérique avec des solutions de pointe en DevOps, Architecture Cloud, API Management et Intelligence Artificielle. Nous livrons l'innovation qui génère des résultats.",
      ctaSolutions: "Découvrir nos solutions",
      ctaContact: "Nous contacter",
      pillars: {
        devops: "DevOps",
        cloud: "Cloud",
        ai: "IA",
        data: "Data",
        security: "Sécurité",
        innovation: "Innovation",
      },
    },

    // About
    about: {
      title: "À propos de",
      brand: "NerdHub",
      description:
        "Créée en 2024, NerdHub est une entreprise innovante spécialisée dans le conseil technologique, le développement logiciel et la commercialisation de solutions SaaS.",
      values: {
        innovation: {
          title: "Innovation",
          description: "Nous intégrons les dernières avancées technologiques pour créer des solutions d'avant-garde.",
        },
        agility: {
          title: "Agilité",
          description: "Notre approche agile nous permet de nous adapter rapidement aux besoins changeants de nos clients.",
        },
        trust: {
          title: "Confiance",
          description: "Nous construisons des relations durables basées sur la transparence et la fiabilité.",
        },
      },
      mission: {
        title: "Notre Mission",
        description:
          "Accompagner les entreprises dans leur transformation digitale grâce à des solutions modernes, fiables et évolutives, en intégrant les dernières avancées en DevOps, Cloud, API Management et Intelligence Artificielle.",
        point1: "Conseil et accompagnement technologique",
        point2: "Développement d'applications sur mesure",
        point3: "Solutions SaaS innovantes",
        year: "Année de création",
      },
    },

    // Solutions
    solutions: {
      title: "Nos",
      titleHighlight: "Solutions SaaS",
      description:
        "Découvrez nos produits SaaS innovants conçus pour optimiser vos processus métiers et accélérer votre transformation digitale.",
      learnMore: "En savoir plus",
      keyBenefits: "Bénéfices Clés",
      useCases: "Cas d'Usage",
      technologies: "Technologies",
      requestDemo: "Demander une démonstration",
      items: {
        apiManagement: {
          title: "API Management",
          description:
            "Solution complète de gestion des API permettant de sécuriser, surveiller et optimiser leur utilisation.",
          features: [
            "Portail développeurs",
            "Politiques de gouvernance",
            "Monitoring en temps réel",
            "Outils d'analyse avancés",
          ],
          overview:
            "Notre plateforme API Management offre une gouvernance complète de votre écosystème d'API avec des outils avancés de sécurité, monitoring et analytics pour maximiser la valeur de vos services numériques.",
          benefits: [
            "Sécurisation avancée avec OAuth 2.0 et JWT",
            "Monitoring en temps réel avec alertes intelligentes",
            "Portail développeur self-service",
            "Analytics détaillés et reporting automatisé",
          ],
          useCases: [
            "Exposition sécurisée des services internes",
            "Monétisation des API externes",
            "Intégration avec partenaires tiers",
            "Gouvernance des microservices",
          ],
        },
        ai: {
          title: "IA et Data Analytics",
          description:
            "Solutions basées sur l'intelligence artificielle pour exploiter vos données et automatiser des tâches complexes.",
          features: [
            "Machine Learning",
            "Traitement du langage naturel",
            "Analyse prédictive",
            "Automatisation intelligente",
          ],
          overview:
            "Nos solutions IA et Data transforment vos données en insights actionnables grâce à des algorithmes de machine learning avancés et des modèles prédictifs personnalisés pour votre secteur d'activité.",
          benefits: [
            "Prédictions avec 95% de précision",
            "Automatisation de 70% des tâches répétitives",
            "Insights en temps réel sur vos données",
            "Personnalisation avancée des expériences client",
          ],
          useCases: [
            "Analyse prédictive des ventes",
            "Chatbots intelligents et assistants virtuels",
            "Détection d'anomalies et fraudes",
            "Recommandations personnalisées",
          ],
        },
        bpm: {
          title: "BPM Orchestrateur",
          description:
            "Plateforme de gestion et d'orchestration des processus métiers permettant de modéliser, automatiser et superviser les workflows internes.",
          features: [
            "Modélisation des processus",
            "Automatisation des workflows",
            "Tableaux de bord dynamiques",
            "Intégration avec systèmes tiers",
          ],
          overview:
            "Notre solution BPM Orchestrateur révolutionne la gestion de vos processus métiers en offrant une plateforme unifiée pour modéliser, automatiser et optimiser tous vos workflows organisationnels.",
          benefits: [
            "Réduction de 60% du temps de traitement des processus",
            "Amélioration de la traçabilité et conformité",
            "Diminution des erreurs humaines de 80%",
            "ROI moyen de 300% en 12 mois",
          ],
          useCases: [
            "Gestion des demandes RH et onboarding",
            "Processus d'approbation financière",
            "Workflows de validation documentaire",
            "Automatisation des processus de vente",
          ],
        },
      },
    },

    // Services
    services: {
      title: "Nos",
      titleHighlight: "Services",
      description:
        "Bénéficiez de notre expertise en conseil stratégique et développement sur mesure pour accompagner votre transformation digitale.",
      learnMore: "En savoir plus",
      keyBenefits: "Bénéfices Clés",
      useCases: "Cas d'Usage",
      technologies: "Technologies",
      requestQuote: "Demander un devis",
      customProject: "Un projet sur mesure ?",
      customProjectDescription:
        "Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous accompagner dans votre transformation digitale.",
      discussProject: "Discutons de votre projet",
      items: {
        consulting: {
          title: "Conseil Stratégique",
          description:
            "Accompagnement expert pour définir votre stratégie de transformation digitale et optimiser vos processus métiers.",
          features: [
            "Audit et diagnostic",
            "Stratégie de transformation",
            "Architecture technique",
            "Accompagnement au changement",
          ],
          overview:
            "Notre équipe d'experts vous accompagne dans la définition et la mise en œuvre de votre stratégie de transformation digitale, en analysant vos besoins spécifiques et en proposant des solutions sur mesure.",
          benefits: [
            "Réduction des risques de 70% dans vos projets",
            "Accélération du time-to-market de 50%",
            "Optimisation des coûts IT jusqu'à 40%",
            "Amélioration de l'efficacité opérationnelle",
          ],
          useCases: [
            "Audit de l'existant et recommandations",
            "Définition d'architecture cloud-native",
            "Stratégie de migration vers le cloud",
            "Optimisation des processus métiers",
          ],
        },
        development: {
          title: "Développement Sur Mesure",
          description:
            "Création d'applications et solutions personnalisées adaptées à vos besoins métiers spécifiques.",
          features: [
            "Applications web et mobile",
            "Intégrations système",
            "APIs et microservices",
            "Solutions cloud-native",
          ],
          overview:
            "Notre équipe de développement crée des solutions logicielles sur mesure, en utilisant les technologies les plus avancées pour répondre précisément à vos besoins métiers et contraintes techniques.",
          benefits: [
            "Solutions 100% adaptées à vos besoins",
            "Scalabilité et performance optimisées",
            "Maintenance et support continus",
            "Intégration parfaite avec votre SI existant",
          ],
          useCases: [
            "Applications métiers spécialisées",
            "Portails clients et partenaires",
            "Systèmes de gestion intégrés",
            "Solutions IoT et temps réel",
          ],
        },
      },
    },

    // Contact
    contact: {
      title: "Contactez",
      brand: "NerdHub",
      description:
        "Prêt à démarrer votre projet ? Notre équipe d'experts est là pour vous accompagner dans votre transformation digitale.",
      formTitle: "Envoyez-nous un message",
      form: {
        name: "Nom complet",
        email: "Email",
        company: "Entreprise",
        message: "Message",
        submit: "Envoyer le message",
        submitting: "Envoi en cours...",
        success: "Message envoyé avec succès !",
        error: "Erreur lors de l'envoi. Veuillez réessayer.",
      },
      info: {
        title: "Informations de contact",
        email: "Email",
        phone: "Téléphone",
        address: "Adresse",
        addressValue: "Casablanca, Maroc",
      },
      why: {
        title: "Pourquoi choisir NerdHub ?",
        point1: "Expertise technique reconnue",
        point2: "Accompagnement personnalisé",
        point3: "Solutions évolutives et durables",
        point4: "Support technique réactif",
      },
    },

    // Footer
    footer: {
      description:
        "Accompagnons votre transformation digitale avec des solutions innovantes en DevOps, Cloud, API Management et Intelligence Artificielle.",
      tagline: "Innovation. Agility. Trust.",
      rights: "Tous droits réservés.",
      categories: {
        Services: ["BPM Orchestrateur", "API Management", "IA et Data", "Conseil DevOps"],
        Entreprise: ["À propos", "Notre équipe", "Carrières", "Blog"],
        Support: ["Documentation", "Centre d'aide", "Contact", "Statut"],
      },
    },
  },

  en: {
    // Header
    nav: {
      about: "About",
      solutions: "Solutions",
      services: "Services",
      contact: "Contact",
    },

    // Hero
    hero: {
      tagline: "Innovation. Agility. Trust.",
      description:
        "Transform your digital landscape with cutting-edge solutions in DevOps, Cloud Architecture, API Management, and Artificial Intelligence. We deliver innovation that drives results.",
      ctaSolutions: "Discover Our Solutions",
      ctaContact: "Contact Us",
      pillars: {
        devops: "DevOps",
        cloud: "Cloud",
        ai: "AI",
        data: "Data",
        security: "Security",
        innovation: "Innovation",
      },
    },

    // About
    about: {
      title: "About",
      brand: "NerdHub",
      description:
        "Founded in 2024, NerdHub is an innovative company specialized in technology consulting, software development, and SaaS solutions.",
      values: {
        innovation: {
          title: "Innovation",
          description: "We integrate the latest technological advances to create cutting-edge solutions.",
        },
        agility: {
          title: "Agility",
          description: "Our agile approach allows us to quickly adapt to our clients' changing needs.",
        },
        trust: {
          title: "Trust",
          description: "We build lasting relationships based on transparency and reliability.",
        },
      },
      mission: {
        title: "Our Mission",
        description:
          "Supporting companies in their digital transformation through modern, reliable, and scalable solutions, integrating the latest advances in DevOps, Cloud, API Management, and Artificial Intelligence.",
        point1: "Technology consulting and guidance",
        point2: "Custom application development",
        point3: "Innovative SaaS solutions",
        year: "Year founded",
      },
    },

    // Solutions
    solutions: {
      title: "Our",
      titleHighlight: "SaaS Solutions",
      description:
        "Discover our innovative SaaS products designed to optimize your business processes and accelerate your digital transformation.",
      learnMore: "Learn more",
      keyBenefits: "Key Benefits",
      useCases: "Use Cases",
      technologies: "Technologies",
      requestDemo: "Request a Demo",
      items: {
        apiManagement: {
          title: "API Management",
          description:
            "Complete API management solution to secure, monitor, and optimize their usage.",
          features: [
            "Developer portal",
            "Governance policies",
            "Real-time monitoring",
            "Advanced analytics tools",
          ],
          overview:
            "Our API Management platform offers complete governance of your API ecosystem with advanced security, monitoring, and analytics tools to maximize the value of your digital services.",
          benefits: [
            "Advanced security with OAuth 2.0 and JWT",
            "Real-time monitoring with smart alerts",
            "Self-service developer portal",
            "Detailed analytics and automated reporting",
          ],
          useCases: [
            "Secure exposure of internal services",
            "External API monetization",
            "Third-party partner integration",
            "Microservices governance",
          ],
        },
        ai: {
          title: "AI and Data Analytics",
          description:
            "AI-powered solutions to leverage your data and automate complex tasks.",
          features: [
            "Machine Learning",
            "Natural Language Processing",
            "Predictive analytics",
            "Smart automation",
          ],
          overview:
            "Our AI and Data solutions transform your data into actionable insights through advanced machine learning algorithms and predictive models tailored to your industry.",
          benefits: [
            "Predictions with 95% accuracy",
            "70% automation of repetitive tasks",
            "Real-time insights on your data",
            "Advanced customer experience personalization",
          ],
          useCases: [
            "Predictive sales analysis",
            "Smart chatbots and virtual assistants",
            "Anomaly and fraud detection",
            "Personalized recommendations",
          ],
        },
        bpm: {
          title: "BPM Orchestrator",
          description:
            "Business process management and orchestration platform to model, automate, and supervise internal workflows.",
          features: [
            "Process modeling",
            "Workflow automation",
            "Dynamic dashboards",
            "Third-party system integration",
          ],
          overview:
            "Our BPM Orchestrator solution revolutionizes business process management by offering a unified platform to model, automate, and optimize all your organizational workflows.",
          benefits: [
            "60% reduction in process handling time",
            "Improved traceability and compliance",
            "80% reduction in human errors",
            "Average 300% ROI within 12 months",
          ],
          useCases: [
            "HR requests and onboarding management",
            "Financial approval processes",
            "Document validation workflows",
            "Sales process automation",
          ],
        },
      },
    },

    // Services
    services: {
      title: "Our",
      titleHighlight: "Services",
      description:
        "Benefit from our expertise in strategic consulting and custom development to support your digital transformation.",
      learnMore: "Learn more",
      keyBenefits: "Key Benefits",
      useCases: "Use Cases",
      technologies: "Technologies",
      requestQuote: "Request a Quote",
      customProject: "A custom project?",
      customProjectDescription:
        "Contact us to discuss your specific needs and discover how we can support your digital transformation.",
      discussProject: "Let's discuss your project",
      items: {
        consulting: {
          title: "Strategic Consulting",
          description:
            "Expert guidance to define your digital transformation strategy and optimize your business processes.",
          features: [
            "Audit and diagnosis",
            "Transformation strategy",
            "Technical architecture",
            "Change management",
          ],
          overview:
            "Our team of experts supports you in defining and implementing your digital transformation strategy, analyzing your specific needs and proposing tailored solutions.",
          benefits: [
            "70% risk reduction in your projects",
            "50% faster time-to-market",
            "IT cost optimization up to 40%",
            "Improved operational efficiency",
          ],
          useCases: [
            "Audit of existing systems and recommendations",
            "Cloud-native architecture definition",
            "Cloud migration strategy",
            "Business process optimization",
          ],
        },
        development: {
          title: "Custom Development",
          description:
            "Creation of custom applications and solutions tailored to your specific business needs.",
          features: [
            "Web and mobile applications",
            "System integrations",
            "APIs and microservices",
            "Cloud-native solutions",
          ],
          overview:
            "Our development team creates custom software solutions using the most advanced technologies to precisely meet your business needs and technical constraints.",
          benefits: [
            "100% tailored to your needs",
            "Optimized scalability and performance",
            "Continuous maintenance and support",
            "Seamless integration with your existing IS",
          ],
          useCases: [
            "Specialized business applications",
            "Customer and partner portals",
            "Integrated management systems",
            "IoT and real-time solutions",
          ],
        },
      },
    },

    // Contact
    contact: {
      title: "Contact",
      brand: "NerdHub",
      description:
        "Ready to start your project? Our team of experts is here to support you in your digital transformation.",
      formTitle: "Send us a message",
      form: {
        name: "Full name",
        email: "Email",
        company: "Company",
        message: "Message",
        submit: "Send message",
        submitting: "Sending...",
        success: "Message sent successfully!",
        error: "Error while sending. Please try again.",
      },
      info: {
        title: "Contact information",
        email: "Email",
        phone: "Phone",
        address: "Address",
        addressValue: "Casablanca, Morocco",
      },
      why: {
        title: "Why choose NerdHub?",
        point1: "Recognized technical expertise",
        point2: "Personalized support",
        point3: "Scalable and sustainable solutions",
        point4: "Responsive technical support",
      },
    },

    // Footer
    footer: {
      description:
        "Supporting your digital transformation with innovative solutions in DevOps, Cloud, API Management, and Artificial Intelligence.",
      tagline: "Innovation. Agility. Trust.",
      rights: "All rights reserved.",
      categories: {
        Services: ["BPM Orchestrator", "API Management", "AI and Data", "DevOps Consulting"],
        Company: ["About", "Our Team", "Careers", "Blog"],
        Support: ["Documentation", "Help Center", "Contact", "Status"],
      },
    },
  },
} as const

export type TranslationKey = typeof translations.fr
