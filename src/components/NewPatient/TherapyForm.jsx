import React from "react";

const TherapyForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-gray-600 font-semibold text-base">
        Testosterone Therapy <span className="text-red-500">*</span>
      </h6>
      <p className="text-xs text-gray-500">
        Includes Initial Consult, Testosterone Cypionate, Anastrozole, Syringes
        and Shipping.
      </p>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          $250.00 - Without HCG (2.5 Month Supply @ $99/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          $375.00 - With HCG (2.5 Month Supply @ $149/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          N/A
        </label>
      </div>

      <h6 className="text-gray-600 font-semibold text-base mt-4">
        Peptide Therapy
      </h6>
      <p className="text-xs text-gray-500">
        Includes Initial Consult, Tesamorelin , Syringes and Shipping
      </p>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          $699.00 - Tesamorelin (3 Month Supply @ $233/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          $750 - Sermorelin (2.5-month supply $300/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          N/A
        </label>
      </div>

      <h6 className="text-gray-600 font-semibold text-base mt-4">
        HCG Therapy
      </h6>
      <p className="text-xs text-gray-500">
        Includes Initial Consult, HCG, Syringes and Shipping.
      </p>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          $199.00 - HCG (2.5 Month Supply @ $199)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          N/A
        </label>
      </div>

      <h6 className="text-gray-600 font-semibold text-base mt-4">
        Weight Loss Therapy
      </h6>
      <p className="text-xs text-gray-500">
        Includes Initial Consult, Weight loss Medications, Syringes and shipping
      </p>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          $460.00- Semaglutide ( 2.5 Month Supply @ $460)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          $1,490.00 Tirzepatide ( 2.5 Month Supply @ $596)
        </label>
      </div>
    </div>
  );
};

export default TherapyForm;
