import React from "react";
import { 
  FaPencilRuler, FaPalette, FaTools, FaUserTie, 
  FaAward, FaClipboardList, FaBookOpen, FaChalkboardTeacher 
} from "react-icons/fa";
import GradientButton from "../components/GradientButton";

const ExtraFeatures = () => {
  const features = [
    { icon: <FaPencilRuler />, text: "Sketching Basics – Shape, form, and proportion fundamentals" },
    { icon: <FaPalette />, text: "Digital Painting – Master shading, blending & coloring techniques" },
    { icon: <FaTools />, text: "Tool Mastery – Hands-on with Procreate, Photoshop & Illustrator" },
    { icon: <FaUserTie />, text: "Character & Concept Art – Create professional-grade designs" },
    { icon: <FaClipboardList />, text: "Portfolio Building – Craft stunning pieces to showcase your skills" },
    { icon: <FaBookOpen />, text: "Bonus: Monetization Guide – How to sell your art & get freelance gigs" },
    { icon: <FaAward />, text: "Certificate of Completion – Boost your creative career" },
    { icon: <FaClipboardList />, text: "Project-Based Learning – Build a stunning portfolio" },
    { icon: <FaChalkboardTeacher />, text: "Live Mentorship – Weekly Q&A sessions with industry pros" }
  ];

  return (
    <div className="flex flex-col items-center text-center py-12 px-6">

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Not Satisfied Yet?</h2>
      <p className="text-gray-600 mt-2 text-md">We got you! Here are a few extra features</p>

      <div className="mt-6 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 p-4 border rounded-lg shadow-sm bg-white">
            <span className="text-xl text-gray-700">{feature.icon}</span>
            <p className="text-gray-800 text-sm">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <GradientButton>Book Now for ₹79</GradientButton>
      </div>
    </div>
  );
};

export default ExtraFeatures;