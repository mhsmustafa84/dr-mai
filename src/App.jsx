import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import ContactPage from "./components/Pages/ContactPage";
import ErrorPage from "./components/Pages/ErrorPage";
import PortfolioDetailsPage from "./components/Pages/PortfolioDetailsPage";
import ServiceDetailsPage from "./components/Pages/ServiceDetailsPage";
import ServicesPage from "./components/Pages/ServicesPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import Layout from "./components/Layout";
import FaqPage from "./components/Pages/FaqPage";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route
            path="service/:serviceDetailsId"
            element={<ServiceDetailsPage />}
          />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route
            path="portfolio/:portfolioDetailsId"
            element={<PortfolioDetailsPage />}
          />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
