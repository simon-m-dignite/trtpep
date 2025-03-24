import React from "react";

const ContentSection = () => {
  return (
    <div className="w-full py-24 horizontal-padding flex flex-col gap-y-20">
      <div>
        <h2 className="text-2xl font-semibold mx-auto text-center">
          WHAT IS TIRZEPATIDE THERAPY?
        </h2>
        <p className="text-gray-600 mt-4">
          Tirzepatide is a synthetic peptide composed of 39 amino acids that
          acts as a dual agonist for glucagon-like peptide-1 (GLP-1) and
          glucose-dependent insulinotropic polypeptide (GIP). These incretin
          hormones are secreted in response to nutrient intake and play a
          crucial role in stimulating insulin secretion. By harnessing the
          combined effects of GLP-1 and GIP, Tirzepatide offers exceptional
          glycemic control and metabolic benefits. While this is primarily a
          drug used in diabetics, it has been shown to assist in weight loss.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10">
        <div>
          <img
            src="/TirzepatideImg2.webp"
            alt="Semaglutide-imag1"
            className="rounded-2xl lg:h-[320px] w-full bg-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">
            How Tirzepatide Works In Weight Loss
          </h2>
          <p className="text-gray-600 mt-4">
            Tirzepatide promotes weight loss by decreasing appetite and
            prolonging feelings of fullness. It has been shown to mimick certain
            natural hormones in the body, including GIP and GLP-1 receptors,
            which curb appetite, boost metabolism, reduce calorie intake, and
            improve blood sugar control. Tirzepatide also slows the movement of
            food from the stomach into the small intestine, making you feel full
            more quickly and for a longer period of time.
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold">
            Why Choose Tirzepatide Therapy?
          </h2>
          <p className="text-gray-600 mt-4">
            Tirzepatide therapy offers a comprehensive approach to managing
            blood sugar levels and improving overall metabolic health. By acting
            as both a GLP-1 and GIP agonist, Tirzepatide provides a range of
            benefits, from weight loss support to enhanced cardiovascular
            health. This dual-action therapy may be an effective solution for
            those looking to achieve better control weight and improve their
            overall health and well-being.
          </p>
        </div>
        <div>
          <img
            src="/Tirzepatide1.webp"
            alt="Semaglutide-imag1"
            className="rounded-2xl lg:h-[320px] w-full bg-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
