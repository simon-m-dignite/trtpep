import React from "react";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="overflow-hidden w-full">
        <img
          src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149333727.jpg?t=st=1718319067~exp=1718322667~hmac=a3241920d42c88d9136df0359ec1e3529918227170ede41944a9f8ab3069f1bc&w=1060"
          alt=""
          className="w-full lg:h-[70vh] brightness-75 scale-100 hover:scale-150 transition-all duration-[5s]"
        />
      </div>
      <div className="p-5 flex flex-col items-start gap-4">
        <Link to="/blogs/8976" className="lg:text-2xl font-bold">
          Power and Presence: How TRT Can Enhance Leadership Qualities at Any
          Age
        </Link>
        <p className="text-sm text-gray-500">
          Leadership, TestosteroneJune 10, 2024
        </p>
        <p className="text-gray-600">
          Power and Presence: How TRT Can Enhance Leadership Qualities at Any
          Age Leadership demands more than just strategic thinking and the
          ability to execute plans; it requires a commanding presence and
          sustained energy levels that inspire and motivate others. Former
          President Donald Trump, often in the spotlight for his assertive
          demeanor and tireless campaigning, exemplifies…
        </p>
        <button className="text-sm font-bold flex items-center gap-1">
          Read more <MdArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
