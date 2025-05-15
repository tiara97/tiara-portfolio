"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GifPlayerProps {
  gifSrc: string
  staticSrc: string
  alt: string
  className?: string
}

export default function GifPlayer({ gifSrc, staticSrc, alt, className = "" }: GifPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isGifLoaded, setIsGifLoaded] = useState(false)
  const gifRef = useRef<HTMLImageElement>(null)

  // Preload the GIF
  useEffect(() => {
    const preloadGif = new Image()
    preloadGif.src = gifSrc
    preloadGif.onload = () => {
      setIsGifLoaded(true)
    }
  }, [gifSrc])

  const handlePlayToggle = () => {
    if (!isGifLoaded) return

    if (!isPlaying) {
      setIsLoading(true)
    }
    setIsPlaying(!isPlaying)
  }

  const handleGifLoaded = () => {
    setIsLoading(false)
  }

  return (
    <div className={`relative overflow-hidden rounded-xl border-2 border-muted ${className}`}>
      {/* Static Image (shown when GIF is not playing) */}
      {!isPlaying && <img src={staticSrc || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />}

      {/* GIF (shown when playing) */}
      {isPlaying && (
        <img
          ref={gifRef}
          src={gifSrc || "/placeholder.svg"}
          alt={alt}
          className={`w-full h-full object-cover ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={handleGifLoaded}
        />
      )}

      {/* Play/Pause Button */}
      <div className="absolute bottom-4 right-4">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={handlePlayToggle}
          disabled={!isGifLoaded}
        >
          {isLoading && isPlaying ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Loading Overlay */}
      {isPlaying && isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      {/* Play Indicator Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full">
            <Play className="h-8 w-8 text-primary" />
          </div>
          <span className="sr-only">Play GIF</span>
        </div>
      )}
    </div>
  )
}
