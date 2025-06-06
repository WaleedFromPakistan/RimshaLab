"use client"

import { useState, useEffect } from "react"
import Hero from "@/app/Components/Hero"
import Services from "@/app/Components/Services"
import Progress_bar from "@/app/Components/Progress_bar"
import TestimonialSlider from "@/app/Components/TestimonialSlider"
import AppointmentForm from "@/app/Components/AppointmentForm"
import Modal from "@/app/Components/Modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Open modal when component mounts (page first renders)
    setIsModalOpen(true)
  }, [])

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="h-full w-full">
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Hero />
      <Services />
      <Progress_bar />
      <TestimonialSlider />
      <AppointmentForm />
    </div>
  )
}
