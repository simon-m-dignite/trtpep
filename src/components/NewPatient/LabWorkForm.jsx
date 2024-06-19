import React from "react";

const LabWorkForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-gray-600 font-semibold text-sm">
        Bloodwork for Testosterone Replacement Therapy
      </h6>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          $129.00 - Includes Total Testosterone, CBC, CMP and PSA*
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-7 h-7" />
        <div>
          <label htmlFor="" className="text-sm mt-1">
            I have my own labs which I will upload. (Must Include Total
            Testosterone, CBC, CMP) (*Must also include PSA if older than 40)
          </label>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          N/A
        </label>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="" className="text-gray-600 font-semibold text-sm">
          How did you hear about us? <span className="text-red-500">*</span>
        </label>
        <select name="" id="" className="p-2 lg:w-[50%] border outline-none text-sm">
          <option value="" selected></option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Instagram">Twitter</option>
          <option value="Reddit">Reddit</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default LabWorkForm;
