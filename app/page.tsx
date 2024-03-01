'use client'
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import HomeGallery from "@/components/HomeGallery";
import Partners from "@/components/Partners";
import Reasons from "@/components/Reasons";
import { useEffect, useState } from "react";
import AOS from "aos";

export default function Home() {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, [])

  return (
    <>
      <Hero />
      <Guide />
      <Features handleOrderPopup={handleOrderPopup}/>
      <Partners />
      <HomeGallery />
      <Reasons />
    </>
  )
}
