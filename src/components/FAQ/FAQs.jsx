import React, { useState } from "react";
import { styles } from "../../styles/styles";

const FAQS_DATA = [
  {
    question: "Which states does TRTPEP operate in?",
    answer:
      "TRTPEP operates nationwide, excluding Alabama, Alaska, Arkansas, and Hawaii. We will use a pharmacy that ships to your specific state.",
  },
  {
    question: "Where do my medications come from?",
    answer:
      "All our medications are prescribed by licensed providers and dispensed from FDA-registered pharmacies in the USA. Medications are only prescribed after a thorough medical screening and provider consultation.",
  },
  {
    question:
      "Can I receive TRT or other medications/supplements without lab work?",
    answer:
      "No, a lab panel is required to determine if you're eligible for any of our prescribed therapies.",
  },
  {
    question: "Do you accept results from home blood tests?",
    answer:
      "No, we require lab tests performed under supervised conditions to verify accuracy and ensure safety.",
  },
  {
    question:
      "Why aren't labs included in the price of TRTPEP's treatment plans?",
    answer:
      "Unlike other clinics, we offer patients the flexibility to provide their own labs or use our services for a fee of $124.95.",
  },
  {
    question: "Which labs are included in your $124.95 blood panel?",
    answer:
      "Our panel includes Total Testosterone, CBC, CMP, Estradiol Sensitive, and PSA (for patients over 40).",
  },
  {
    question: "How often is blood work required?",
    answer:
      "Blood work is required after the first 10 weeks of treatment, then every 6 months initially, and annually thereafter. These tests are crucial to monitor treatment progress and adjust the program as needed.",
  },
  {
    question:
      "How soon will I receive my medication after signing up and choosing a plan?",
    answer:
      "Once you complete the necessary forms and consultation, expect to receive your medication within 10 business days.",
  },
  {
    question:
      "If I provide my own labs, what's required and how recent can they be?",
    answer:
      "We accept labs up to 6 months old, including Total Testosterone, CBC, CMP, Estradiol, and PSA (required for men over 40).",
  },
  {
    question: "How are medications shipped?",
    answer:
      "All medications are shipped via FedEx from FDA approved compounding pharmacies, and you can track your package using the FedEx mobile app.",
  },
  {
    question: "How do I order labs from TRTPEP?",
    answer:
      "You can order labs online, and within 24 hours, you'll receive a lab order via email. Simply take this to any LAB CORP for your blood draw, with results available in 2-3 days.",
  },
  {
    question: "Do I need to lower my Testosterone levels to switch to TRTPEP?",
    answer:
      "No, elevated levels are expected if you're transferring from another clinic. We don't require patients to lower their testosterone levels unnecessarily.",
  },
  {
    question: "How do I refill my prescription?",
    answer:
      "Your medication supply lasts for 2.5 months. You can refill on-line starting from week 8 of your current supply, and you'll receive notifications once your refill ships.",
  },
  {
    question: "Can I travel with my medication?",
    answer:
      "Yes, you can travel with your medication. Please review TSA guidelines for traveling with medications at TSA.gov.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Your medications are shipped via FedEx, and you can track your order through the FedEx app once it's processed.",
  },
  {
    question: "Is there an age restriction?",
    answer: "Yes, we only treat patients aged 24 and older.",
  },
];

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
      {FAQS_DATA.map((item, index) => (
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
                index === activeIndex ? "rotate-180" : "rotate-0"
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
            What is included in the TRTPEP plans that you offer?
          </button>
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform duration-300 transform ${
              openAccordion ? "rotate-180" : "rotate-0"
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
                Includes Initial Consult, Testosterone Cypionate w/ Anastrozole,
                Syringes and Shipping.
              </p>
              <p className="text-gray-600 text-sm">
                - $250.00 - Without HCG (2.5 Month Supply @ $99/monthly)
              </p>
              <p className="text-gray-600 text-sm">
                - $497.50 - HCG (2.5 Month Supply @ $199 Monthly)
              </p>
              <p className="text-gray-600 text-sm">- N/A</p>

              <p className="text-gray-600 text-sm font-semibold mt-3">
                Peptide Therapy
              </p>
              <p className="text-gray-600 text-sm">
                Includes Initial Consult, Tesamorelin, Syringes and Shipping
              </p>
              <p className="text-gray-600 text-sm">
                - $699.00 - Peptides (3 Month Supply @ $233/monthly)
              </p>
              <p className="text-gray-600 text-sm">- N/A</p>

              <p className="text-gray-600 text-sm font-semibold mt-3">
                HCG Therapy
              </p>
              <p className="text-gray-600 text-sm">
                Includes Initial Consult, HCG, Syringes and Shipping.
              </p>
              <p className="text-gray-600 text-sm">
                - $497.50 - HCG (2.5 Month Supply @ $199/Monthly)
              </p>
              <p className="text-gray-600 text-sm">- N/A</p>

              <p className="text-gray-600 text-sm font-semibold mt-3">
                Weight Loss Therapy
              </p>
              <p className="text-gray-600 text-sm">
                - $947.50- Semaglutide (2.5 Month Supply @ $379/Monthly)
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
