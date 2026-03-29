import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Best_Worker from "./Best_Worker/Best_Worker";
import Testimonial from "./Tesimonial/Testimonial";
import HowItWorks from "./HowItWorks/HowItWorks";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import FeaturesWrapper from "./FeaturesWrapper/FeaturesWrapper";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Best_Worker></Best_Worker>
      <Testimonial></Testimonial>
      <FeaturesWrapper></FeaturesWrapper>
    </div>
  );
}
