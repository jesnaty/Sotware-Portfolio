"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Zentry - AI Queue Management",
    description:
      "Enterprise-grade AI-powered queue management SaaS platform that reduces wait times by 85% and transforms customer experience across multiple industries.",
    image: "/projects/zentry-queue-management.jpg",
    technologies: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "AI/ML", "AWS"],
    features: ["AI-powered optimization", "Real-time analytics", "Multi-channel access", "Predictive analytics", "White-label solution"],
    githubUrl: "https://github.com/jesnaty/zentry-queue-management",
    liveUrl: "https://zentry-queue-management.vercel.app/",
    featured: true,
  },
  {
    title: "HTML Email Template",
    description:
      "Professional HTML email template system with responsive design, wine industry branding, and cross-client compatibility for effective email marketing campaigns.",
    image: "/projects/html-email-template.jpg",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Email Marketing", "Cross-Client Testing"],
    features: ["Responsive design", "Cross-client compatibility", "Professional branding", "Email marketing optimization"],
    githubUrl: "https://github.com/jesnaty/html-email-template",
    liveUrl: "https://html-email-template-wine.vercel.app/",
    featured: true,
  },
  {
    title: "FreshFlow - AI Nutrition Platform",
    description:
      "Complete AI-powered nutrition platform that revolutionizes meal planning with personalized recommendations, 15-minute prep times, and team collaboration features.",
    image: "/projects/freshflow-nutrition.jpg",
    technologies: ["React", "Node.js", "AI/ML", "PostgreSQL", "Chart.js", "Tailwind CSS"],
    features: ["AI-powered meal planning", "15-minute prep time", "Team collaboration", "Nutritional tracking", "Smart grocery lists"],
    githubUrl: "https://github.com/jesnaty/freshflow-nutrition",
    liveUrl: "https://freshflow-zeta.vercel.app/",
    featured: true,
  },
  {
    title: "HR Management System",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/projects/hr-management.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    features: ["Real-time inventory", "Payment processing", "Admin dashboard", "Mobile responsive"],
    githubUrl: "https://github.com/jesnaty/Human-Resource-Management-System-HRMS-",
    featured: true,
  },
  {
    title: "DevOps Testing Project",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and project tracking.",
    image: "/projects/devops.jpeg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    features: ["Real-time collaboration", "Project tracking", "Team management", "File sharing"],
    githubUrl: "https://github.com/jesnaty/CI-CD_test",
    featured: true,
  },
  {
    title: "Social Media Management Tool",
    description:
      "A comprehensive weather analytics platform with data visualization, forecasting, and historical analysis.",
    image: "/projects/social-media-management-tool.jpg",
    technologies: ["Python", "Django", "Chart.js", "PostgreSQL", "Redis"],
    features: ["Data visualization", "Weather forecasting", "Historical analysis", "API integration"],
    githubUrl: "https://github.com/jesnaty/Social-Media-Managemnt-tool",
    featured: false,
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-slate-400">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
