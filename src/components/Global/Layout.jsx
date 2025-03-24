import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ pages }) => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-auto">
      <Navbar />
      {pages}
      <Footer />
    </div>
  );
};

export default Layout;
