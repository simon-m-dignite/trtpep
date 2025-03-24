import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
const FAQ_DATA = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "How does useState work?",
    answer:
      "useState is a Hook that lets you add React state to function components.",
  },
  {
    question: "What is a component?",
    answer:
      "A component is a reusable piece of code that represents a part of the UI.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full pt-10 pb-20">
      <h4 className="text-2xl font-semibold mx-auto text-center">
        Frequently Asked Questions
      </h4>

      <div className="faq-container lg:w-[60%] mx-auto w-full mt-4">
        {FAQ_DATA.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question w-full py-3 md:py-4 border-b border-gray-300 text-start text-lg font-medium text-gray-600 flex items-center justify-between gap-2"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}{" "}
              {openIndex === index ? (
                <FiPlus className="" />
              ) : (
                <FiMinus className="" />
              )}
            </button>
            <div
              className={`faq-answer text-gray-500 border-b border-gray-300 text-[15px] ${
                openIndex === index ? "visibe py-3 md:py-4" : "hidden"
              }`}
              aria-hidden={openIndex !== index}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
