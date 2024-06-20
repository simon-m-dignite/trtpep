import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";
import { FaBuilding } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="w-full">
      <div className="contact-us-hero w-full h-[50vh] md:h-[60vh] bg-gray-800 flex items-center justify-center pt-20">
        <h1 className="text-white font-bold text-4xl md:text-6xl">
          Contact Us
        </h1>
      </div>

      <div
        className={`w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-8 lg:px-48`}
      >
        <div className="flex flex-col items-start gap-4">
          <p className="font-medium">
            If you are an inquiring patient and have questions, please follow
            the link below to Enroll and set up a free consultation with one of
            our team members:
          </p>
          <Link
            to="/"
            className="px-4 py-3 rounded-md text-white bg-blue-900 uppercase font-medium text-sm"
          >
            enroll now
          </Link>
          <div className="w-full border mt-6 mb-3" />
          <p className="font-medium">
            Please note our weekly updated FAQ page which may address your
            questions as well.
          </p>
          <Link
            to="/"
            className="px-4 py-3 rounded-md text-white bg-blue-900 uppercase font-medium text-sm"
          >
            FAQ's
          </Link>
        </div>
        <div className="">
          <div className="w-full bg-blue-900 h-80 p-4">
            <div className="w-full h-60 bg-white">
              <h1>Map</h1>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2">
                <FaBuilding className="text-white text-[15px]" />
                <p className="text-white text-sm">
                  12602 Telecom Drive Tampa FL 33637
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoCallSharp className="text-white text-[15px]" />
                <p className="text-white text-sm">126 023 3637</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full flex flex-col items-center gap-3 pb-6 ${styles.paddingHorizontal} text-center`}>
        <div className="w-full lg:w-[40%] border mb-2" />
        <p className="font-medium">
          Anything additional please feel free to give us a call @ 813-413-1000
        </p>
        <p className="font-medium">
          Our normal business hours are 10am to 5pm Est. Monday to Friday.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
