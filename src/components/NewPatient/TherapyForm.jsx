import React from "react";

const TherapyForm = ({ formData, setFormData, handleRadioChange }) => {
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
        <input
          type="radio"
          name="testosterone"
          value={"250"}
          checked={formData.therapyDetails.testosterone?.price === 250}
          onChange={() => handleRadioChange("testosterone", "Without HCG", 250)}
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $250.00 - Without HCG (2.5 Month Supply @ $99/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="testosterone"
          value={"375"}
          checked={formData.therapyDetails.testosterone?.price === 375}
          onChange={() => handleRadioChange("testosterone", "With HCG", 375)}
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $375.00 - With HCG (2.5 Month Supply @ $149/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="testosterone"
          value={"N/A"}
          checked={formData.therapyDetails.testosterone?.price === "N/A"}
          onChange={() => handleRadioChange("testosterone", "N/A", "N/A")}
          className="w-5 h-5"
        />
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
        <input
          type="radio"
          name="peptide"
          value={"699"}
          checked={formData.therapyDetails.peptide?.price === 699}
          onChange={() => handleRadioChange("peptide", "Tesamorelin", 699)}
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $699.00 - Tesamorelin (3 Month Supply @ $233/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="peptide"
          value={"750"}
          checked={formData.therapyDetails.peptide?.price === 750}
          onChange={() => handleRadioChange("peptide", "Sermorelin", 750)}
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $750 - Sermorelin (2.5-month supply $300/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="peptide"
          value={"N/A"}
          checked={formData.therapyDetails.peptide?.price === "N/A"}
          onChange={() => handleRadioChange("peptide", "N/A", "N/A")}
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          N/A
        </label>
      </div>

      {formData?.therapyDetails?.testosterone?.title == "With HCG" && (
        <>
          <h6 className="text-gray-600 font-semibold text-base mt-4">
            HCG Therapy
          </h6>
          <p className="text-xs text-gray-500">
            Includes Initial Consult, HCG, Syringes and Shipping.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="hcg"
              value={"199"}
              checked={formData.therapyDetails.hcg?.price === 199}
              onChange={() => handleRadioChange("hcg", "HCG", 199)}
              id=""
              className="w-5 h-5"
            />
            <label htmlFor="" className="text-sm mt-1">
              $199.00 - HCG (2.5 Month Supply @ $199)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="hcg"
              value={"N/A"}
              checked={formData.therapyDetails.hcg?.price === "N/A"}
              onChange={() => handleRadioChange("hcg", "N/A", "N/A")}
              id=""
              className="w-5 h-5"
            />
            <label htmlFor="" className="text-sm mt-1">
              N/A
            </label>
          </div>
        </>
      )}
      <h6 className="text-gray-600 font-semibold text-base mt-4">
        Weight Loss Therapy
      </h6>
      <p className="text-xs text-gray-500">
        Includes Initial Consult, Weight loss Medications, Syringes and shipping
      </p>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="weightLoss"
          value={"460"}
          checked={formData.therapyDetails.weightLoss?.price === 460}
          onChange={() => handleRadioChange("weightLoss", "Semaglutide", 460)}
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $460.00- Semaglutide ( 2.5 Month Supply @ $460)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="weightLoss"
          value={"1490"}
          checked={formData.therapyDetails.weightLoss?.price === 1490}
          onChange={() => handleRadioChange("weightLoss", "Tirzepatide", 1490)}
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $1,490.00 Tirzepatide ( 2.5 Month Supply @ $596)
        </label>
      </div>
    </div>
  );
};

export default TherapyForm;
