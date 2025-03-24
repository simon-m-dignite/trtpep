import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { benefits1, benefits2 } from "../../constants/SemaglutideBenefits";

const SemaglutideBenefits = () => {
  return (
    <div className="w-full pt-10 pb-20 px-4 md:px-8 lg:px-40">
      <h4 className="text-2xl font-semibold mx-auto text-center">
        POTENTIAL BENEFITS OF SEMAGLUTIDE
      </h4>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 mt-8">
        <div className="lg:px-12">
          {benefits1.map((benefit, index) => {
            return (
              <div
                className="flex items-center justify-start gap-3 border-b py-2"
                key={index}
              >
                <div className="w-4 h-4 bg-color rounded-full flex items-center justify-center">
                  <MdOutlineKeyboardArrowRight className="text-white w-4 h-4" />
                </div>
                <p className="text-gray-600 text-[15px] w-[90%]">{benefit}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:px-12">
          {benefits2.map((benefit, index) => {
            return (
              <div
                className="flex items-center justify-start gap-2 border-b py-2"
                key={index}
              >
                <div className="w-4 h-4 bg-color rounded-full flex items-center justify-center">
                  <MdOutlineKeyboardArrowRight className="text-white w-4 h-4" />
                </div>
                <p className="text-gray-600 text-[15px] w-[90%]">{benefit}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SemaglutideBenefits;
