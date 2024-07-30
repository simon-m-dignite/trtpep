import React from "react";

const ChooseAProviderForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-gray-600 font-semibold text-sm">
        Choose a provider:
      </h6>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <label htmlFor="" className="text-sm mt-1">
          Male
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="radio" name="" id="" className="w-5 h-5" />
        <div>
          <label htmlFor="" className="text-sm mt-1">
            Female
          </label>
        </div>
      </div>
     
    </div>
  );
};

export default ChooseAProviderForm;
