"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const hobbies = [
  {
    title: "Attending Events",
    description: "Engaging with tech communities and industry conferences.",
    image: "/hobbies/events.jpg",
  },
  {
    title: "Swimming",
    description: "Relaxing and staying active through swimming.",
    image: "/hobbies/swimming.jpg",
  },
  {
    title: "Reading Books",
    description: "Exploring new ideas and knowledge through various genres.",
    image: "/hobbies/books.jpeg", // Updated image path
  },
  {
    title: "Public Speaking",
    description: "Presenting technical projects and sharing knowledge with audiences.",
    image: "https://youtu.be/_epOZ5dnYNY",
  },
]

export function HobbiesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Personal Interests & Activities
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Exploring diverse interests and continuous learning beyond technical work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <Card
              key={hobby.title}
              className={`bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                {hobby.image && hobby.image.startsWith('https://youtu.be/') ? (
                  <div className="w-full h-48 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-red-700 hover:to-red-900 transition-all duration-300">
                    <a 
                      href={hobby.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-center"
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-sm font-medium">Watch Presentation</p>
                      <p className="text-xs opacity-80">Click to open YouTube</p>
                    </a>
                  </div>
                ) : (
                  <Image
                    src={hobby.image || "/placeholder.svg"}
                    alt={hobby.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-white">{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm leading-relaxed">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
