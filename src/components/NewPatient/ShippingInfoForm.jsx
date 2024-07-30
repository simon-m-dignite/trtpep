import React from "react";

const ShippingInfoForm = () => {
  return (
    <div>
      <div>
        <h6 className="font-semibold text-gray-500 text-sm">
          Shipping Address <span className="text-red-500">*</span>
        </h6>
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <label htmlFor="Street-Address" className="text-[13px] text-gray-500">
          Street Address
        </label>
        <input
          type="text"
          className="text-sm p-2 border outline-none rounded"
        />
      </div>

      <div className="flex flex-col gap-1 mt-3">
        <label htmlFor="Street-Address" className="text-[13px] text-gray-500">
          Address Line 2
        </label>
        <input
          type="text"
          className="text-sm p-2 border outline-none rounded"
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="City" className="text-[13px] text-gray-500">
            City
          </label>
          <input
            type="text"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="State" className="text-[13px] text-gray-500">
            State
          </label>
          <input
            type="text"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="ZIP-Code" className="text-[13px] text-gray-500">
            ZIP Code
          </label>
          <input
            type="text"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <h6 className="font-semibold text-gray-500 text-sm">
          Billing Address <span className="text-red-500">*</span>
        </h6>
        <p className="text-xs text-gray-500">Billing address used for credit card authorization only.</p>
        <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" className="w-4 h-4"/>
            <label htmlFor="" className="font-normal text-gray-500 text-sm">Same as shipping address</label>
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <label htmlFor="Street-Address" className="text-[13px] text-gray-500">
          Street Address
        </label>
        <input
          type="text"
          className="text-sm p-2 border outline-none rounded"
        />
      </div>

      <div className="flex flex-col gap-1 mt-3">
        <label htmlFor="Street-Address" className="text-[13px] text-gray-500">
          Address Line 2
        </label>
        <input
          type="text"
          className="text-sm p-2 border outline-none rounded"
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="City" className="text-[13px] text-gray-500">
            City
          </label>
          <input
            type="text"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="State" className="text-[13px] text-gray-500">
            State
          </label>
          <input
            type="text"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="ZIP-Code" className="text-[13px] text-gray-500">
            ZIP Code
          </label>
          <input
            type="text"
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfoForm;
