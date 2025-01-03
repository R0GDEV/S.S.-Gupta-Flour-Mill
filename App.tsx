import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutUsPage";
import ServicesAndProductsPage from "./pages/ServicesAndProductsPage";
import ContactPage from "./pages/ContactPage";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the pathname changes
    console.log("ScrollToTop triggered for path:", pathname); // For debugging
  }, [pathname]);

  return null;
};


const NotFoundPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
  </div>
);

function App() {
  return (
    <div>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="sm:text-sm">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ServicesAndProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Fallback Route */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
