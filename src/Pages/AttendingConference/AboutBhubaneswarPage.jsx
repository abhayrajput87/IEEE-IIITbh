import React from "react";
import Navbar from "../../components/shared/Navbar";
import Hero from "../../components/shared/Hero";
import Bottom from "../../components/shared/Bottom";
import AboutBhubaneswar from "../../components/aboutbhubaneswar";
function AboutBhubaneswarPage() {
  return (
    <div>
      <Navbar />
      <Hero>aboutbhubaneswar</Hero>
      <AboutBhubaneswar />
      <Bottom />
    </div>
  );
}

export default AboutBhubaneswarPage;
