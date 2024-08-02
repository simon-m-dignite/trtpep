import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { FAQS } from "../../constants/faqs";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(false);

  const handleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className={`w-full ${styles.paddingHorizontal} py-12 lg:py-24 flex flex-col gap-6`}
    >
      {FAQS.map((item, index) => (
        <div key={index} className="border border-gray-200">
          <button
            className={`w-full flex justify-between bg-gray-100 text-gray-500 items-center text-start py-3 px-4 text-base lg:text-lg font-medium focus:outline-none ${
              index === activeIndex ? "bg-gray-100" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <svg
              className={`w-4 h-4 transition-transform duration-300 transform ${
                index === activeIndex ? "rotate-0" : "rotate-180"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {index === activeIndex && (
            <div className="py-3 px-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
      <div className="w-full">
        <div className="w-full flex items-center justify-between bg-gray-100 py-3 px-4">
          <button
            className="w-full text-start text-gray-500 text-lg font-medium focus:outline-none"
            onClick={handleAccordion}
          >
            What is included in the TRT plans that you offer?
          </button>
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform duration-300 transform ${
              openAccordion ? "rotate-0" : "rotate-180"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="w-full">
          {openAccordion && (
            <div className="py-3 px-4 border border-gray-200 flex flex-col items-start gap-y-1">
              <p className="text-gray-600 text-sm font-semibold">
                Testosterone Therapy*
              </p>
              <p className="text-gray-600 text-sm">
                Includes Initial Consult, Testosterone Cypionate, Anastrozole,
                Syringes and Shipping.
              </p>
              <p className="text-gray-600 text-sm">
                - $250.00 - Without HCG (2.5 Month Supply @ $99/month)
              </p>
              <p className="text-gray-600 text-sm">
                - $375.00 - With HCG (2.5 Month Supply @ $149/month)
              </p>
              <p className="text-gray-600 text-sm">- N/A</p>

              <p className="text-gray-600 text-sm font-semibold mt-3">
                Peptide Therapy
              </p>
              <p className="text-gray-600 text-sm">
                Includes Initial Consult, Tesamorelin, Syringes and Shipping
              </p>
              <p className="text-gray-600 text-sm">
                - $699.00 - Peptides (3 Month Supply @ $233/month)
              </p>
              <p className="text-gray-600 text-sm">- N/A</p>

              <p className="text-gray-600 text-sm font-semibold mt-3">
                HCG Therapy
              </p>
              <p className="text-gray-600 text-sm">
                Includes Initial Consult, HCG, Syringes and Shipping.
              </p>
              <p className="text-gray-600 text-sm">
                - $199.00 - HCG (2.5 Month Supply @ $199)
              </p>
              <p className="text-gray-600 text-sm">- N/A</p>

              <p className="text-gray-600 text-sm font-semibold mt-3">
                Weight Loss Therapy
              </p>
              <p className="text-gray-600 text-sm">
                - $460.00 - Semaglutide (2.5 Month Supply @ $460)
              </p>
              <p className="text-gray-600 text-sm">
                - $1,490.00 - Tirzepatide (2.5 Month Supply @ $596)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

// {
//   question: "What is included in the TRT plans that you offer?",
//   answer: `Testosterone Therapy*
//     Includes Initial Consult, Testosterone Cypionate, Anastrozole, Syringes and Shipping.
//     - $250.00 - Without HCG (2.5 Month Supply @ $99/month)
//     - $375.00 - With HCG (2.5 Month Supply @ $149/month)
//     - N/A

//     Peptide Therapy
//     Includes Initial Consult, Tesamorelin, Syringes and Shipping
//     -  $699.00 - Peptides (3 Month Supply @ $233/month)
//     - N/A

//     HCG Therapy
//     Includes Initial Consult, HCG, Syringes and Shipping.
//     - $199.00 - HCG (2.5 Month Supply @ $199)
//     - N/A

//     Weight Loss Therapy
//     Includes Initial Consult, Weight loss Medications, Syringes and shipping
//     - $460.00 - Semaglutide (2.5 Month Supply @ $460)
//     - $1,490.00 - Tirzepatide (2.5 Month Supply @ $596)`,
// },
