import { lazy } from "react";
import Layout from "../components/Global/Layout";
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
];
