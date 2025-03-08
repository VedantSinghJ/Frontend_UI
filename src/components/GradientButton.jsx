import React from "react";

const GradientButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-2xl shadow-lg hover:opacity-90 transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
