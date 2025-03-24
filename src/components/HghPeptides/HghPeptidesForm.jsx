import React from "react";
import { styles } from "../../styles/styles";

const HghPeptidesForm = () => {
  return (
    <form className={`w-full flex flex-col items-center text-center gap-4 py-20 mx-auto bg-gray-50 ${styles.paddingHorizontal}`} id="hgh-peptides-form">
      <h1 className="text-xl font-semibold">
        Enroll now to learn more and get a complete list of all the peptides
        available <br /> for anti-aging, weight loss, injury and wound healing
        and much more.
      </h1>
      <h3 className="text-lg font-semibold mt-4">
        ENROLL IN TESAMORELIN THERAPY
      </h3>

      <div className="w-full flex flex-col gap-4 md:gap-6 mt-6 lg:w-[60%]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border p-3 text-sm rounded-md outline-none text-gray-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border p-3 text-sm rounded-md outline-none text-gray-500"
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 text-sm rounded-md outline-none text-gray-500"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full border p-3 text-sm rounded-md outline-none text-gray-500"
          />
        </div>
        <button className="w-full text-white bg-color rounded-md py-3 uppercase text-base font-medium">
          get started
        </button>
      </div>
    </form>
  );
};

export default HghPeptidesForm;
