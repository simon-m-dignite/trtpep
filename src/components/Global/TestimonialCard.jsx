import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative rounded-xl p-8 flex flex-col items-start gap-y-6 box_shadow">
      <div className="w-full flex items-center justify-start gap-1">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStarHalf className="text-yellow-500" />
      </div>
      <div className="w-full">
        <p className="text-sm text-gray-500">{testimonial?.text}</p>
      </div>
      <div className="w-full flex items-center justify-start gap-3">
        <img
          src={testimonial.image}
          alt=""
          className="block w-14 h-14 rounded-full object-cover bg-no-repeat"
        />
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-[16px] font-medium">{testimonial?.name}</p>
          <p className="text-xs font-medium text-gray-400">4 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
