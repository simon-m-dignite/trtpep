import React, { useState } from "react";
import Header from "../../components/TestosteroneTherapy/Header";
import { FiMinus, FiPlus } from "react-icons/fi";
import Form from "../../components/TestosteroneTherapy/Form";

const FAQ_DATA = [
  {
    question: "Which states does TRTPEP operate in?",
    answer:
      "TRTPEP operates nationwide, excluding Alabama, Alaska, Arkansas, and Hawaii.",
  },
  {
    question: "Where do my medications come from?",
    answer:
      "All our medications are prescribed by licensed providers and dispensed from FDA-registered pharmacies in the USA. Medications are only prescribed after a thorough medical screening and provider consultation.",
  },
  {
    question: "Can I receive TRT without blood work?",
    answer:
      "No, a blood test is required to determine if you're eligible for testosterone replacement therapy.",
  },
  {
    question: "Do you accept results from home blood tests?",
    answer:
      "No, we require lab tests performed under supervised conditions to verify accuracy and ensure safety.",
  },
];

const TestosteroneTherapy = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full">
      <Header />
      <div
        className={`w-full flex flex-col items-start gap-4 py-16 px-4 md:px-8 lg:px-48`}
      >
        <h1 className="text-3xl font-semibold">WHAT IS TESTOSTERONE?</h1>
        <p className="text-gray-600">
          Testosterone, the cornerstone of male vitality, emerges as the primary
          male sex hormone just 8 weeks after conception. Vital for testicular
          and prostate development, as well as muscle mass, bone density, facial
          hair, libido, and sexual function in men.
        </p>
        <p className="text-gray-600">
          Testosterone peaks during puberty, but declines after age 30. Recent
          decades have seen unprecedented drops in men's testosterone levels,
          highlighting the importance of proactive health management.
        </p>
        <img
          src="/testosterone-img.webp"
          alt="testosterone-image"
          className=" my-6 rounded-xl lg:h-[80vh] w-full"
        />
        <p className="text-gray-600">
          Today, the average 30-year-old has testosterone levels akin to a man
          twice his age—around 60 to 65 years old.
        </p>
        <p className="text-gray-600">
          Facing this reality, there's no cure for low testosterone, but it can
          be effectively managed with testosterone replacement therapy (TRT).
          For over 90 years, TRT has been a reliable solution for men looking to
          reverse the symptoms of low testosterone and regain vitality.
        </p>

        <h3 className="text-2xl md:text-3xl font-semibold mt-4">
          MEN UNDERGOING TESTOSTERONE REPLACEMENT THERAPY MAY EXPERIENCE THE
          FOLLOWING BENEFITS:
        </h3>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
          <div className="flex flex-col items-start gap-12">
            <div className="w-full flex items-start gap-6">
              <img
                src="/brain.png"
                alt="brain-image"
                className="w-16 h-16 md:w-32 md:h-28"
              />
              <div className="flex flex-col items-start gap-1">
                <h5 className="font-semibold">Brain</h5>
                <p className="text-sm text-gray-500">
                  Enhanced mood and confidence
                </p>
                <p className="text-sm text-gray-500">
                  Improved memory and cognitive function
                </p>
                <p className="text-sm text-gray-500">Increased focus</p>
              </div>
            </div>
            <div className="w-full flex items-start gap-6">
              <img
                src="/heart-health-transformed.webp"
                alt="brain-image"
                className="w-16 h-16 md:w-32 md:h-28"
              />
              <div className="flex flex-col items-start gap-1">
                <h5 className="font-semibold">Heart Health</h5>
                <p className="text-sm text-gray-500">
                  Lower cholesterol levels
                </p>
                <p className="text-sm text-gray-500">Reduced blood pressure</p>
              </div>
            </div>
            <div className="w-full flex items-start gap-6">
              <img
                src="/sexual-health.jpg"
                alt="brain-image"
                className="w-16 h-16 md:w-32 md:h-28"
              />
              <div className="flex flex-col items-start gap-1">
                <h5 className="font-semibold">Sexual Health</h5>
                <p className="text-sm text-gray-500">
                  Heightened sex drive and intimacy desire
                </p>
                <p className="text-sm text-gray-500">
                  Improved endurance during intercourse
                </p>
                <p className="text-sm text-gray-500">
                  Maintenance of prostate health
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end gap-12">
            <div className="w-full flex items-start flex-row-reverse md:flex-row justify-end gap-6">
              <div className="flex flex-col items-start md:items-end gap-1">
                <h5 className="font-semibold">Muscles</h5>
                <p className="text-sm text-gray-500">
                  Increased muscle growth, strength, and endurance
                </p>
                <p className="text-sm text-gray-500">
                  Reduction in abdominal fat
                </p>
              </div>
              <img
                src="/muscle-image.png"
                alt="brain-image"
                className="w-16 h-16 md:w-28 md:h-24"
              />
            </div>
            <div className="w-full flex items-start flex-row-reverse  md:flex-row justify-end gap-6">
              <div className="flex flex-col items-start md:items-end gap-1">
                <h5 className="font-semibold">Bones</h5>
                <p className="text-sm text-gray-500">Enhanced bone density</p>
                <p className="text-sm text-gray-500">
                  Improved red blood cell production
                </p>
                <p className="text-sm text-gray-500">
                  Healthier ligaments and tendons
                </p>
              </div>
              <img
                src="/bones.png"
                alt="brain-image"
                className="md:w-28 md:h-28 w-16 h-16"
              />
            </div>
            <div className="w-full flex items-start flex-row-reverse md:flex-row justify-end gap-6">
              <div className="flex flex-col items-start md:items-end gap-1">
                <h5 className="font-semibold">Skin</h5>
                <p className="text-sm text-gray-500">
                  Stimulated hair and collagen growth
                </p>
                <p className="text-sm text-gray-500">Healthier skin and hair</p>
                <p className="text-sm text-gray-500">Reduction in wrinkles</p>
              </div>
              <img
                src="/skin-img.png"
                alt="brain-image"
                className="md:w-28 md:h-28 w-16 h-16"
              />
            </div>
          </div>
        </div>

        <p className="text-gray-600">
          Nearly one-third of men experience low testosterone, a number that may
          actually be higher due to underreporting. Many men are unaware they
          have low T, while others hesitate to discuss it due to pride.
        </p>
        <p className="text-gray-600">
          By 2025, an estimated 10 million men in America will grapple with low
          testosterone, solidifying it as one of the most prevalent yet
          undiagnosed and untreated conditions.
        </p>

        {/* <h4 className="text-2xl font-semibold mt-10 mx-auto">
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
                  <FiMinus className="" />
                ) : (
                  <FiPlus className="" />
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
        </div> */}
      </div>
      <Form />
    </div>
  );
};

export default TestosteroneTherapy;
