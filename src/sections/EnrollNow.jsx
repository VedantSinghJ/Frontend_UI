import React from "react";
import GradientButton from "@/components/GradientButton";

const EnrollNow = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 px-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Enroll Now for ₹7,999</h2>


      <div className="mt-6 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="border border-blue-100 rounded-full px-6 py-3 bg-white text-gray-800 shadow-sm">
          Secure Your Spot for Just ₹79
        </div>
        <div className="border border-blue-100 rounded-full px-6 py-3 bg-white text-gray-800 shadow-sm">
          Bonus Offer: Apply a coupon code within 15 minutes to unlock:
        </div>
        <div className="border border-blue-100 rounded-full px-6 py-3 bg-white text-gray-800 shadow-sm">
          Exclusive Brush & Texture Pack
        </div>
        <div className="border border-blue-100 rounded-full px-6 py-3 bg-white text-gray-800 shadow-sm">
          Extra Live Q&A Session with Mentors
        </div>
      </div>

      <p className="mt-4 text-gray-800 text-sm lg:text-base">
        We offer everything you need at ₹7,999—but wait... 👀
      </p>


      <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 border shadow-md max-w-2xl text-xs lg:text-base text-black font-medium">
        Use a Special Code & Unlock a Game-Changing Discount to avail the same course at a discounted price!
      </div>

      <div className="mt-6">
        <GradientButton>Book Now for ₹79</GradientButton>
      </div>
    </div>
  );
};

export default EnrollNow;
