import React from "react";

const SermorelinContent = () => {
  return (
    <div
      className={`w-full px-4 md:px-8 lg:px-48 py-16 flex flex-col items-center gap-10`}
    >
      <div>
        <h1 className="text-3xl font-semibold">WHAT IS SERMORELIN THERAPY?</h1>
        <p className="text-gray-600 mt-2">
          To properly grow and develop, your body needs human growth hormone
          (hGH). This is a peptide hormone produced in the tiny part of your
          brain called the pituitary gland. Sermorelin is a synthetic form of
          GHRH, composed of 29 amino acids. Sermorelin is used as a medication
          for low HGH levels because it activates the pituitary gland to
          stimulate the production and secretion of growth hormone (GH).
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img
            src="/tesamorelin-3.jpg"
            alt=""
            className="brightness-95 rounded-2xl"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">How Sermorelin Works</h2>
          <p className="text-gray-600 mt-3">
            By mimicking GHRH, Sermorelin directly targets the pituitary gland,
            enhancing its ability to release growth hormone. This process
            promotes the proliferation of somatotroph cells, optimizing the
            body's natural production of GH.
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div>
          <h2 className="text-xl font-semibold">
            Why Choose Sermorelin Therapy?
          </h2>
          <p className="text-gray-600 mt-3">
            Sermorelin therapy offers a natural approach to boosting growth
            hormone levels, providing numerous benefits for overall health and
            vitality. By supporting the body's own production of growth hormone,
            Sermorelin helps individuals maintain youthful energy levels,
            enhance physical performance, and improve quality of life.
          </p>
        </div>
        <div>
          <img
            src="/tesamorelin-2.jpg"
            alt=""
            className="brightness-95 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SermorelinContent;
