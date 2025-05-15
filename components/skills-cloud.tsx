"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  x: number
  y: number
  size: number
  speed: number
  direction: number
}

export default function SkillsCloud() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [skills, setSkills] = useState<Skill[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const skillsList = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST API",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "Firebase",
    "Redux",
    "Jest",
    "Cypress",
    "Figma",
    "UI/UX",
  ]

  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const initialSkills = skillsList.map((name) => ({
      name,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: 0.8 + Math.random() * 0.6,
      speed: 0.5 + Math.random() * 1,
      direction: Math.random() > 0.5 ? 1 : -1,
    }))

    setSkills(initialSkills)

    const interval = setInterval(() => {
      setSkills((prevSkills) =>
        prevSkills.map((skill) => {
          const newX = skill.x + skill.speed * skill.direction

          // Bounce off walls
          if (newX > dimensions.width || newX < 0) {
            return {
              ...skill,
              x: newX > dimensions.width ? dimensions.width : 0,
              direction: -skill.direction,
            }
          }

          return {
            ...skill,
            x: newX,
          }
        }),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [dimensions])

  if (skills.length === 0) return null

  return (
    <div
      ref={containerRef}
      className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm"
    >
      {skills.map((skill, index) => (
        <Badge
          key={index}
          variant="outline"
          className="absolute px-3 py-1 transition-all duration-300 border-primary/20 bg-primary/5 hover:bg-primary/20"
          style={{
            left: `${skill.x}px`,
            top: `${skill.y}px`,
            transform: `scale(${skill.size})`,
            opacity: 0.7 + ((skill.size - 0.8) / 0.6) * 0.3,
          }}
        >
          {skill.name}
        </Badge>
      ))}
    </div>
  )
}
