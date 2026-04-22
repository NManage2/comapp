"use client"
import Image from "next/image"
import { useState, useRef } from "react"

export const ImageHover = ({
  src,
  hoverSrc,
  alt,
}: {
  src: string
  hoverSrc: string
  alt: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // 1. Use useRef to persist the timeout ID across renders
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    // 2. Store the timeout in the .current property
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true)
    }, 1000)
    console.log(hoverTimeoutRef)
  }

  const handleMouseLeave = () => {
    // 3. Clear the timeout using the persisted ref
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsHovered(false)
  }

  return (
    <div
      className="relative h-52"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="80vw"
        className={`object-contain transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={hoverSrc}
        alt={alt}
        fill
        sizes="80vw"
        className={`absolute inset-0 object-contain transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}
