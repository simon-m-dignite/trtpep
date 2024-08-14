import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = ({ handleShowNav }) => {
  //   const [showNav, setShowNav] = useState(false);
  //   const handleShowNav = () => {
  //     setShowNav(!showNav);
  //   };
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [showContactPage, setShowContactPage] = useState(false);
  const [showPayNowLinks, setShowPayNowLinks] = useState(false);
  const [openWeightLossDropdown, setOpenWeightLossDropdown] = useState(false);
  const [openPeptideDropdown, setOpenPeptideDropdown] = useState(false);

  const handleNavigateToAboutPage = () => {
    navigate("/about");
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleShowPayNowLinksMouseEnter = () => {
    setShowPayNowLinks(true);
  };

  const handleShowPayNowLinksMouseLeave = () => {
    setShowPayNowLinks(false);
  };
  return (
    <div className="w-[90%] md:w-[50%] h-full bg-white float-end relative pt-16 shadow-2xl">
      <button
        className="w-8 h-8 bg-color p-1.5 absolute top-4 right-4"
        onClick={handleShowNav}
      >
        <CgClose className="w-full h-full text-white" />
      </button>

      <div className="w-full px-8">
        <Link
          to="/"
          className="font-bold text-base uppercase border-b py-3 w-full block"
        >
          About Us
        </Link>
        <Link
          to="/"
          className="font-bold text-base uppercase border-b py-3 w-full block"
        >
          blog
        </Link>
        <Link
          to="/"
          className="font-bold text-base uppercase border-b py-3 w-full block"
        >
          faq
        </Link>
        <div className="w-full text-start">
          <button
            onClick={handleMouseEnter}
            className="font-bold text-base uppercase border-b py-3 w-full text-start flex items-center justify-between"
          >
            <span>choose a therapy</span>
            <MdKeyboardArrowDown className="text-xl" />
          </button>
        </div>
        <div className="w-full">
          {isDropdownOpen && (
            <div
              className="rounded-md bg-white flex flex-col items-start"
              onClick={handleMouseEnter}
            >
              <Link
                to="/testosterone-replacement-therapy/"
                className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
              >
                Testosterone Therapy
              </Link>
              <Link
                to="/hcg-therapy/"
                className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
              >
                HCG Therapy
              </Link>
              <div className="w-full relative z-20">
                <button
                  onClick={() => setOpenPeptideDropdown(!openPeptideDropdown)}
                  onMouseLeave={() => setOpenPeptideDropdown(false)}
                  className={`w-full text-[15px] text-start block font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2 z-20`}
                >
                  Peptide Therapy
                </button>
                {openPeptideDropdown && (
                  <div
                    className=" bg-white border w-full pr-4 z-20 flex flex-col items-start"
                    onMouseEnter={() => setOpenPeptideDropdown(true)}
                    onMouseLeave={() => setOpenPeptideDropdown(false)}
                  >
                    <Link
                      to="/tesamorelin-therapy/"
                      className={`block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-10 py-2`}
                    >
                      Tesamorelin Therapy
                    </Link>
                    {/* <Link
                        to="/peptide-therapy/"
                        className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                      >
                        BPC-157 Therapy
                      </Link>
                      <Link
                        to="/peptide-therapy/"
                        className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                      >
                        CJC-1295 Therapy
                      </Link> */}
                    <Link
                      to="/sermorelin-therapy/"
                      className={`text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-10 py-2`}
                    >
                      Sermorelin Therapy
                    </Link>
                  </div>
                )}
              </div>
              <div className="w-full relative z-10">
                <button
                  onMouseEnter={() => setOpenWeightLossDropdown(true)}
                  onMouseLeave={() => setOpenWeightLossDropdown(false)}
                  className={`w-full block text-[15px] text-start font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6 py-2`}
                >
                  Weight loss Therapy
                </button>
                {openWeightLossDropdown && (
                  <div
                    className="rounded-md bg-white border py-6 w-60 shadow-xl absolute top-6 flex flex-col items-start gap-4 -right-40 z-10"
                    onMouseEnter={() => setOpenWeightLossDropdown(true)}
                    onMouseLeave={() => setOpenWeightLossDropdown(false)}
                  >
                    <Link
                      to="/semaglutide-therapy/"
                      className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6`}
                    >
                      Semaglutide Therapy
                    </Link>
                    <Link
                      to="/tirzepatide-therapy/"
                      className={`w-full block text-[15px] font-semibold uppercase hover:text-[#c00000] transition-all duration-300 px-6`}
                    >
                      Tirzepatide Therapy
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <Link
          to="/"
          className="font-bold text-base uppercase border-b py-3 w-full block"
        >
          labs
        </Link>
        <Link
          to="/"
          className="font-bold text-base uppercase border-b py-3 w-full block"
        >
          pay now
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
