import React from "react";
import { styles } from "../../styles/styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ReplacementTherapy = () => {
  return (
    <section className={`py-12 xl:pt-20 w-full`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10">
        <div className="col-span-2 lg:col-span-1 image-shadow">
          <img
            src="/TESTOSTERONE-REPLACEMENT-THERAPY.jpg"
            alt=""
            className="w-full h-[90%] object-cover brightness-90"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col items-start justify-start gap-y-4 px-4 md:pr-8 lg:pr-28">
          <h1 className="text-[40px] font-semibold text-black lg:tracking-tight">
            TESTOSTERONE REPLACEMENT THERAPY
          </h1>
          <p className="text-gray-500 font-bold text-base">
            TRANSFORMATIVE AND EFFECTIVE, when levels are low as TRT may offer
            the following benefits:
          </p>
          <div className="w-full pt-2">
            <div className="flex items-center justify-start gap-2 pb-2">
              <div className="">
                <IoMdCheckmark className="text-color text-lg" />
              </div>
              <p className="text-gray-500">BOOST BRAIN FUNCTION</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-color text-lg" />
              </div>
              <p className="text-gray-500">IMPROVE CARDIOVASCULAR HEALTH</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-color text-lg" />
              </div>
              <p className="text-gray-500">ENHANCE BONE DENSITY</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-color text-lg" />
              </div>
              <p className="text-gray-500">BUILD LEAN MUSCLE</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-color text-lg" />
              </div>
              <p className="text-gray-500">PROMOTE FAT LOSS</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-color text-lg" />
              </div>
              <p className="text-gray-500">ELEVATE YOUR SENSE OF WELL-BEING</p>
            </div>
          </div>
          <div className="mt-2">
            <Link
              to={"/testosterone-replacement-therapy/"}
              className="bg-color flex items-center gap-1 text-white text-sm font-medium px-6 py-3 transition-all duration-300 rounded-full uppercase"
            >
              enroll now
              <RiArrowRightUpLine className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplacementTherapy;
