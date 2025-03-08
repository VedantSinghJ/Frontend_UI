import React from "react";
import GradientButton from "../components/GradientButton"; 

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 bg-gray-100 min-h-screen w-full">

      <div className="w-full max-w-5xl space-y-8">
        <div className="w-full flex justify-between items-center">

  <div className="flex space-x-1">
    <img 
      className="w-30 h-auto max-w-[100px] sm:max-w-[80px] md:max-w-[90px] lg:max-w-[100px]" 
      src="https://aasa.tech/wp-content/uploads/2023/12/Aasa-Logo.png" 
      alt="Aasa Logo" 
    />
  </div>

  <GradientButton>Get Started</GradientButton>
</div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-700 leading-tight">
            Master the Art of Digital Illustration
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
            A 4-Week Course Designed for Beginners & Enthusiasts!
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto px-4 md:px-0">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Before and after transformation showing traditional desk vs digital workspace"
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-lg mx-auto text-gray-700 text-m font-bold">
          <p>
            Learn to create stunning digital artwork with step-by-step guidance from industry experts.
            No prior experience required.Just your creativity!  
          </p>
          <p className="font-bold text-lg mt-4">Enroll now for ₹7,999</p>
        </div>

  <div >
    <GradientButton>Secure Your Spot for Just ₹79</GradientButton>
        <p className="text-sm text-gray-600 font-bold mt-1.5">
          Use a coupon code within 15 minutes to unlock a special bonus pack!
        </p>
    </div>
        
      </div>
    </div>
  );
};

export default Hero;
