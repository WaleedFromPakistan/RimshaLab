"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "923091845657" // Your WhatsApp number
  const message = encodeURIComponent("Hello! I'm interested in your lab services.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  // Add entrance animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-white text-green-500 font-semibold rounded-full shadow-lg transition-all duration-500 ease-in-out",
        "hover:bg-green-500 hover:text-white hover:pr-[200px] group",
        "border-2 border-green-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
      )}
    >
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500 text-white">
        <WhatsAppLogo className="h-6 w-6 animate-pulse-slow" />
      </div>
      <span className="absolute left-14 hover:text-green-600 pointer-events-none opacity-0 whitespace-nowrap group-hover:opacity-100 transition-opacity duration-300">
        How can we help you?
      </span>
    </a>
  )
}

// Custom WhatsApp Logo component
const WhatsAppLogo = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className={className} fill="currentColor">
      <path d="M87.882 14.792c-40.079 0-72.725 32.645-72.725 72.724a72.574 72.574 0 0 0 11.293 38.761L14.8 160.902l35.881-11.31a72.37 72.37 0 0 0 37.201 10.199h.032c40.079 0 72.725-32.645 72.725-72.724 0-19.431-7.569-37.702-21.306-51.442-13.737-13.739-32.008-21.308-51.451-21.308zm.033 133.073h-.026a60.186 60.186 0 0 1-30.771-8.457l-2.213-1.312-22.893 7.201 7.267-22.574-1.437-2.286a60.343 60.343 0 0 1-9.243-32.201c0-33.33 27.148-60.456 60.504-60.456 16.173 0 31.361 6.3 42.775 17.718 11.412 11.417 17.695 26.606 17.692 42.779-.003 33.33-27.151 60.456-60.479 60.456zm33.218-45.296c-1.821-.914-10.78-5.369-12.451-5.997-1.672-.622-2.888-.914-4.103.915-1.216 1.829-4.714 5.997-5.775 7.213-.915 1.216-1.829 1.364-3.65.457-9.106-4.526-15.24-8.128-21.278-18.432-1.596-2.748 1.596-2.551 4.569-8.493.508-1.216.254-2.28-.127-3.194-.38-.915-4.103-10.006-5.624-13.698-1.486-3.599-2.972-3.105-4.103-3.155-1.063-.05-2.28-.061-3.498-.061-1.216 0-3.193.457-4.865 2.286-1.672 1.829-6.387 6.387-6.387 15.478s6.54 17.964 7.451 19.18c.915 1.216 12.848 20.381 31.566 27.75 11.728 5.089 16.373 5.53 22.266 4.658 3.574-.539 10.78-4.407 12.3-8.672 1.521-4.265 1.521-7.909 1.063-8.672-.457-.763-1.672-1.216-3.498-2.127z" />
    </svg>
  )
}

export default WhatsAppButton
