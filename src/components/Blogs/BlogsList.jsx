import React from "react";
import BlogCard from "./BlogCard";
import { styles } from "../../styles/styles";
import { FiSearch } from "react-icons/fi";
import { blogs } from "../../constants/blogs";

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
        {blogs.map((blog) => {
          return (
            <BlogCard
              title={blog.title}
              text={blog.text}
              image={blog.blog_image}
              id={blog.id}
              key={blog.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogsList;
