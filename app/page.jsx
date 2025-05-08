import Image from "next/image";
import Header from '@/app/Components/Header'
import Hero from "@/app/Components/Hero";
import Services from "@/app/Components/Services"
import Progress_bar from "@/app/Components/Progress_bar"
export default function Home() {
  return (
    <div className="h-full w-full">
      <Hero/>
      <Services/>
      <Progress_bar/>
    </div>
  );
}
