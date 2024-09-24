import { lazy } from "react";
import Layout from "../components/Global/Layout";
import EnrollmentThankYouPage from "../pages/thankyou/EnrollmentThankYouPage";

const NewPatient = lazy(() => import("../pages/newPatient/NewPatient"));
const ContactUs = lazy(() => import("../pages/aboutus/ContactUs"));
const HcgTherapy = lazy(() => import("../pages/chooseTherapy/HcgTherapy"));
const TesamorelinTherapy = lazy(() =>
  import("../pages/chooseTherapy/HghPeptides")
);
const SermorelinTherapy = lazy(() =>
  import("../pages/chooseTherapy/SermorelinTherapy")
);

const HomePage = lazy(() => import("../pages/home/HomePage"));
const AboutUs = lazy(() => import("../pages/aboutus/AboutUs"));
const Blogs = lazy(() => import("../pages/blogs/Blogs"));
const Blog = lazy(() => import("../pages/blogs/Blog"));
const FAQ = lazy(() => import("../pages/faq/FAQ"));
const LabOrders = lazy(() => import("../pages/labOrders/LabOrders"));
const ExistingPatient = lazy(() =>
  import("../pages/existingPatient/ExistingPatient")
);
const TestosteroneTherapy = lazy(() =>
  import("../pages/chooseTherapy/TestosteroneTherapy")
);
const SemaglutideTherapy = lazy(() =>
  import("../pages/chooseTherapy/Semaglutide")
);
const TirzepatideTherapy = lazy(() =>
  import("../pages/chooseTherapy/TirzepatideTherapy")
);
const PaymentSuccessPage = lazy(() =>
  import("../pages/success/PaymentSuccessPage")
);

const TermsAndConditoins = lazy(() =>
  import("../pages/PrivacyPolicy/TermsAndConditions")
);

const PrivacyPolicy = lazy(() =>
  import("../pages/PrivacyPolicy/PrivacyPolicy")
);

const CancelationPolicy = lazy(() =>
  import("../pages/PrivacyPolicy/CancelationPolicy")
);

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
    url: "/blogs/:id",
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
  {
    title: "",
    url: "/trt-pep-refill-validation/",
    page: <Layout pages={<ExistingPatient />} />,
  },
  {
    title: "Lab Orders Page",
    url: "/testosterone-replacement-therapy/",
    page: <Layout pages={<TestosteroneTherapy />} />,
  },
  {
    title: "Lab Orders Page",
    url: "/thank-you-trt-enrollment/",
    page: <Layout pages={<EnrollmentThankYouPage />} />,
  },
  {
    title: "Lab Orders Page",
    url: "/hcg-therapy/",
    page: <Layout pages={<HcgTherapy />} />,
  },
  {
    title: "HghPeptides Page",
    url: "/tesamorelin-therapy/",
    page: <Layout pages={<TesamorelinTherapy />} />,
  },
  {
    title: "Sermorelin Therapy Page",
    url: "/sermorelin-therapy/",
    page: <Layout pages={<SermorelinTherapy />} />,
  },
  {
    title: "Sermorelin Therapy Page",
    url: "/semaglutide-therapy/",
    page: <Layout pages={<SemaglutideTherapy />} />,
  },
  {
    title: "Sermorelin Therapy Page",
    url: "/tirzepatide-therapy/",
    page: <Layout pages={<TirzepatideTherapy />} />,
  },
  {
    title: "Lab Order Success Page",
    url: "/payment-success/",
    page: <Layout pages={<PaymentSuccessPage />} />,
  },
  {
    title: "Terms And Conditions Page",
    url: "/terms-and-conditoins",
    page: <Layout pages={<TermsAndConditoins />} />,
  },
  {
    title: "Privacy Policy Page",
    url: "/privacy-policy",
    page: <Layout pages={<PrivacyPolicy />} />,
  },
  {
    title: "Cancelation Policy Page",
    url: "/cancelation-policy",
    page: <Layout pages={<CancelationPolicy />} />,
  },
];
