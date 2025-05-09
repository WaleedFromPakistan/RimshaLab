// styles/globals.css or in _app.js
import Hero from "@/app/Components/Hero";
import Services from "@/app/Components/Services"
import Progress_bar from "@/app/Components/Progress_bar"
import TestimonialSlider from "@/app/Components/TestimonialSlider"
import AppointmentForm from "@/app/Components/AppointmentForm"
export default function Home() {
  return (
    <div className="h-full w-full">
      <Hero/>
      <Services/>
      <Progress_bar/>
      <TestimonialSlider/>
      <AppointmentForm/>
    </div>
  );
}
