import React from "react";
import Hero from "../../components/Home/Hero";
import WhyChooseTRT from "../../components/Home/WhyChooseTRT";
import ReplacementTherapy from "../../components/Home/ReplacementTherapy";
import AntiAgingTherapy from "../../components/Home/AntiAgingTherapy";
import Testimonials from "../../components/Global/Testimonials";
import Hero2 from "../../components/Home/Hero2";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChooseTRT />
      <ReplacementTherapy />
      <AntiAgingTherapy />
      <Testimonials />
    </div>
  );
};

export default HomePage;
