"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState("mission")
  const [prevTab, setPrevTab] = useState("mission")
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState("right")

  const handleTabChange = (tab) => {
    if (tab === activeTab || isAnimating) return

    setDirection(tab === "mission" ? "left" : "right")
    setPrevTab(activeTab)
    setIsAnimating(true)

    setTimeout(() => {
      setActiveTab(tab)
      setIsAnimating(false)
    }, 500)
  }

  const content = {
    mission: {
      title: "Our Mission",
      description:
        "At Rimsha Lab, our mission is to deliver accurate, timely, and affordable medical diagnostic services that empower doctors and patients to make informed healthcare decisions. We are committed to maintaining the highest standards of quality, confidentiality, and innovation in laboratory testing to support the well-being of communities across Pakistan. By combining advanced technology with compassionate care, we strive to be a trusted partner in every step of the healthcare journey.  ",
    },
    vision: {
      title: "Our Vision",
      description:
        "Our vision is to become Pakistan’s most trusted and technologically advanced medical diagnostic laboratory, recognized for excellence in accuracy, service, and innovation. We aim to expand access to high-quality lab testing through digital transformation, ensuring every individual—regardless of location—has access to reliable and affordable diagnostic care.",
    },
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {["mission", "vision"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => handleTabChange(tab)}
              className={cn(
                "px-6 py-3 font-bold text-l cursor-pointer focus:z-10 focus:outline-none transition-all duration-200",
                tab === "mission" ? "rounded-l-lg" : "rounded-r-lg",
                activeTab === tab ? "bg-[#3E4095] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative h-[350px] md:h-[250px] overflow-hidden">
        <div
          key={activeTab}
          className={cn(
            "absolute w-full h-full transition-all duration-500 ease-in-out bg-white rounded-xl shadow-lg p-8",
            direction === "right" ? "translate-x-full" : "-translate-x-full",
            isAnimating ? "opacity-0" : "opacity-100 translate-x-0",
          )}
        >
          <h2 className="text-3xl font-bold text-center text-[#3E4095] mt-[-36px] mb-4">{content[activeTab].title}</h2>
          <p className="text-gray-700 text-center text-xl italic leading-relaxed">{content[activeTab].description}</p>
        </div>
      </div>
    </div>
  )
}

export default MissionVision
