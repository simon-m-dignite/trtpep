import React from "react";
import { styles } from "../../styles/styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { RiArrowRightUpLine } from "react-icons/ri";

const ReplacementTherapy = () => {
  return (
    <section className={`${styles.paddingHorizontal} py-12 lg:py-20 w-full`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <img
            src="https://img.freepik.com/free-photo/doctors-shaking-hands_23-2147822708.jpg?t=st=1717721565~exp=1717725165~hmac=860b95871a19b3114870d1239eceaae60c78c19b2db07e2f7008c77c62218899&w=1060"
            alt=""
            className="w-full h-full rounded-lg brightness-90"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 lg:px-4 flex flex-col items-start justify-start gap-y-4">
          <h1 className="text-[40px] font-semibold text-blue-950">
            TESTOSTERONE REPLACEMENT THERAPY
          </h1>
          <p className="text-gray-500 font-bold text-base">
            PROVEN TO BE SUCCESSFUL. LIFE CHANGING
          </p>
          <div className="w-full pt-2">
            <div className="flex items-center justify-start gap-2 pb-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">BRAIN FUNCTION</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">CARDIOVASCULAR HEALTH</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">INCREASED BONE DENSITY</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">LEAN MUSCLE</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">FAT LOSS</p>
            </div>
            <div className="flex items-center justify-start gap-2 py-2">
              <div className="">
                <IoMdCheckmark className="text-blue-900 text-lg" />
              </div>
              <p className="text-gray-500">SENSE OF WELLBEING</p>
            </div>
          </div>
          <div className="mt-2">
          <button className="bg-blue-950 flex items-center gap-1 text-white text-sm font-medium px-6 py-3 hover:bg-blue-950 transition-all duration-300 rounded-full uppercase">
              enroll now
              <RiArrowRightUpLine className="text-lg"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReplacementTherapy;
