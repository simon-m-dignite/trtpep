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
          name="bloodWorkForTestosterone"
          value={"124.95"}
          checked={
            formData.labWorkDetails.bloodWorkForTestosterone?.title ===
            "Total Testosterone"
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
        <label htmlFor="bloodWork1" className="text-sm mt-1">
          $124.95 - Covers Total Testosterone, CBC, CMP, and PSA*
        </label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="bloodWorkForTestosterone"
          value={"upload"}
          checked={
            formData.labWorkDetails.bloodWorkForTestosterone?.title ===
            "I will upload my own labs"
          }
          onChange={() =>
            handleRadioChange(
              "bloodWorkForTestosterone",
              "I will upload my own labs",
              0
            )
          }
          id="bloodWorkUpload"
          className="w-5 h-5"
        />
        <label htmlFor="bloodWorkUpload" className="text-sm mt-1">
          I will upload my own labs (Must include Total Testosterone, CBC, CMP.
          Also, PSA if over 40)
        </label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="bloodWorkForTestosterone"
          value={"na"}
          checked={
            formData.labWorkDetails.bloodWorkForTestosterone?.title === "N/A"
          }
          onChange={() =>
            handleRadioChange("bloodWorkForTestosterone", "N/A", 0)
          }
          id="bloodWorkNA"
          className="w-5 h-5"
        />
        <label htmlFor="bloodWorkNA" className="text-sm mt-1">
          N/A
        </label>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label
          htmlFor="howDidHear"
          className="text-gray-600 font-semibold text-sm"
        >
          How did you hear about us? <span className="text-red-500">*</span>
        </label>
        <select
          name="howDidHear"
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
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Twitter">Twitter</option>
          <option value="Reddit">Reddit</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default LabWorkForm;
