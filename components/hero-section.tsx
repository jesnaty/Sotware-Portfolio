"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { FloatingImage } from "@/components/floating-image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isMounted && isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <FloatingImage
            src="/natnael-ayele-profile.png"
            alt="Natnael Ayele"
            className="w-40 h-40 mx-auto mb-8 rounded-full border-3 border-blue-400 shadow-xl"
          />

          <AnimatedText
            text="Natnael Ayele"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            delay={0.2}
          />


          <div
            className={`transition-all duration-1000 delay-600 ${isMounted && isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and building scalable applications that make a difference.
              Let's turn your ideas into reality.
            </p>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isMounted && isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <ArrowDown className="h-6 w-6 text-blue-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
