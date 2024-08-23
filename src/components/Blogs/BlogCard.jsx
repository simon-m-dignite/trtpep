import React from "react";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = ({ image, title, text, id }) => {
  return (
    <div
      id="whatistrt"
      className="w-full lg:w-[90%] border-b py-10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6"
    >
      <div className="col-span-0 hidden lg:col-span-1 lg:flex flex-col items-start gap-3">
        <p className="uppercase text-xl font-semibold text-gray-500">Aug</p>
        <div className="w-11 h-[2px] bg-gray-400" />
        <p className="text-4xl font-bold text-gray-500">23</p>
      </div>
      <div className="overflow-hidden w-full col-span-12 lg:col-span-3 pt-1 object-cover">
        <img
          src={image}
          alt=""
          className="w-full h-full brightness-75 scale-100 hover:scale-150 transition-all duration-[5s]"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-3 col-span-12 lg:col-span-8">
        <Link to={`/blogs/${id}`} className="lg:text-2xl font-bold">
          {title}
        </Link>
        <p className="text-sm text-gray-500">
          Leadership, TestosteroneJune 10, 2024
        </p>
        <p className="text-gray-600 text-[15.5px]">{text}...</p>
        <Link
          to={`/blogs/${id}`}
          className="text-sm font-bold flex items-center gap-1"
        >
          Read more <MdArrowRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
