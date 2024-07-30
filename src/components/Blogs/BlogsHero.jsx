import React from "react";
import { styles } from "../../styles/styles";

const BlogsHero = () => {
  return (
    <div
      className={`blogs-hero flex flex-col items-start justify-center ${styles.paddingHorizontal} gap-2`}
    >
      <h5 className="font-semibold uppercase text-white">june 14, 2024</h5>
      <h1 className="text-3xl lg:text-5xl text-white font-normal lg:leading-[60px] tracking-tight">
        Why use Human <br /> Chorionic Gonadotropin / <br /> HCG?
      </h1>
      <button className="font-semibold mt-4 border border-white px-6 py-3 text-sm text-white hover:bg-red-800 hover:border-red-800 transition-all duration-300">
        More TRT Details
      </button>
    </div>
  );
};

export default BlogsHero;
