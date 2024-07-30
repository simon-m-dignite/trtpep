import React, { useState } from "react";
import { styles } from "../../styles/styles";
import { FiMinus, FiPlus } from "react-icons/fi";

const Content = () => {
  return (
    <div
      className={`w-full px-4 md:px-8 lg:px-48 py-16 flex flex-col items-center gap-10`}
    >
      <div>
        <h1 className="text-3xl font-semibold">WHAT ARE PEPTIDES?</h1>
        <p className="text-gray-600 mt-2">
          Peptides are synthetic versions of natural compounds found in the
          body, consisting of small chains of amino acids—the basic building
          blocks of proteins. These molecules act as messengers, directing
          cellular activities crucial for functions such as tissue repair and
          hormone regulation. For instance, Tesamorelin emulates the actions of
          growth hormone-releasing hormone (GHRH), facilitating essential
          biological processes like hormone production and anti-inflammatory
          responses.
        </p>
      </div>

      <h1 className="text-3xl font-semibold mt-14 text-center">
        WHAT IS TESAMORELIN?
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img src="/TESAMORELIN-IMAGE-1.webp" alt="" className="brightness-95 rounded-2xl h-[250px] w-full object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Tesamorelin</h2>
          <p className="text-gray-600 mt-3">
            Tesamorelin originates from scientific research focused on hormone
            regulation and metabolism. Specifically developed to stimulate the
            body's production and release of growth hormone-releasing hormone
            (GHRH).
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div>
          <h2 className="text-xl font-semibold">
            Tesamorelin and Fat Reduction
          </h2>
          <p className="text-gray-600 mt-3">
            While Tesamorelin primarily boosts natural growth hormone levels,
            its ability to reduce fat has garnered significant attention.
            Studies demonstrate Tesamorelin's effectiveness in decreasing
            visceral fat, particularly in individuals with excess abdominal fat.
            <br />
            <br />
            The mechanism behind Tesamorelin's fat-reducing effects involves
            enhancing the body's natural growth hormone production. Growth
            hormone plays a pivotal role in regulating fat metabolism and muscle
            development. By increasing growth hormone levels, Tesamorelin
            promotes the breakdown of fat reserves, especially visceral fat,
            thereby enhancing body composition and fat distribution.
          </p>
        </div>
        <div>
          <img src="/tesamorelin-2.jpg" alt="" className="brightness-95 rounded-2xl" />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">Tesamorelin VS Ipamorelin</h2>
        <p className="text-gray-600 mt-3">
        Following the FDA's discontinuation of the popular peptide Ipamorelin, the question arises: Can Tesamorelin deliver similar benefits?
        </p>
        <p className="text-gray-600 mt-3">
        The answer is yes, and more! Both Tesamorelin and Ipamorelin enhance growth hormone (GH) production, benefiting muscle growth, exercise recovery, sleep quality, and improvements in hair, skin, and nails. These similarities highlight their role in comprehensive wellness and anti-aging strategies. However, Tesamorelin distinguishes itself by its notable effectiveness in targeting and reducing visceral abdominal fat. This specific fat-reducing capability sets Tesamorelin apart, offering significant advantages over Ipamorelin and other peptides. This unique attribute makes Tesamorelin an excellent choice for those seeking the combined benefits of Ipamorelin, with superior capabilities in fat loss.

        </p>
      </div>
    </div>
  );
};

export default Content;
