import React from "react";
import { Button } from "./components/ui/button";
import Hero from "./sections/hero"; // Capitalized & correct import
import TrainingIssues from "./sections/TrainingIssues";
import CourseBenefits from "./sections/CourseBenefits";
import TestimonialSection from "./sections/TestimonialSection";
import RightForYou from "./sections/RightForYou";
import ExtraFeatures from "./sections/ExtraFeatures";
import EnrollNow from "./sections/EnrollNow";
import FAQAccordion from "./sections/FAQAccordion";
import Footer from "./sections/Footer";

function App() {
  return (
    <div>
      <Hero /> 
      <TrainingIssues />
      <CourseBenefits/>
      <TestimonialSection/>
      <RightForYou/>
      <ExtraFeatures/>
      <EnrollNow/>
      <FAQAccordion/>
      <Footer/>
      
    </div>
  );
}

export default App;
