import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutUsPage";
import ServicesAndProductsPage from "./pages/ServicesAndProductsPage";
import ContactPage from "./pages/ContactPage";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const NotFoundPage: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
  </div>
);

const App: React.FC = () => {
  const metaData = {
    title: "Flour Mill | Quality You Can Trust",
    description: "Supplying the finest and freshest flour for all your cooking needs.",
    keywords: "Flour, Fresh Flour, Quality Flour, Baking Supplies",
    author: "Flour Mill",
    ogImage: "https://example.com/flour-image.jpg",
    url: "https://yourwebsite.com/",
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* Helmet for SEO and Metadata */}
        <Helmet>
          <title>{metaData.title}</title>
          <meta name="description" content={metaData.description} />
          <meta name="keywords" content={metaData.keywords} />
          <meta name="author" content={metaData.author} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Open Graph Metadata */}
          <meta property="og:title" content={metaData.title} />
          <meta property="og:description" content={metaData.description} />
          <meta property="og:image" content={metaData.ogImage} />
          <meta property="og:url" content={metaData.url} />
          <meta property="og:type" content="website" />
          {/* Twitter Metadata */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metaData.title} />
          <meta name="twitter:description" content={metaData.description} />
          <meta name="twitter:image" content={metaData.ogImage} />
          {/* Content Security Policy */}
          <meta
            http-equiv="Content-Security-Policy"
            content="default-src 'self'; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; script-src 'self'; connect-src 'self'; img-src 'self' https://example.com; font-src 'self' https://cdnjs.cloudflare.com;"
          />
        </Helmet>

        <ScrollToTop />

        <Navbar />
        <main className="sm:text-sm">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ServicesAndProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
