import React from "react";

const ShippingInfoForm = ({ formData, setFormData }) => {
  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      shippingInfo: {
        ...prevState.shippingInfo,
        [name]: value,
      },
    }));
  };

  // Handler for checkbox change
  const handleCheckboxChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      shippingInfo: {
        ...prevState.shippingInfo,
        isBillingSameAsShipping: e.target.checked,
      },
      billingInfo: e.target.checked
        ? prevState.shippingInfo // Copy shipping info to billing info
        : { ...prevState.billingInfo, isBillingSameAsShipping: false }, // Reset billing info if unchecked
    }));
  };

  return (
    <div>
      <div>
        <h6 className="font-semibold text-gray-500 text-sm">
          Shipping Address <span className="text-red-500">*</span>
        </h6>
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <label htmlFor="streetAddress" className="text-[13px] text-gray-500">
          Street Address
        </label>
        <input
          type="text"
          name="streetAddress"
          value={formData.shippingInfo.streetAddress || ""}
          onChange={handleInputChange}
          className="text-sm p-2 border outline-none rounded"
        />
      </div>

      <div className="flex flex-col gap-1 mt-3">
        <label htmlFor="addressLine2" className="text-[13px] text-gray-500">
          Address Line 2
        </label>
        <input
          type="text"
          name="addressLine2"
          value={formData.shippingInfo.addressLine2 || ""}
          onChange={handleInputChange}
          className="text-sm p-2 border outline-none rounded"
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="city" className="text-[13px] text-gray-500">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.shippingInfo.city || ""}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="state" className="text-[13px] text-gray-500">
            State
          </label>
          <input
            type="text"
            name="state"
            value={formData.shippingInfo.state || ""}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
        <div className="flex flex-col gap-1 mt-3">
          <label htmlFor="zipCode" className="text-[13px] text-gray-500">
            ZIP Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.shippingInfo.zipCode || ""}
            onChange={handleInputChange}
            className="text-sm p-2 border outline-none rounded"
          />
        </div>
        <div></div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <h6 className="font-semibold text-gray-500 text-sm">
          Billing Address <span className="text-red-500">*</span>
        </h6>
        <p className="text-xs text-gray-500">
          Billing address used for credit card authorization only.
        </p>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isBillingSameAsShipping"
            checked={formData.shippingInfo.isBillingSameAsShipping || false}
            onChange={handleCheckboxChange}
            className="w-4 h-4"
          />
          <label
            htmlFor="isBillingSameAsShipping"
            className="font-normal text-gray-500 text-sm"
          >
            Same as shipping address
          </label>
        </div>
      </div>

      {/* Billing address fields */}
      {!formData.shippingInfo.isBillingSameAsShipping && (
        <>
          <div className="flex flex-col gap-1 mt-4">
            <label htmlFor="billingStreetAddress" className="text-[13px] text-gray-500">
              Street Address
            </label>
            <input
              type="text"
              name="billingStreetAddress"
              value={formData.billingInfo.streetAddress || ""}
              onChange={handleInputChange}
              className="text-sm p-2 border outline-none rounded"
            />
          </div>

          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="billingAddressLine2" className="text-[13px] text-gray-500">
              Address Line 2
            </label>
            <input
              type="text"
              name="billingAddressLine2"
              value={formData.billingInfo.addressLine2 || ""}
              onChange={handleInputChange}
              className="text-sm p-2 border outline-none rounded"
            />
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="billingCity" className="text-[13px] text-gray-500">
                City
              </label>
              <input
                type="text"
                name="billingCity"
                value={formData.billingInfo.city || ""}
                onChange={handleInputChange}
                className="text-sm p-2 border outline-none rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="billingState" className="text-[13px] text-gray-500">
                State
              </label>
              <input
                type="text"
                name="billingState"
                value={formData.billingInfo.state || ""}
                onChange={handleInputChange}
                className="text-sm p-2 border outline-none rounded"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
            <div className="flex flex-col gap-1 mt-3">
              <label htmlFor="billingZipCode" className="text-[13px] text-gray-500">
                ZIP Code
              </label>
              <input
                type="text"
                name="billingZipCode"
                value={formData.billingInfo.zipCode || ""}
                onChange={handleInputChange}
                className="text-sm p-2 border outline-none rounded"
              />
            </div>
            <div></div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShippingInfoForm;
