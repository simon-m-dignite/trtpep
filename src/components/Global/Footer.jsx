import React from "react";
import { styles } from "../../styles/styles";
import { IoCallSharp } from "react-icons/io5";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdCopyright } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const router = useNavigate();

  const handleButtonClick = () => {
    router.push("/target-page#enrollment-form");
  };

  return (
    <footer className={`bg-color ${styles.paddingHorizontal} py-8 lg:py-12`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10">
        <div className="flex flex-col items-start gap-y-4">
          <h6 className="text-white font-semibold text-base">About TRTPEP</h6>
          <p className="text-sm text-white">
            At TRTPEP our goal is to provide exceptional healthcare while
            offering the patient the right to quality prescription medication
            without the hassle of visiting a doctors office.
          </p>
        </div>
        <div className="flex justify-center items-center">
          {/* <h1 className="text-white font-bold text-7xl lg:text-7xl uppercase">
            TRTPEP
          </h1> */}
          <img src="/TRT-WHITE-LOGO.png" alt="trtpep-logo" className="w-24" />
        </div>
        <div className="flex flex-col items-start gap-y-4">
          <h6 className="text-white font-semibold text-base">
            Contact Information
          </h6>
          <p className="text-sm text-white flex items-center gap-2">
            <IoCallSharp className="text-base" />
            (888) 942-0006
          </p>
          <p className="text-sm text-white flex items-center gap-2">
            <HiBuildingOffice className="text-lg" /> 8265 Sheridan Dr. Buffalo
            New York 14221
          </p>
          <div>
            <Link
              to="/testosterone-replacement-therapy#enrollment-form"
              className="text-blue-950 bg-white px-4 py-2 text-sm font-semibold uppercase rounded-md flex items-center justify-center gap-1"
            >
              enroll now <FiArrowUpRight className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full border border-gray-300 mt-6 lg:mt-20" />
      <div className="w-full pt-4">
        <p className="text-xs text-white flex items-center gap-1">
          <MdCopyright className="text-sm" />
          TRTPEP. All rights reserved | Terms & Conditions | Privacy Policy |
          Cancellation Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
