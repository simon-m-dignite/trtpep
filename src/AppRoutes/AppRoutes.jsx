import { lazy } from "react";
import Layout from "../components/Global/Layout";

const HomePage = lazy(() => import("../pages/home/HomePage"));

export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Layout pages={<HomePage />} />,
  },
];
