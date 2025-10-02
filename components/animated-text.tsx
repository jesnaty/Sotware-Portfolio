"use client"

import { useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const timer = setTimeout(
      () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }
      },
      delay * 1000 + currentIndex * 50,
    )

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, isMounted])

  // Prevent hydration mismatch by showing full text initially
  if (!isMounted) {
    return (
      <h1 className={`${className} relative`}>
        {text}
      </h1>
    )
  }

  return (
    <h1 className={`${className} relative`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </h1>
  )
}
