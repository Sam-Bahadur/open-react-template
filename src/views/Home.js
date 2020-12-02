import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import Team from "./../components/sections/Team";
import Contact from "./../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      {/* <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      /> */}
      <Team />
      <Testimonial topDivider />
      {/* <Cta split /> */}
      <Contact />
    </>
  );
};

export default Home;
