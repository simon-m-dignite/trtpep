import React from "react";
import { styles } from "../../styles/styles";

const BlogHero = ({ blog_title }) => {
  return (
    <div
      className={`blog-hero flex flex-col items-start justify-center ${styles.paddingHorizontal} gap-2`}
    >
      <h5 className="font-semibold uppercase text-white">june 14, 2024</h5>
      <h1 className="text-3xl lg:text-5xl text-white font-normal lg:leading-[60px] tracking-tight lg:w-1/2">
        {blog_title}
      </h1>
    </div>
  );
};

export default BlogHero;
