"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
// import { Button } from "@/components/ui/button" // Removed


export default function Modal({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl md:w-fit mx-4 md:mx-8">
        {/* Close Button */}
        {/* <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close modal</span>
        </Button> */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm p-2 transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close modal</span>
        </button>

        {/* Image Container */}
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="relative w-full">
            <Image
              src="/eidulfitr.jpg"
              alt="Eid ul-Fitr Celebration"
              width={1200}
              height={800}
              className="w-full h-auto object-contain max-h-[80vh]"
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
