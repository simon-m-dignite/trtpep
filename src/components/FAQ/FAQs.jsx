import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { FAQS } from "../../constants/faqs";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { title: "Section 1", content: "Content for Section 1" },
    { title: "Section 2", content: "Content for Section 2" },
    { title: "Section 3", content: "Content for Section 3" },
  ];

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
            className={`w-full flex justify-between bg-gray-100 text-gray-500 items-center py-3 px-4 text-lg font-medium focus:outline-none ${
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
    </div>
  );
};

export default FAQs;
