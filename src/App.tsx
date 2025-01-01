import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutUsPage";
import ServicesAndProductsPage from "./pages/ServicesAndProductsPage";
import ContactPage from "./pages/ContactPage";

const ScrollToTop: React.FC = () => {
  React.useEffect(() => {
    const handleScroll = () => window.scrollTo(0, 0);
    handleScroll();
  }, []);
  return null;
};

const NotFoundPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
  </div>
);

const App: React.FC = () => {
  return (

  <div className="sm:text-sm">
  <Router>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ServicesAndProductsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Fallback Route */}
    </Routes>
    <Footer />
  </Router>
</div>

  );
};

export default App;
