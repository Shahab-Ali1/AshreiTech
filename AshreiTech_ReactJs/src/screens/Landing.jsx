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


export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Hero/>
      {/* <Services /> */}
      {/* <Projects /> */}
      <Blog />
      <Pricing />
      {/* <Contact /> */}
      <Faq/>
      <Footer/>
    </>
  );
}


