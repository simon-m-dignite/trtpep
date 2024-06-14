import React from "react";

const LabOrdersForm = () => {
  return (
    <div className="px-4 md:px-10 lg:px-48 w-full py-16 flex flex-col gap-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex items-center justify-start gap-2">
          <input type="radio" name="" id="" className="w-5 h-5" />
          <label
            htmlFor="new-patient"
            className="text-sm font-normal text-gray-500"
          >
            New Patient
          </label>
        </div>
        <div className="flex items-center justify-start gap-2">
          <input type="radio" name="" id="" className="w-5 h-5" />
          <label
            htmlFor="new-patient"
            className="text-sm font-normal text-gray-500"
          >
            Old Patient
          </label>
        </div>
      </div>
      <div>
        <label
          htmlFor="full-name"
          className="text-sm font-semibold text-gray-500"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label htmlFor="First" className="text-gray-500 text-sm">
            First
          </label>
          <input
            type="text"
            className="w-full border py-2 rounded px-2 outline-none"
          />
        </div>
        <div>
          <label htmlFor="First" className="text-gray-500 text-sm">
            Last
          </label>
          <input
            type="text"
            className="w-full border py-2 rounded px-2 outline-none"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="full-name"
            className="text-sm font-semibold text-gray-500"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border py-2 rounded px-2 outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="full-name"
            className="text-sm font-semibold text-gray-500"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border py-2 rounded px-2 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default LabOrdersForm;
