import React from "react";
import { styles } from "../../styles/styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const WeightLossTherapy = () => {
  return (
    <section className={`py-12 lg:py-20 w-full`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10">
        <div className="col-span-2 lg:col-span-1 image-shadow">
          <img
            src="weightloss-therapy-img.jpg"
            alt=""
            className="w-full h-full brightness-90"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col items-start justify-start gap-y-4 px-4 md:pr-8 lg:pr-28">
          <h1 className="text-[40px] font-semibold text-blue-950 lg:tracking-tight">
          WEIGHT LOSS THERAPY
          </h1>
          <p className="text-gray-500 font-bold text-base">
          TRANSFORM YOUR BODY WITH TARGETED BENEFITS
          </p>
          <div className="w-full pt-2">
            <div className="flex items-center justify-start gap-2 pb-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">EFFECTIVE WEIGHT MANAGEMENT</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">ENHANCED METABOLIC FUNCTION</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">REDUCED APPETITE</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">INCREASED ENERGY LEVELS</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">IMPROVED OVERALL HEALTH</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">BOOSTED CONFIDENCE</p>
            </div>
          </div>
          <div className="mt-2">
          <Link to={'/testosterone-replacement-therapy/'} className="bg-color flex items-center gap-1 text-white text-sm font-medium px-6 py-3 transition-all duration-300 rounded-full uppercase">
              enroll now
              <RiArrowRightUpLine className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossTherapy;
