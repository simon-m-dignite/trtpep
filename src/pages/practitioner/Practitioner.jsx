import React from "react";

const Practitioner = () => {
  return (
    <div className="bg-white mt-36 text-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
          Meet TRTPEP's Practitioners
        </h1>

        {/* Placeholder for photo */}

        <img
          src="/practitioner/person.jpg"
          alt=""
          className="w-auto h-auto border border-gray-300 bg-gray-100 mb-10"
        />

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 underline">
            Robert Napierala, Jr.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rob is a Board Certified Adult Nurse Practitioner licensed in both
            New York & Florida.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In addition to the requisite Board certifications, DEA registry and
            licenses, Rob has been added to the TRTPEP practitioner panel
            because of his extensive level of experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            He has been practicing in the ambulatory and hospital based
            medical/surgical field for over a decade, and maintains his own
            aesthetic practice as well, giving him a wealth of experience in
            maintaining both health and wellness, as well as beauty.
          </p>
          <p className="text-gray-700 leading-relaxed">
            He is passionate about helping people feel and look their best
            through quality care.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-left mb-10 text-gray-900">
          TRTPEP's Pharmacy Partners
        </h2>

        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 underline md:mr-4">
              Olympia Pharmaceuticals: A 503A and 503B Partner
            </h3>
          </div>

          {/* Placeholder for logos */}
          <div className="flex flex-col  justify-start items-start gap-6 my-8">
            <img
              src="/practitioner/olympia.jpg"
              alt=""
              className="w-48 h-48 border border-gray-300 object-scale-down bg-black "
            />

            <img
              src="/practitioner/legitcert.jpg"
              alt=""
              className="w-48 h-48 border border-gray-300 bg-black object-scale-down "
            />
          </div>

          <p className="text-gray-700 leading-relaxed">
            Olympia Pharmaceuticals is a state of the art FDA 503B
            pharmaceutical outsourcing facility and 503A pharmacy providing
            access to high-quality age management and nutritional medications
            across the US. Our growing line of anti-aging therapy products
            includes sterile injectables, non-sterile, lyophilized, and office
            use compounded medications for practice enhancement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practitioner;
