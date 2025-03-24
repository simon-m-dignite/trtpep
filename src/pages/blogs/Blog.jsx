import React, { useEffect } from "react";
import BlogsHero from "../../components/Blogs/BlogsHero";
import { styles } from "../../styles/styles";
import { Link, useParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { blogs } from "../../constants/blogs";
import BlogHero from "../../components/Blogs/BlogHero";

const Blog = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  if (!blog) {
    return <div>Blog not found.</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [id]); // Trigger scroll when pathname changes

  return (
    <div className="w-full">
      <BlogHero blog_title={blog.blog_title} />
      <div
        className={`w-full py-12 lg:py-20 grid grid-cols-3 gap-10 ${styles.paddingHorizontal}`}
      >
        <div className="w-full col-span-3 lg:col-span-2 flex flex-col items-start gap-y-6">
          <div className="w-full">
            <img
              src={blog.blog_image}
              alt=""
              className="w-full lg:h-[70vh] brightness-75 object-cover"
            />
          </div>
          <h1 className="font-bold text-2xl md:text-3xl text-black">
            {blog.title}
          </h1>
          {blog.sections.map((b, index) => {
            return (
              <div>
                <h1 className="font-bold text-lg mb-3 md:text-xl text-black">
                  {b.heading}
                </h1>
                <p className="text-gray-500">{b.paragraph}</p>
              </div>
            );
          })}
        </div>

        <div className="w-full col-span-3 lg:col-span-1 lg:p-5 flex flex-col gap-y-10 md:gap-y-0">
          <div className="flex flex-col items-start lg:mt-16 gap-2 lg:w-60">
            <h4 className="font-medium text-sm">Treatments</h4>
            <Link
              to="/testosterone-replacement-therapy/"
              className="flex items-center gap-2 border-b py-1.5 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-semibold">
                Testosterone Therapy
              </span>
            </Link>
            <Link
              to="/hcg-therapy/"
              className="flex items-center gap-2 border-b py-1.5 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-semibold">HCG Therapy</span>
            </Link>
            <Link
              to="/tesamorelin-therapy/"
              className="flex items-center gap-2 border-b py-1.5 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-semibold">
                Tesamoreline Therapy
              </span>
            </Link>
            <Link
              to="/sermorelin-therapy/"
              className="flex items-center gap-2 border-b py-1.5 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-semibold">Sermoreline Therapy</span>
            </Link>
            <Link
              to="/semaglutide-therapy/"
              className="flex items-center gap-2 border-b py-1.5 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-semibold">Semaglutide Therapy</span>
            </Link>
            <Link
              to="/tirzepatide-therapy/"
              className="flex items-center gap-2 border-b py-1.5 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-semibold">Tirzepatide Therapy</span>
            </Link>
          </div>

          <div className="flex flex-col items-start lg:mt-16 gap-2 lg:w-60">
            <h4 className="font-medium text-sm">Important Links</h4>
            <Link
              to="/lab-orders"
              className="flex items-center gap-2 py-1 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-normal text-gray-500">
                Labs | Bloodwork
              </span>
            </Link>
            <Link
              to="/faq"
              className="flex items-center gap-2 border-t py-2 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-normal text-gray-500">
                Frequently Asked Questions
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
