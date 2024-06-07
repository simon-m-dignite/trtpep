import React from "react";
import { styles } from "../../styles/styles";
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className={`w-full h-screen ${styles.paddingHorizontal} hero-2`}>
      <div className="w-full h-full flex flex-col justify-center gap-6 lg:gap-10">
        <h1 className="text-yellow-600 text-4xl lg:text-7xl font-semibold">
          VIRTUAL MEDICAL VISITS
        </h1>
        <h3 className="text-white font-semibold text-lg md:text-2xl">
          Get affordable medications for LOW TESTOSTERONE and Anti-Aging
          remotely and delivered to your door!
        </h3>
        <h3 className="text-white font-bold text-lg md:text-2xl">
          MEDICATION PRESCRIBED BY A LICENSED PROVIDER
        </h3>
        <div>
          <Link
            to="/"
            className="bg-yellow-600 text-black px-3 py-2.5 rounded-lg uppercase text-sm font-medium"
          >
            enroll now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
