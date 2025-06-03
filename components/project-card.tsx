"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { basePath } from "@/lib/config";

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/projects/${link.toLowerCase().replace(/\s+/g, "-")}`}>
      <Card
        className="overflow-hidden border-primary/10 h-full transition-all duration-300 group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${basePath}${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
        </div>

        <CardContent className="p-6 relative z-10">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>

          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="flex items-center text-sm text-primary font-medium">
            <span>View Project</span>
            <ArrowUpRight
              className={`ml-1 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1 -translate-y-1" : ""}`}
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
