import { lazy } from "react";
import Layout from "../components/Global/Layout";
import AboutUs from "../pages/aboutus/AboutUs";
import NewPatient from "../pages/newPatient/NewPatient";
import ContactUs from "../pages/aboutus/ContactUs";
// import FAQ from "../pages/faq/FAQ";
// import Blogs from "../pages/blogs/Blogs";
// import Blog from "../pages/blogs/Blog";
// import LabOrders from "../pages/labOrders/LabOrders";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const Blogs = lazy(()=> import("../pages/blogs/Blogs"));
const Blog = lazy(()=> import("../pages/blogs/Blog"));
const FAQ = lazy(()=> import("../pages/faq/FAQ"));
const LabOrders = lazy(()=> import("../pages/labOrders/LabOrders"))

export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Layout pages={<HomePage />} />,
  },
  {
    title: "About Page",
    url: "/about",
    page: <Layout pages={<AboutUs />} />,
  },
  {
    title: "Contact Us Page",
    url: "/contact-testosterone-replacement",
    page: <Layout pages={<ContactUs />} />,
  },
  {
    title: "Blogs Page",
    url: "/blogs",
    page: <Layout pages={<Blogs />} />,
  },
  {
    title: "Blog Page",
    url: "/blogs/8976",
    page: <Layout pages={<Blog />} />,
  },
  {
    title: "FAQs Page",
    url: "/faq",
    page: <Layout pages={<FAQ />} />,
  },
  {
    title: "Lab Orders Page",
    url: "/lab-orders",
    page: <Layout pages={<LabOrders />} />,
  },
  {
    title: "Lab Orders Page",
    url: "/new-patients",
    page: <Layout pages={<NewPatient />} />,
  },
];
