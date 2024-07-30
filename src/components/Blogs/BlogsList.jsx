import React from "react";
import BlogCard from "./BlogCard";
import { styles } from "../../styles/styles";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BlogsList = () => {
  return (
    <div
      className={`w-full ${styles.paddingHorizontal} flex flex-col gap-0 lg:gap-10 my-20 lg:my-20`}
    >
      <div className="w-full flex items-center justify-end gap-2 border-b pb-6">
        <input
          type="text"
          className="rounded-md outline-none border px-3 py-2.5 text-sm w-80"
          placeholder="Search here"
        />
        <button className="bg-color rounded-md p-3">
          <FiSearch className="text-white" />
        </button>
      </div>
      <div className="w-full flex flex-col items-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      {/* <div className="col-span-3 order-1 lg:order-2 lg:col-span-1 lg:p-5  flex flex-col gap-y-10 md:gap-y-0">

        <div className="flex items-center justify-start gap-2">
          <input
            type="text"
            className="rounded-md outline-none border px-3 py-2.5 text-sm"
            placeholder="Search here"
          />
          <button className="bg-blue-900 rounded-md p-3">
            <FiSearch className="text-white" />
          </button>
        </div>

        <div className="flex flex-col items-start lg:mt-16 gap-2 lg:w-60">
          <h4 className="font-medium text-sm">Treatments</h4>
          <Link
            to="/"
            className="flex items-center gap-2 border-b py-1.5 w-full"
          >
            <span className="w-4 h-4 bg-gray-200 rounded-full">
              <MdOutlineKeyboardArrowRight className="text-gray-500" />
            </span>
            <span className="text-sm font-semibold">Testosterone Therapy</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 border-b py-1.5 w-full"
          >
            <span className="w-4 h-4 bg-gray-200 rounded-full">
              <MdOutlineKeyboardArrowRight className="text-gray-500" />
            </span>
            <span className="text-sm font-semibold">Testosterone Therapy</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 border-b py-1.5 w-full"
          >
            <span className="w-4 h-4 bg-gray-200 rounded-full">
              <MdOutlineKeyboardArrowRight className="text-gray-500" />
            </span>
            <span className="text-sm font-semibold">Testosterone Therapy</span>
          </Link>
        </div>

        <div className="flex flex-col items-start lg:mt-16 gap-2 lg:w-60">
          <h4 className="font-medium text-sm">Important Links</h4>
          <Link to="/" className="flex items-center gap-2 py-1 w-full">
            <span className="w-4 h-4 bg-gray-200 rounded-full">
              <MdOutlineKeyboardArrowRight className="text-gray-500" />
            </span>
            <span className="text-sm font-normal text-gray-500">
              Labs | Bloodwork
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2 border-t py-2 w-full">
            <span className="w-4 h-4 bg-gray-200 rounded-full">
              <MdOutlineKeyboardArrowRight className="text-gray-500" />
            </span>
            <span className="text-sm font-normal text-gray-500">
              Frwquently Asked Questions
            </span>
          </Link>
        </div>

      </div> */}
    </div>
  );
};

export default BlogsList;
