import { FaGlobe, FaClock, FaPaintBrush, FaCalendarAlt, FaBriefcase, FaCertificate, FaUsers } from "react-icons/fa";
import GradientButton from "@/components/GradientButton";
const CourseBenefits = () => {
  const benefits = [
    { icon: <FaGlobe className="text-2xl" />, text: "Hands-on Lessons – Learn digital painting, shading & composition." },
    { icon: <FaClock className=" text-2xl" />, text: "Tool Mastery – Master Procreate, Photoshop, & Illustrator." },
    { icon: <FaPaintBrush className="text-2xl" />, text: "Exclusive Resource Pack – Brushes, templates & textures." },
    { icon: <FaCalendarAlt className=" text-2xl" />, text: "Live Mentorship – Weekly Q&A sessions with industry pros." },
    { icon: <FaBriefcase className=" text-2xl" />, text: "Project-Based Learning – Build a stunning portfolio." },
    { icon: <FaCertificate className=" text-2xl" />, text: "Certificate of Completion – Boost your creative career." },
    { icon: <FaUsers className=" text-2xl" />, text: "Community Access – Network with fellow artists." },
  ];

  return (
    <div className="bg-white py-12 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
        <span className="text-purple-600">With This Course, You Get:</span>
      </h2>

 
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center bg-white shadow-md rounded-lg p-4 text-gray-800 border border-gray-200">
            <span className="mr-4">{benefit.icon}</span>
            <p className="text-left">{benefit.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <GradientButton> Book Now at ₹49</GradientButton>
      </div>
    </div>
  );
};

export default CourseBenefits;
