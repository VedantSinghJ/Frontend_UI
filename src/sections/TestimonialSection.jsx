import React, { useState } from "react";

const testimonials = [
  {
    name: "Aditi Verma",
    age: 22,
    text: "I always wanted to learn digital art, but tutorials were confusing. This course made everything so simple! Now, I'm taking commissions online!",
  },
  {
    name: "Rajesh Khanna",
    age: 30,
    text: "Switching from traditional art to digital felt overwhelming, but this course changed everything! The structured lessons helped me master Procreate in weeks!",
  },
];

const TestimonialSection = () => {
  const [expanded, setExpanded] = useState(Array(testimonials.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) => prev.map((exp, i) => (i === index ? !exp : exp)));
  };

  return (
    <div className="flex flex-col items-center py-12 px-6">

      <div className="w-full max-w-lg aspect-video flex items-center justify-center bg-white border-2 border-blue-300 rounded-2xl shadow-lg">

        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="gray"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border-2 border-purple-400 rounded-xl shadow-md text-center p-4 w-full flex flex-col items-center justify-between md:p-3 md:text-sm"
          >
            <div>
              <h3 className="text-lg font-semibold md:text-base">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 md:text-xs">{testimonial.age}</p>
            </div>

            <p className={`text-gray-800 mt-2 text-sm transition-all ${expanded[index] ? "line-clamp-none" : "line-clamp-3"} md:text-xs md:mt-1`}>
              {testimonial.text}
            </p>

            <button
              onClick={() => toggleExpand(index)}
              className="mt-2 text-purple-600 font-medium underline text-sm md:text-xs"
            >
              {expanded[index] ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
