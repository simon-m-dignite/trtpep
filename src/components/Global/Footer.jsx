import React from "react";
import { styles } from "../../styles/styles";
import { IoCallSharp } from "react-icons/io5";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdCopyright } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={`bg-blue-950 ${styles.paddingHorizontal} py-8 lg:py-12`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10">
        <div className="flex flex-col items-start gap-y-4">
          <h6 className="text-white font-semibold text-base">
            About TRT Nation
          </h6>
          <p className="text-sm text-gray-400">
            At TRT NATION our goal is to provide exceptional healthcare while
            offering the patient the right to quality prescription medication
            without the hassle of visiting a doctors office.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-white font-bold text-8xl lg:text-8xl">Logo</h1>
        </div>
        <div className="flex flex-col items-start gap-y-4">
          <h6 className="text-yellow-500 font-semibold text-base">
            Contact Information
          </h6>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <IoCallSharp className="text-base" />
            813-413-1000
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <HiBuildingOffice className="text-lg" /> 12602
            Telecom Drive Tampa FL 33637
          </p>
          <div>
            <button className="text-blue-950 bg-white px-4 py-2 text-sm font-semibold uppercase rounded-full flex items-center justify-center gap-1">
              enroll now <FiArrowUpRight className="text-lg"/>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-800 mt-6 lg:mt-20" />
      <div className="w-full pt-4">
        <p className="text-xs text-gray-400 flex items-center gap-1">
          <MdCopyright className="text-sm"/>TRT Nation. All rights reserved | Terms & Conditions | Privacy Policy
          | Cancellation Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
