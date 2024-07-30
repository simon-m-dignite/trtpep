import React from "react";

const ContentSection = () => {
  return (
    <div className="w-full py-24 horizontal-padding flex flex-col gap-y-20">
      <div>
        <h2 className="text-2xl font-semibold mx-auto text-center">WHAT IS TIRZEPATIDE THERAPY?</h2>
        <p className="text-gray-600 mt-4">
          Tirzepatide is a synthetic peptide composed of 39 amino acids that
          acts as a dual agonist for glucagon-like peptide-1 (GLP-1) and
          glucose-dependent insulinotropic polypeptide (GIP). These incretin
          hormones are secreted in response to nutrient intake and play a
          crucial role in stimulating insulin secretion. By harnessing the
          combined effects of GLP-1 and GIP, Tirzepatide offers exceptional
          glycemic control and metabolic benefits.
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
          <h2 className="text-2xl font-semibold">How Tirzepatide Works</h2>
          <p className="text-gray-600 mt-4">
            Tirzepatide stimulates insulin secretion from the pancreas by acting
            as both a GLP-1 and GIP agonist. Additionally, it increases the
            levels of adiponectin, a hormone that helps regulate blood glucose
            levels. This dual action provides superior hyperglycemic control
            compared to peptides that act solely as GLP-1 agonists.
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
            health. This dual-action therapy is an effective solution for those
            looking to achieve better control over their blood glucose levels
            and improve their overall health and well-being.
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
