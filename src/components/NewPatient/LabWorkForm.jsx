import React from "react";

const LabWorkForm = ({ formData, setFormData, handleRadioChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <h6 className="text-gray-600 font-semibold text-sm">
        Bloodwork for Testosterone Replacement Therapy
      </h6>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="labWorkDetails"
          value={"250"}
          checked={
            formData.labWorkDetails.bloodWorkForTestosterone?.price === 124.95
          }
          onChange={() =>
            handleRadioChange(
              "bloodWorkForTestosterone",
              "Total Testosterone",
              124.95
            )
          }
          id="bloodWork1"
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $124.95 - Covers Total Testosterone, CBC, CMP, and PSA*
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="labWorkDetails"
          value={"0"}
          checked={
            formData.labWorkDetails.bloodWorkForTestosterone?.price === 0
          }
          onChange={() =>
            handleRadioChange(
              "bloodWorkForTestosterone",
              "I will upload my own labs",
              0
            )
          }
          id=""
          className="w-5 h-5"
        />
        <div>
          <label htmlFor="" className="text-sm mt-1">
            I will upload my own labs (Must include Total Testosterone, CBC,
            CMP. Also, PSA if over 40)
          </label>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="labWorkDetails"
          value={"0"}
          checked={
            formData.labWorkDetails.bloodWorkForTestosterone?.price === "0"
          }
          onChange={() =>
            handleRadioChange("bloodWorkForTestosterone", "0", "0")
          }
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          N/A
        </label>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="" className="text-gray-600 font-semibold text-sm">
          How did you hear about us? <span className="text-red-500">*</span>
        </label>
        <select
          name="labWorkDetails"
          value={formData.labWorkDetails.howDidHear || ""}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              labWorkDetails: {
                ...prevState.labWorkDetails,
                howDidHear: e.target.value,
              },
            }))
          }
          className="p-2 lg:w-[50%] border outline-none text-sm"
        >
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
