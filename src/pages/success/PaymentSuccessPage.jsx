import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaymentSuccessPage = () => {
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
          <FaCheck className="text-[30px] text-red-600" />
        </div>
        {/* <h3 className="font-semibold text-xl mt-5">
          Order Placed Successfully
        </h3> */}
        <h3 className="font-semibold text-xl mt-3">Payment Successfull</h3>
        <Link
          to={"/"}
          className="mt-3 text-sm font-medium text-white bg-[#C00000] px-4 py-2 rounded-md"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
