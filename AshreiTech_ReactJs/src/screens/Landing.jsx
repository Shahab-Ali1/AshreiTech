import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Faq from "./Faq/Faq";
import Hero from "../components/Sections/Hero/Hero";
import Footer from "../components/Sections/Footer/Footer";
import Currentstudents from "./Currentstudents/Currentstudents";
import Sponsers from "./Sponsers/Sponsers";
import InfoCard from "./InfoCard/InfoCard";


export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <InfoCard/>
      <Hero/>
      {/* <Services /> */}
      {/* <Projects /> */}

      <Blog />
      <Currentstudents/>
      <Sponsers/>
      <Faq/>
      <Footer/>
    </>
  );
}


