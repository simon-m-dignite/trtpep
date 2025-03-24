import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  TirzepatideTherapyBenefits1,
  TirzepatideTherapyBenefits2,
} from "../../constants/TirzepatideTherapyBenefits";

const Benefits = () => {
  return (
    <div className="w-full pt-10 pb-20 px-4 md:px-8 lg:px-60">
      <h4 className="text-2xl font-semibold mx-auto text-center uppercase">
        POTENTIAL BENEFITS OF Tirzepatide Therapy
      </h4>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 mt-8">
        <div className="lg:px-12">
          {TirzepatideTherapyBenefits1.map((benefit, index) => {
            return (
              <div
                className="flex items-center justify-start gap-2 border-b py-2"
                key={index}
              >
                <div className="w-4 h-4 bg-color rounded-full">
                  <MdOutlineKeyboardArrowRight className="text-white w-4 h-4" />
                </div>
                <p className="text-gray-600 w-[90%]">{benefit}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:px-12">
          {TirzepatideTherapyBenefits2.map((benefit, index) => {
            return (
              <div
                className="flex items-center justify-start gap-2 border-b py-2"
                key={index}
              >
                <div className="w-4 h-4 bg-color rounded-full">
                  <MdOutlineKeyboardArrowRight className="text-white w-4 h-4" />
                </div>
                <p className="text-gray-600 w-[90%]">{benefit}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
