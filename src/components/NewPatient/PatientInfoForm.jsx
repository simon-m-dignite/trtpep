import React from "react";

const PatientInfoForm = () => {
  return (
    <div className="w-full">
      <div>
        <label
          htmlFor="full-name"
          className="font-semibold text-gray-500 text-sm"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="first-name" className="text-[13px] text-gray-500">
            First
          </label>
          <input
            type="text"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="last-name" className="text-[13px] text-gray-500">
            Last
          </label>
          <input
            type="text"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="email"
            className="font-semibold text-gray-500 text-sm"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <label
            htmlFor="email"
            className="font-semibold text-gray-500 text-sm"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 mt-4">
        <label htmlFor="email" className="font-semibold text-gray-500 text-sm">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <p className="text-red-500 text-[13px]">Patients under 24 not eligible for treatment</p>
        <input
          type="date"
          className="text-sm p-2 border outline-none rounded"
        />
      </div>
    </div>
  );
};

export default PatientInfoForm;
