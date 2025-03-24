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
          value={"224.97"}
          checked={formData.therapyDetails.testosterone?.price === 224.97}
          onChange={() =>
            handleRadioChange("testosterone", "Without HCG", 224.97)
          }
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $224.97 - Without HCG (2.5 Month Supply @ $89.99/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="testosterone"
          value={"597.47"}
          checked={formData.therapyDetails.testosterone?.price === 597.47}
          onChange={() => handleRadioChange("testosterone", "With HCG", 597.47)}
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $597.47- With HCG (2.5 Month Supply @ $238.99/month)
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          name="testosterone"
          value={0}
          checked={formData.therapyDetails.testosterone?.price === 0}
          onChange={() => handleRadioChange("testosterone", "N/A", 0)}
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
          disabled
          checked={formData.therapyDetails.peptide?.price === 699}
          onChange={() => handleRadioChange("peptide", "Tesamorelin", 699)}
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1 line-through">
          $699.00 - Tesamorelin (3 Month Supply @ $233/month){" "}
        </label>
        <span className="text-sm font-medium text-red-600">Out of stock</span>
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
          value={0}
          checked={formData.therapyDetails.peptide?.price === 0}
          onChange={() => handleRadioChange("peptide", "N/A", 0)}
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          N/A
        </label>
      </div>

      {formData?.therapyDetails?.testosterone?.title == "With HCG" ||
      formData?.therapyDetails?.testosterone?.title == "Without HCG" ? (
        <></>
      ) : (
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
              value={"497.50"}
              checked={formData.therapyDetails.hcg?.price === 497.5}
              onChange={() => handleRadioChange("hcg", "HCG", 497.5)}
              id=""
              className="w-5 h-5"
            />
            <label htmlFor="" className="text-sm mt-1">
              $497.50 - HCG (2.5 Month Supply @ $199 Monthly)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="hcg"
              value={0}
              checked={formData.therapyDetails.hcg?.price === 0}
              onChange={() => handleRadioChange("hcg", "N/A", 0)}
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
          checked={formData.therapyDetails.weightLoss?.price === 947.5}
          onChange={() => handleRadioChange("weightLoss", "Semaglutide", 947.5)}
          id=""
          className="w-5 h-5"
        />
        <label htmlFor="" className="text-sm mt-1">
          $947.50- Semaglutide ( 2.5 Month Supply @ $379/Monthly)
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
