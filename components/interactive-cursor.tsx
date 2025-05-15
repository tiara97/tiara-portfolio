"use client"

import { useEffect, useState } from "react"

export default function InteractiveCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverStart = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setLinkHovered(true)
      }
    }

    const handleLinkHoverEnd = () => {
      setLinkHovered(false)
    }

    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleLinkHoverStart)
    document.addEventListener("mouseout", handleLinkHoverEnd)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleLinkHoverStart)
      document.removeEventListener("mouseout", handleLinkHoverEnd)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  const cursorClasses = `
    fixed pointer-events-none z-50 transition-transform duration-150 
    flex items-center justify-center rounded-full
    mix-blend-difference
    ${hidden ? "opacity-0" : "opacity-100"}
    ${clicked ? "scale-75" : ""}
    ${linkHovered ? "scale-150" : ""}
  `

  if (typeof window === "undefined") return null

  return (
    <>
      <div
        className={`${cursorClasses} w-5 h-5 bg-white`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${clicked ? "scale(0.75)" : ""} ${linkHovered ? "scale(1.5)" : ""}`,
        }}
      />
      <div
        className={`${cursorClasses} w-24 h-24 bg-transparent border border-white opacity-20`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${clicked ? "scale(0.75)" : ""} ${linkHovered ? "scale(1.5)" : ""}`,
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-out",
        }}
      />
    </>
  )
}
