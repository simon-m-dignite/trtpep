import React from "react";
import { styles } from "../../styles/styles";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HcgContent = () => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex flex-col items-start gap-6 py-16 px-4 md:px-8 lg:px-48`}
      >
        <h1 className="text-3xl font-semibold mx-auto">
          Discover HCG: Unleashing Your Body's Potential
        </h1>
        <p className="text-gray-600 xl:w-[90%] mx-auto">
          HCG (Human Chorionic Gonadotropin) is a natural powerhouse hormone,
          vital for optimizing essential functions within the male body.
          Renowned for its role in testosterone regulation, HCG has been a
          cornerstone in clinical applications, unveiling new pathways to male
          health and wellness. Whether you're aiming to enhance performance or
          tackle health challenges head-on, HCG promises a compelling journey of
          exploration and transformation.
        </p>

        <h2 className="text-3xl font-semibold my-4 mx-auto">
          Enhance Your TRT Journey with HCG
        </h2>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6 mb-10">
          <div>
            <img
              src="/hcg-therapy-image.jpg"
              alt="hcg-therapy-image"
              className="brightness-95 rounded-2xl"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              When it comes to maximizing men’s health, integrating HCG with
              Testosterone Replacement Therapy (TRT) can elevate your experience
              to new heights. Whether you're already committed to TRT or
              exploring the benefits, here's why adding HCG to your regimen is a
              game-changing move:
            </p>
            <div className="flex flex-col items-start gap-3">
              <div className="text-gray-600 flex items-start w-full">
                <div className="w-4 h-4 rounded-full bg-color mr-4 flex items-center justify-center mt-1">
                  <MdOutlineKeyboardArrowRight className="text-white h-4 w-5" />
                </div>
                <p>
                  HCG may Preserve Testicular Function & Size: While TRT may
                  lead to testicular shrinkage, HCG mimics natural luteinizing
                  hormone to maintain testicular size and vitality.
                </p>
              </div>
              <div className="text-gray-600 flex items-start w-full">
                <div className="w-4 h-4 rounded-full bg-color mr-4 flex items-center justify-center mt-1">
                  <MdOutlineKeyboardArrowRight className="text-white h-4 w-5" />
                </div>
                <p>
                  HCG may Boost Testosterone Naturally: TRT provides direct
                  testosterone, but HCG stimulates natural production, ensuring
                  a balanced testosterone boost.
                </p>
              </div>
              <div className="text-gray-600 flex items-start w-full">
                <div className="w-4 h-4 rounded-full bg-color mr-4 flex items-center justify-center mt-1">
                  <MdOutlineKeyboardArrowRight className="text-white h-4 w-5" />
                </div>
                <p>
                  HCG may Enhance Fertility: Concerned about future fatherhood?
                  HCG supports fertility alongside TRT, maintaining or even
                  enhancing sperm count.
                </p>
              </div>
              <div className="text-gray-600 flex items-start w-full">
                <div className="w-4 h-4 rounded-full bg-color mr-4 flex items-center justify-center mt-1">
                  <MdOutlineKeyboardArrowRight className="text-white h-4 w-5" />
                </div>
                <p>
                  HCG may Balance Estrogen Levels: HCG helps regulate
                  testosterone-to-estrogen ratios, optimizing TRT benefits
                  without estrogen-related concerns.
                </p>
              </div>
              <div className="text-gray-600 flex items-start w-full">
                <div className="w-4 h-4 rounded-full bg-color mr-4 flex items-center justify-center mt-1">
                  <MdOutlineKeyboardArrowRight className="text-white h-4 w-5" />
                </div>
                <p>
                  HCG may Promote Holistic Well-being: The TRT-HCG combo
                  enhances mood, energy, and overall vitality, offering a
                  comprehensive approach to male health and wellness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600">
          At TRTPEP, we pride ourselves on providing comprehensive care that
          includes access to HCG—a vital component often overlooked by other
          clinics and pharmacies. Whether you're on TRT and need to preserve
          optimal testicular function, seeking to enhance your natural
          testosterone production independently, or aiming to improve fertility
          and increase your chances of conception, we're here to support your
          unique health goals with the solutions you need.
        </p>

        <h3 className="text-3xl font-semibold mt-4 mx-auto">
          Your Trusted HCG Provider – TRTPEP Leads the Way!
        </h3>
        <p className="text-gray-600 xl:w-[90%] mx-auto">
          In today’s healthcare landscape, 99% of clinics have discontinued HCG
          services, leaving many men searching for this essential hormone. At
          TRTPEP, we stand apart as one of the few clinics steadfastly committed
          to providing HCG to our valued patients. Whether you’re navigating TRT
          without HCG elsewhere, boosting natural testosterone levels, or
          enhancing fertility, TRTPEP shines as a rare beacon in a sea of
          uncertainty. When other doors close, ours remains wide open. For
          uncompromising quality and assurance in your HCG needs, make the right
          choice: Choose TRTPEP.
        </p>

        {/* <h4 className="text-2xl font-semibold mt-10">
          FAQ's
        </h4> */}

        <div className="faq-container lg:w-[60%] mx-auto w-full mt-4">
          {/* {FAQ_DATA.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question w-full py-3 md:py-4 border-b border-gray-300 text-start text-lg font-medium text-gray-600 flex items-center justify-between gap-2"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question} {openIndex === index ? <FiPlus className=""/> : <FiMinus className=""/>}
              </button>
              <div
                className={`faq-answer text-gray-500 border-b border-gray-300 text-[15px] ${openIndex === index ? "visibe py-3 md:py-4" : "hidden"}`}
                aria-hidden={openIndex !== index}
              >
                {faq.answer}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HcgContent;
