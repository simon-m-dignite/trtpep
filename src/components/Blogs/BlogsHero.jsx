import React from "react";
import { styles } from "../../styles/styles";

const BlogsHero = ({ blog_title }) => {
  return (
    <div
      className={`blogs-hero flex flex-col items-start justify-center ${styles.paddingHorizontal} gap-2`}
    >
      <h5 className="font-semibold uppercase text-white">Aug 23, 2024</h5>
      <h1 className="text-3xl lg:text-5xl text-white font-normal lg:leading-[60px] tracking-tight lg:w-1/2 my-4">
        What is Testosterone Therapy?
      </h1>
      <a
        href="#whatistrt"
        className="border border-white px-4 py-2 text-white font-normal text-[15px] mt-3"
      >
        More TRT Details
      </a>
    </div>
  );
};

export default BlogsHero;
