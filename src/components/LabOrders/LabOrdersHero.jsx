import React from "react";
import { styles } from "../../styles/styles";

const LabOrdersHero = () => {
  return (
    <div
      className={`lab-order-hero ${styles.paddingHorizontal} text-white flex flex-col items-center justify-center gap-6 text-center`}
    >
      <h1 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
        Order Labs
      </h1>
      <p className="lg:w-[90%]">
        If you are a new or existing patient interested in purchasing a lab
        order from TRT Nation, please purchase it here. You will receive a Lab
        requisition by email with instructions within 24hrs. Take your
        requisition to your local LabCorp to fulfill your blood draw.
      </p>
      <div className="relative">
        <h2 className="text-7xl md:text-7xl xl:text-9xl font-extrabold relative">
          <sup className="text-4xl font-semibold absolute top-2.5 -left-9">
            $
          </sup>{" "}
          124.95
        </h2>
      </div>
      <p className="text-[13px]">
        Includes testing for Total testosterone, Complete blood count,
        Comprehensive metabolic panel, Estradiol . PSA is added for patients
        over 40.
      </p>
    </div>
  );
};

export default LabOrdersHero;
