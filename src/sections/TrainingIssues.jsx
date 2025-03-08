import React from "react";
import { AiOutlineTool, AiOutlinePlus } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import GradientButton from "../components/GradientButton";

const TrainingIssues = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 py-12 px-6">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
        <span className="font-bold">Without Proper Training, You Might:</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        <div className="bg-white shadow-lg rounded-2xl p-6 text-gray-800 text-center flex flex-col items-center space-y-3">
          <AiOutlineTool className="w-8 h-8 text-blue-600" />
          <p>Struggle with complex software tools</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-gray-800 text-center flex flex-col items-center space-y-3">
          <AiOutlinePlus className="w-8 h-8 text-blue-600" />
          <p>Feel stuck without structured learning</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-gray-800 text-center flex flex-col items-center space-y-3">
          <MdClose className="w-8 h-8 text-red-600" />
          <p>Miss out on monetizing your skills</p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <GradientButton>Join the Training Now</GradientButton>
      </div>
    </div>
  );
};

export default TrainingIssues;
