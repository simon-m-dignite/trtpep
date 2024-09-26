import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

const NewPatientFailure = () => {
  const handleNavigate = () => {
    window.location.href = "https://www.trtpep.com/";
  };

  useEffect(() => {
    setTimeout(() => {
      handleNavigate();
    }, 2000);
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full lg:w-auto border bg-white rounded-xl p-8 lg:py-16 lg:px-28 flex flex-col items-center justify-center relative">
        {/* <button
        className="absolute top-4 right-4 w-6 h-6 bg-gray-400/20 rounded-full flex items-center justify-center"
        onClick={() => setPaymentSuccessfull(false)}
      >
        <IoClose className="text-xl" />
      </button> */}
        <div className="w-[64px] h-[64px] rounded-full bg-red-50 flex items-center justify-center">
          <MdOutlineCancel className="text-[30px] text-red-600" />
        </div>

        <h3 className="font-semibold text-xl mt-5 text-center">
          Oops! Payment could not <br /> be processed.
        </h3>
        {/* <button
          type="button"
          onClick={handleNavigate}
          className="mt-3 text-sm font-medium text-white bg-[#C00000] px-4 py-3 rounded-md"
        >
          Schedule an appointment
        </button> */}
      </div>
    </div>
  );
};

export default NewPatientFailure;
