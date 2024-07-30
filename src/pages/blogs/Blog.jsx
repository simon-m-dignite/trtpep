import React from "react";
import BlogsHero from "../../components/Blogs/BlogsHero";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <div className="w-full">
      <BlogsHero />
      <div
        className={`w-full py-12 lg:py-20 grid grid-cols-3 gap-10 ${styles.paddingHorizontal}`}
      >
        <div className="w-full col-span-3 lg:col-span-2 flex flex-col items-start gap-y-6">
          <div className="w-full">
            <img
              src="/blog-img.jpg"
              alt=""
              className="w-full lg:h-[70vh] brightness-75"
            />
          </div>
          <h1 className="font-bold text-2xl md:text-3xl text-black">
            Power and Presence: How TRT Can Enhance Leadership Qualities at Any
            Age
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nisi,
            nostrum quasi distinctio vel provident temporibus non voluptas.
            Suscipit, atque? Tenetur vero aperiam iusto consequatur at animi
            eveniet, earum et dolores accusantium dolorum consequuntur ullam in
            cum tempore possimus cumque. Quisquam voluptatem distinctio quam
            fugiat nulla dolores pariatur, molestiae hic, eveniet quae
            voluptate, vero omnis dignissimos sit odit consequuntur ad commodi
            praesentium aspernatur tenetur. Ipsum debitis reprehenderit, tempora
            in voluptates deserunt fugiat nobis facere perspiciatis odio
            molestias aliquid, pariatur quibusdam. Vero est odio non quas
            voluptate, perferendis at fugit nihil adipisci nemo incidunt sequi
            repellat delectus voluptatem ducimus cum labore.
          </p>
          <h1 className="font-bold text-2xl md:text-3xl text-black">
            Understanding the Impact of Testosterone on Leadership
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nisi,
            nostrum quasi distinctio vel provident temporibus non voluptas.
            Suscipit, atque? Tenetur vero aperiam iusto consequatur at animi
            eveniet, earum et dolores accusantium dolorum consequuntur ullam in
            cum tempore possimus cumque. Quisquam voluptatem distinctio quam
            fugiat nulla dolores pariatur, molestiae hic, eveniet quae
            voluptate, vero omnis dignissimos sit odit consequuntur ad commodi
            praesentium aspernatur tenetur. Ipsum debitis reprehenderit, tempora
            in voluptates deserunt fugiat nobis facere perspiciatis odio
            molestias aliquid, pariatur quibusdam. Vero est odio non quas
            voluptate, perferendis at fugit nihil adipisci nemo incidunt sequi
            repellat delectus voluptatem ducimus cum labore.
          </p>
          <h1 className="font-bold text-2xl md:text-3xl text-black">
            Reclaiming Your Leadership with TRT
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nisi,
            nostrum quasi distinctio vel provident temporibus non voluptas.
            Suscipit, atque? Tenetur vero aperiam iusto consequatur at animi
            eveniet, earum et dolores accusantium dolorum consequuntur ullam in
            cum tempore possimus cumque. Quisquam voluptatem distinctio quam
            fugiat nulla dolores pariatur, molestiae hic, eveniet quae
            voluptate, vero omnis dignissimos sit odit consequuntur ad commodi
            praesentium aspernatur tenetur. Ipsum debitis reprehenderit, tempora
            in voluptates deserunt fugiat nobis facere perspiciatis odio
            molestias aliquid, pariatur quibusdam. Vero est odio non quas
            voluptate, perferendis at fugit nihil adipisci nemo incidunt sequi
            repellat delectus voluptatem ducimus cum labore.
          </p>
          <h1 className="font-bold text-2xl md:text-3xl text-black">
            TRTPEP: A Partner in Your Leadership Journey
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nisi,
            nostrum quasi distinctio vel provident temporibus non voluptas.
            Suscipit, atque? Tenetur vero aperiam iusto consequatur at animi
            eveniet, earum et dolores accusantium dolorum consequuntur ullam in
            cum tempore possimus cumque. Quisquam voluptatem distinctio quam
            fugiat nulla dolores pariatur, molestiae hic, eveniet quae
            voluptate, vero omnis dignissimos sit odit consequuntur ad commodi
            praesentium aspernatur tenetur. Ipsum debitis reprehenderit, tempora
            in voluptates deserunt fugiat nobis facere perspiciatis odio
            molestias aliquid, pariatur quibusdam. Vero est odio non quas
            voluptate, perferendis at fugit nihil adipisci nemo incidunt sequi
            repellat delectus voluptatem ducimus cum labore.
          </p>
        </div>

        <div className="w-full col-span-3 lg:col-span-1 lg:p-5 flex flex-col gap-y-10 md:gap-y-0">
          {/* <div className="flex items-center justify-start gap-2">
            <input
              type="text"
              className="rounded-md outline-none border px-3 py-2.5 text-sm"
              placeholder="Search here"
            />
            <button className="bg-blue-900 rounded-md p-3">
              <FiSearch className="text-white" />
            </button>
          </div> */}

          <div className="flex flex-col items-start lg:mt-16 gap-2 lg:w-60">
            <h4 className="font-medium text-sm">Treatments</h4>
            <Link
              to="/"
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
              to="/"
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
              to="/"
              className="flex items-center gap-2 border-b py-1.5 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-semibold">
                Testosterone Therapy
              </span>
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
            <Link
              to="/"
              className="flex items-center gap-2 border-t py-2 w-full"
            >
              <span className="w-4 h-4 bg-gray-200 rounded-full">
                <MdOutlineKeyboardArrowRight className="text-gray-500" />
              </span>
              <span className="text-sm font-normal text-gray-500">
                Frwquently Asked Questions
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
