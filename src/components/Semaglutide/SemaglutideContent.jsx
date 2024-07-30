import React from "react";

const SemaglutideContent = () => {
  return (
    <div className="w-full py-24 border-t horizontal-padding flex flex-col gap-y-20">
      <div>
        <h2 className="text-2xl font-semibold mx-auto text-center">What is Semaglutide Therapy?</h2>
        <p className="text-gray-600 mt-4">
          Semaglutide is a synthetic peptide modeled after the naturally
          occurring hormone glucagon-like peptide-1 (GLP-1). As a GLP-1 receptor
          agonist, it mimics the effects of this gut-derived hormone, which is
          secreted in response to a meal to regulate insulin secretion based on
          glucose levels in the blood. Semaglutide is specifically designed to
          have an extended half-life, ensuring its potency and effectiveness
          over a longer period.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10">
        <div>
          <img
            src="/Semaglutide-imag1.webp"
            alt="Semaglutide-imag1"
            className="rounded-2xl"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">How Semaglutide Works</h2>
          <p className="text-gray-600 mt-4">
            Semaglutide stimulates the body's natural insulin secretion while
            inhibiting the release of glucagon. This dual action helps to lower
            blood glucose levels, making it an effective treatment for managing
            blood sugar. By maintaining a balanced blood glucose level,
            Semaglutide supports overall metabolic health.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold">
            Why Choose Semaglutide Therapy?
          </h2>
          <p className="text-gray-600 mt-4">
            Semaglutide therapy offers a comprehensive approach to managing
            blood sugar levels and improving overall metabolic health. By
            mimicking the natural hormone GLP-1, Semaglutide provides a range of
            benefits, from weight loss support to enhanced cardiovascular
            health. This therapy is an effective solution for those looking to
            achieve better control over their blood glucose levels and improve
            their overall health and well-being.
          </p>
        </div>
        <div>
          <img
            src="/Semaglutide-img-2.webp"
            alt="Semaglutide-imag1"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SemaglutideContent;
