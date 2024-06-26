import React from "react";
import { styles } from "../../styles/styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";

const AntiAgingTherapy = () => {
  return (
    <section
      className={`py-6 w-full lg:py-20 bg-gray-50`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10">
        <div className="col-span-2 lg:col-span-1 flex flex-col items-start justify-start gap-y-4 px-4 md:pl-8 lg:pl-28">
          <h1 className="text-[40px] font-semibold text-blue-950">
            ANTI AGING PEPTIDE THERAPY
          </h1>
          <p className="text-gray-500 font-bold text-base">
            GROWTH HORMONE RELEASING PEPTIDES
          </p>
          <div className="w-full pt-2">
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">
                INCREASE NATURAL PRODUCTION OF GROWTH HORMONE
              </p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">HEALTHIER LOOKING SKIN AND HAIR</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">FEEL YOUNGER</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">INCREASE LIBIDO</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">INCREASE FAT METABOLISM</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-3">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">INCREASE LEAN MUSCLE MASS</p>
            </div>
          </div>
          <div className="mt-2">
            <button className="bg-blue-950 flex items-center gap-1 text-white text-sm font-medium px-6 py-3 hover:bg-blue-950 transition-all duration-300 rounded-full uppercase">
              enroll now
              <RiArrowRightUpLine className="text-lg"/>
            </button>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 image-shadow2">
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full brightness-90"
          />
        </div>
      </div>
    </section>
  );
};

export default AntiAgingTherapy;
