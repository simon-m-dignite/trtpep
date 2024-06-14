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
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit
        nisi aspernatur saepe adipisci qui, commodi sit iure unde cupiditate,
        mollitia explicabo cumque voluptatum, ipsa cum? Perspiciatis ea ullam
        expedita!
      </p>
      <div className="relative">
        <h2 className="text-7xl md:text-7xl xl:text-9xl font-extrabold relative">
          <sup className="text-4xl font-semibold absolute top-2.5 -left-9">$</sup> 129
        </h2>
      </div>
      <p className="text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        ducimus!
      </p>
    </div>
  );
};

export default LabOrdersHero;
