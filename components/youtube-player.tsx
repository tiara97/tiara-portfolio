"use client"

import { useState } from "react"
import { Play, Loader2 } from "lucide-react"

interface YouTubePlayerProps {
  videoId: string
  title: string
  thumbnailUrl?: string
  className?: string
}

export default function YouTubePlayer({ videoId, title, thumbnailUrl, className = "" }: YouTubePlayerProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Generate YouTube thumbnail URL if not provided
  const thumbnail = thumbnailUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  // Handle play button click
  const handlePlay = () => {
    setIsLoading(true)
    setIsPlaying(true)
  }

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={`relative overflow-hidden rounded-xl border-2 border-muted ${className}`}>
      {/* Thumbnail (shown when video is not playing) */}
      {!isPlaying && (
        <div className="relative aspect-video w-full">
          <img
            src={thumbnail || "/placeholder.svg"}
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to medium quality thumbnail if high quality fails
              ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
            }}
          />

          {/* Play button overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer group"
            onClick={handlePlay}
          >
            <div className="bg-primary/90 p-4 rounded-full transform transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 text-white" fill="white" />
            </div>
            <span className="sr-only">Play video</span>
          </div>
        </div>
      )}

      {/* YouTube iframe (shown when playing) */}
      {isPlaying && (
        <div className="aspect-video w-full relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      )}
    </div>
  )
}
